/**
 *
 * create by guorg
 *
 */
const fs = require('fs');

const allPathFile = fs.readdirSync('./');
const filePath = [];
allPathFile.forEach(folderName => {
  fs.stat(folderName, (error, stats) => {
    if (error) {
      console.log(error);
      return;
    } 
      if (stats.isDirectory()) {
        if (folderName !== 'code-box') {
          const config = require(`./${folderName}/config.js`);
          const allDemo = Object.keys(config);
          // console.log(fs.readFileSync('./affix/index.js', 'utf-8'));
          const meta = require(`@lugia/lugia-web/dist/${folderName}/lugia.${folderName}.zh-CN.json`);
          let childrenWidget;
          if (meta.childrenWidget) {
            childrenWidget = meta.childrenWidget;
          }
          console.log(meta);
          const data = getContent(allDemo, config, folderName, {
            title: meta.title,
            subTitle: meta.widgetName,
            desc: meta.desc
          }, childrenWidget);
          console.log(getContent(allDemo, config, folderName, {
            title: meta.title,
            subTitle: meta.widgetName,
            desc: meta.desc
          }, childrenWidget));
          try {
            fs.writeFile(`${folderName}/index.js`, data);
            console.log('数据已追加到文件');
          } catch (err) {
            console.log(err);
          }
          filePath.push(folderName);
        }
      }
    

  });
});

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
    const code = fs.readFileSync(`./${folderName}/${item}.js`, 'utf-8');
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
