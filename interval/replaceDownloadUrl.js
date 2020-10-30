const path = require('path');
const {  mac, win, pdf, linuxdeb, linuxrpm} = require('./version');
const replace = require('replace-in-file');

path.sep = '/';

function joinPath (pathStr) {
  return  pathStr.replace(/\\/g, path.sep);
};

const dist = joinPath(path.join(__dirname, '../dist'));
const getDistPath = target => joinPath(path.join(dist, target));

const replaceDownUrl = async (from, to) => {

  const indexJS = getDistPath('index.*.js');
  await replace({
    files: indexJS,
    from,
    to
  });
};


const doReplaceDownUrl = async () => {
  console.info('开始替换下载地址');
  await replaceDownUrl('#DownLoadMac', mac);
  await replaceDownUrl('#DownLoadWindows', win);
  await replaceDownUrl('#DownLoadLinuxdeb', linuxdeb);
  await replaceDownUrl('#DownLoadLinuxrpm', linuxrpm);
  console.info('替换下载地址结束');

};

doReplaceDownUrl();
