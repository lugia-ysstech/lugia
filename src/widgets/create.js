/**
 *
 * create by guorg
 *
 */
const fs = require('fs');
const path = require('path');
createRouter();

// main();

function getPath (folderName) {
  return path.join(__dirname, folderName);
}

async function createRouter () {
  const allPathFile = await getFolderNames();
  const widgetName2Meta = {};
  const catory2WidgetNames = {};
  try {
    await iteratorFolders(allPathFile, (folderName, pos) => {

      try {
        const meta = loadMeta(folderName);
        const { widgetName, category } = meta;
        widgetName2Meta[ widgetName ] = meta;
        let categoryData = catory2WidgetNames[ category ];
        if (!categoryData) {
          catory2WidgetNames[ category ] = categoryData = [];
        }
        meta.floderName = folderName;
        categoryData.push(meta);
      } catch (error) {
        return;
      }
    });
    const router = Object.keys(catory2WidgetNames).map(key => {
      const widgets = catory2WidgetNames[ key ];
      const children = widgets && widgets.map(meta => {
        const { widgetName, title, floderName } = meta;
        return {
          widgetName,
          floderName,
          value: `/component/${widgetName.toLowerCase()}`,
          text: title,
        };
      });
      return {
        text: key,
        category: key,
        describe: true,
        children,
      };
    });

    await fs.writeFileSync(getRouterFile('widgets.js'), `export default ${JSON.stringify(router)}`);
    await fs.writeFileSync(getRouterFile('widgetrouter.js'), `export default ${(getMenuRouter(router))}`);

  } catch (error) {
    console.log('%s 异常  X', error);
  }
}

function getRouterFile (file) {
  return path.join(path.dirname(__dirname), 'router', file);
}

function getMenuRouter (data) {
  // const arr  =[];

  const res = [];
  res.push('{');

  data.forEach(item => {
    const { children } = item;
    children && children.forEach(childs => {
      const { value, text, widgetName, floderName } = childs;
      res.push(`
      '${value}':
        {
          value: '${value}',
          text: '${text}',
          exact: true,
          render: async () => {
            return import('../widgets/${floderName}');
          },
        },`);

    });
  });
  res.push(' }');
  return res.join('');
}

async function getFolderNames () {
  return fs.readdirSync(__dirname).filter(folderName => folderName !== 'code-box' && folderName.indexOf('.') === -1);
}

function loadMeta (folderName) {
  return require(`@lugia/lugia-web/dist/${folderName}/lugia.${folderName}.zh-CN.json`);
}


async function iteratorFolders (allPathFile, cb) {

  for (let index = 0; index < allPathFile.length; index++) {
    const folderName = allPathFile[ index ];
    const stats = await fs.statSync(getPath(folderName));
    const pos = index + 1;
    if (stats.isDirectory()) {
      await cb(folderName, pos);
    } else {
      console.log('(%d) %s 目录错误  X', pos, folderName);

    }
  }
}

async function main () {
  const allPathFile = await getFolderNames();
  const filePath = [];
  console.log('总共待生成组件[%d]个', allPathFile.length);
  try {
    await iteratorFolders(allPathFile, async (folderName, pos) => {

      let config;
      try {
        config = require(`./${folderName}/config.js`);
      } catch (err) {
        console.log('(%d) %s 读取config.js错误  X', pos, folderName);
        return;
      }

      let meta;
      try {
        meta = loadMeta(folderName);
      } catch (error) {
        console.log('(%d) %s 读取元信息失败  X', pos, folderName);
        return;
      }

      const { childrenWidget } = meta;
      const subTitle = meta.widgetName;
      let data;
      try {
        const allDemo = Object.keys(config);
        data = getContent(allDemo, config, folderName, {
          title: meta.title,
          subTitle,
          desc: meta.desc
        }, childrenWidget);
      } catch (error) {
        console.log('(%d) %s 代码生成错误 X', pos, folderName);
        return;
      }
      try {
        await fs.writeFileSync(getPath(`${folderName}/index.js`), data);
      } catch (err) {
        console.log('(%d) %s 写入文件失败  X', pos, folderName);
        return;
      }
      // console.log('(%d) %s 成功', pos, folderName);
      filePath.push(folderName);
    });

  } catch (error) {
    console.log('%s 异常  X', error);
  }
  console.log('总共待生成组件[%d]个， 成功生成[%d]个', allPathFile.length, filePath.length);
}


function getContent (demos, config, folderName, pageInfo, childrenWidget) {
  const { importInfo: ApiImport, demo: ApiTable } = getAPITable(folderName, childrenWidget);
  const { title: pageTitle, subTitle, desc: pageDesc } = pageInfo;
  const indexCode =
    `import  React from 'react';
        import {Anchor,Grid} from '@lugia/lugia-web';
        import EditTables from '../../edit-table'; 
        ${ApiImport}
        import Demo from '../code-box';
        import Title from '../code-box/Title';
        ${getImportInfoAndDemo(demos, config, folderName).importInfo} 
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
        export default class ComDemo extends React.Component {
            render(){
                return(
                    <Row>
                        <Col span={20}>
                            <Title title={'${pageTitle}'} subTitle={'${subTitle}'} desc={'${pageDesc}'} />
                            ${getImportInfoAndDemo(demos, config, folderName).demo}
                            ${ApiTable}
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                ${getImportInfoAndDemo(demos, config, folderName).link}
                            </Anchor>
                        </Col>
                    </Row>
                )
            }
         }   
        `;
  return indexCode;
}

function toText (str) {
  if (!str) {
    return str;
  }
  return str.replace(/\$/g, String.raw`\$`).replace(/\`/g, String.raw`\``).replace(/\'/g, String.raw`\'`).replace(/\"/g, String.raw`\"`).replace(/\n/g, String.raw`\n`);
}

function getImportInfoAndDemo (demos, config, folderName) {
  let importInfo = '', demo = '', link = '';
  demos.forEach((item, index) => {
    const { title, desc } = config[ item ];
    const code = fs.readFileSync(getPath(`${folderName}/${item}.js`), 'utf-8');
    importInfo = `${importInfo} const ${item} =  require('./${item}').default; `;
    const titleTxt = toText(title);
    const descTxt = toText(desc);
    demo = `${demo}<Demo title={'${titleTxt}'} titleID={'${folderName}-${index}'} code={<code>{ \`${toText(code)}\`}</code>} desc={'${descTxt}'}  demo={<${item} />}></Demo>`;
    link = `${link}<Link title={'${titleTxt}'} href={'#${folderName}-${index}'} />`;
  });
  return { importInfo, demo, link };
}

function fixFolderName (folderName) {
  if (!folderName) {
    return folderName;
  }
  return folderName.replace(/-/g, '').toUpperCase();
}

function getAPITable (folderName, childrenWidget) {
  let importInfo = '', demo = '';
  if (childrenWidget) {
    childrenWidget.forEach(item => {
      const fixeMoudleName = fixFolderName(item);
      importInfo = `${importInfo} import ${fixeMoudleName} from '@lugia/lugia-web/dist/${folderName}/lugia.${item}.zh-CN.json';`;
      demo = `${demo}<EditTables dataSource={${fixeMoudleName}} />`;
    });
  } else {
    const fixeMoudleName = fixFolderName(folderName);
    importInfo = `import ${fixeMoudleName} from '@lugia/lugia-web/dist/${folderName}/lugia.${folderName}.zh-CN.json';`;
    demo = `<EditTables dataSource={${fixeMoudleName}} />`;
  }
  return { importInfo, demo };
}
