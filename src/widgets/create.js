/**
 *
 * create by guorg
 *
 */
const fs = require('fs');
const path = require('path');

main();

async function main () {
  const allPathFile = await fs.readdirSync(__dirname).filter(folderName => folderName !== 'code-box');
  const filePath = [];
  console.info('总共待生成组件[%d]个', allPathFile.length);
  try {
    for (let index = 0; index < allPathFile.length; index++) {
      const folderName = allPathFile[ index ];
      const stats = await fs.statSync(path.join(__dirname, folderName));
      if (stats.isDirectory()) {
        let config;
        try {
          config = require(`./${folderName}/config.js`);
        } catch (err) {
          console.error('(%d) %s 读取config.js错误', index, folderName);
          continue;
        }

        const allDemo = Object.keys(config);
        let meta;
        try {
          meta = require(`@lugia/lugia-web/dist/${folderName}/lugia.${folderName}.zh-CN.json`);
        } catch (error) {
          console.error('(%d) %s 读取元信息失败', index, folderName);
          continue;
        }

        const { childrenWidget } = meta;
        const subTitle = meta.widgetName;
        let data;
        try {
          data = getContent(allDemo, config, folderName, {
            title: meta.title,
            subTitle,
            desc: meta.desc
          }, childrenWidget);
        } catch (error) {
          console.error('(%d) %s 代码生成错误', index, folderName);
          continue;
        }
        try {
          await fs.writeFileSync(path.join(__dirname, `${folderName}/index.js`), data);
        } catch (err) {
          console.log('(%d) %s 写入文件失败', index, folderName);
          return;
        }
        filePath.push(folderName);
      } else {
        console.error('(%d) %s 目录错误', index, folderName);
      }

    }
  } catch (error) {
    console.error('%s 异常', error);
  }
  console.info('总共待生成组件[%d]个， 成功生成[%d]个', allPathFile.length, filePath.length);
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

function getImportInfoAndDemo (demos, config, folderName) {
  let importInfo = '', demo = '', link = '';
  demos.forEach((item, index) => {
    const { title, desc } = config[ item ];
    const code = fs.readFileSync(path.join(__dirname, `${folderName}/${item}.js`), 'utf-8');
    const codeStr = code.replace(/\'/g, String.raw`\'`).replace(/\"/g, String.raw`\"`).replace(/\n/g, String.raw`\n`);
    importInfo = `${importInfo} const ${item} =  require('./${item}').default; `;
    demo = `${demo}<Demo title={'${title}'} titleID={'${folderName}-${index}'} code={<code>{ "${codeStr}"}</code>} desc={'${desc}'}  demo={<${item} />}></Demo>`;
    link = `${link}<Link title={'${title}'} href={'#${folderName}-${index}'} />`;
  });
  return { importInfo, demo, link };
}

function getAPITable (folderName, childrenWidget) {
  let importInfo = '', demo = '';
  if (childrenWidget) {
    childrenWidget.forEach(item => {
      importInfo = `${importInfo} import ${item} from '@lugia/lugia-web/dist/${folderName}/lugia.${item}.zh-CN.json';`;
      demo = `${demo}<EditTables dataSource={${item}} />`;
    });
  } else {
    importInfo = `import ${folderName} from '@lugia/lugia-web/dist/${folderName}/lugia.${folderName}.zh-CN.json';`;
    demo = `<EditTables dataSource={${folderName}} />`;
  }
  return { importInfo, demo };
}
