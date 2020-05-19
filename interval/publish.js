/**
 *
 * create by ligx
 *
 * @flow
 */

const { writeJSON, removeSync } = require('fs-extra');
const crossSpawn = require('@lugia/mega-utils/lib/crossSpawn');
const path = require('path');
const ossConfig = require('./oss');
const { version, megaIDE } = require('./version');
const replace = require('replace-in-file');
const OSS = require('ali-oss');
const fs = require('fs');
const glob = require('glob');

async function spawn(args, msg) {
  console.info(msg, '开始');
  const yarn = crossSpawn('yarn', args);
  return new Promise((resolve, reject) => {
    yarn.on('error', error => {
      console.error(error);
      reject(error);
    });
    yarn.stdout.on('data', chunk => {
      console.info(chunk.toString());
    });
    yarn.on('exit', (code, error) => {
      if (code === 0) {
        console.info(msg, '完毕');
        resolve(msg);
      } else {
        console.error(msg, error);
        reject(msg);
      }
    });
  });
}

const client = OSS(ossConfig);
async function uploadOSS(target, source) {
  await client.putStream(target, fs.createReadStream(source));
}

async function getFiles(path, fileExt) {
  return await new Promise((resolve, reject) => {
    glob(
      fileExt,
      {
        cwd: path
      },
      (error, files) => {
        if (error) {
          reject(error);
        }
        resolve(files);
      }
    );
  });
}

async function getDirections(path) {
  return await new Promise((resolve, reject) => {
    glob(
      '*/',
      {
        cwd: path
      },
      (error, files) => {
        if (error) {
          reject(error);
        }
        resolve(files);
      }
    );
  });
}

async function publish(param) {
  const dist = path.join(__dirname, '../dist');
  removeSync(dist);
  console.info('清空打包目录');

  const { base, version } = param;

  const target = '../lugia.config.json';
  await writeJSON(target, {
    publicPath: `https://lugia.oss-cn-beijing.aliyuncs.com/lugia-site/${version}/`
  });
  //
  await spawn(['run', 'create'], '创建门户');
  await spawn(['build'], '开始构建门户');

  const getDistPath = target => path.join(dist, target);
  const indexJS = getDistPath('index.*.js');

  const replaceDownUrl = async (from, to) => {
    await replace({
      files: indexJS,
      from,
      to
    });
  };
  const { mac, win, pdf } = param;
  await replaceDownUrl('#DownLoadMac', mac);
  await replaceDownUrl('#DownLoadWindows', win);
  await replaceDownUrl('#DownLoadWindows', pdf);

  console.info('替换下载地址');
  console.info('上传JS文件');
  const jsFiles = await getFiles(dist, '**/*.js');

  const getAliBasePath = target => path.join('lugia-site', version, target);

  for (let i = 0; i < jsFiles.length; i++) {
    const file = jsFiles[i];
    const target = getDistPath(file);
    await uploadOSS(getAliBasePath(file), target);
    console.info(`${target} done!`);
  }

  console.info('上传JS文件 done');

  console.info('上传CSS文件');
  const cssFiles = await getFiles(dist, '**/*.css');

  for (let i = 0; i < cssFiles.length; i++) {
    const file = cssFiles[i];
    const target = getDistPath(file);
    await uploadOSS(getAliBasePath(file), target);
    console.info(`${target} done!`);
  }

  console.info('上传JS文件 done');

  console.info('上传资源文件');
  const dir = 'static';
  console.info('处理目录', dir);
  const files = await getFiles(getDistPath(dir), '**/*.*');

  const getDirPath = target => path.join(dir, target);
  for (let j = 0; j < files.length; j++) {
    const file = files[j];
    const target = getDirPath(file);

    await uploadOSS(getAliBasePath(target), getDistPath(target));

    console.info(`${target} done!`);
  }
  console.info('上传资源文件 done');
}

publish({
  mac: `https://lugia.oss-cn-beijing.aliyuncs.com/download/LugiaMega-${megaIDE}.dmg`,
  base: 'https://lugia.oss-cn-beijing.aliyuncs.com/',
  win: `https://lugia.oss-cn-beijing.aliyuncs.com/download/LugiaMega%20Setup%20${megaIDE}.exe`,
  pdf:
    'https://lugia.oss-cn-beijing.aliyuncs.com/download/lugiav1.1.0-%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C%20%E4%B8%AD%E6%96%87%EF%BC%88%E7%AE%80%EF%BC%89.pdf',
  version
});
