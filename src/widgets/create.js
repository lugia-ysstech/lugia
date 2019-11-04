/**
 *
 * create by guorg
 *
 */
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const documents = require('../design/page/getDocument')({});

createDemoRouter();
createDemoPage();
createSearchIndex();

function getPath (folderName) {
  return path.join(__dirname, folderName);
}

async function createSearchIndex () {
  const res = [];
  const widget = '组件';
  const rule = '原则';
  const study = '教程';
  const allPathFile = await getFolderNames();
  const folderNames = await getDemoFolderNames(allPathFile);
  const router = await getRouter(folderNames);
  router.forEach(categoryData => {
    const { children } = categoryData;
    if (children) {
      children.forEach(item => {
        const { value: url, text, widgetName } = item;
        if (url) {
          text && res.push({
            url,
            type: widget,
            owner: widgetName,
            content: text,
            power: 2,
          });
          widgetName && res.push({
            url,
            type: widget,
            owner: widgetName,
            content: widgetName,
            power: 1,
          });
        }
      });
    }
  });

  const folderName2Meta = await getFolderName2Meta(folderNames);
  Object.values(folderName2Meta);
  const folderName2DemoConfig = await getFolderName2DemoConfig(folderNames);
  Object.values(folderName2DemoConfig);
  folderNames.forEach(folderName => {
    const meta = folderName2Meta[ folderName ];
    const config = folderName2DemoConfig[ folderName ];
    if (!meta) {
      return;
    }
    const { widgetName } = meta;
    const url = getUrl(widgetName);
    Object.keys(config).forEach((demoName, i) => {
      const configValue = config[ demoName ];

      const { title, desc } = configValue;
      const link = `${url}#${folderName}-${i}`;
      title && res.push({
        owner: widgetName,
        url: link,
        type: widget,
        content: title,
        power: 3,
      });
      desc && res.push({
        owner: widgetName,
        url: link,
        type: widget,
        content: desc,
        power: 4,
      });
    });
  });
  const ruleKeys = Object.keys(documents);
  ruleKeys && ruleKeys.forEach(ruleKey => {
    const document = documents[ ruleKey ];
    const { title, content, type, baseUrl } = document;
    const isDocument = type === 'document';
    const url = `${baseUrl?baseUrl: '/design'}/${ruleKey}`;
    title && res.push({
      url,
      owner: title,
      content: title,
      power: 1,
      type: isDocument ? study : rule
    });

    content && content.forEach(item => {
      const { text } = item;
      res.push({
        owner: title,
        url,
        content: text,
        power: 2,
        type: rule
      });
    });

    const { children } = document;
    children && children.forEach((childItem, index) => {
      const { title } = childItem;
      if (title) {
        res.push({
          owner: title,
          url: `${url}#link-${index}`,
          content: title,
          power: 3,
          type: rule
        });
      }
    });
  });
  await fs.writeFileSync(getRouterFile('search.js'), `module.exports = ${JSON.stringify(res)}`);
}

async function getRouter (folderNames, cb = item => item.title) {
  const widgetName2Meta = {};
  const catory2WidgetNames = {};
  try {
    const folderName2Meta = await getFolderName2Meta(folderNames);
    folderNames.forEach(folderName => {
      try {
        const meta = folderName2Meta[ folderName ];
        if (!meta) {
          return;
        }
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
    let index = 35;
    const router = Object.keys(catory2WidgetNames).map(key => {
      const widgets = catory2WidgetNames[ key ];
      const children = widgets && widgets.map(meta => {
        const { widgetName, floderName } = meta;
        return {
          widgetName,
          sort: index++,
          floderName,
          value: getUrl(widgetName),
          text: cb(meta),
        };
      });
      return {
        text: key,
        category: key,
        describe: true,
        children,
      };
    });
    return router;
  } catch (error) {
    console.log('%s 异常  X', error);
  }
}

function getUrl (widgetName) {
  return `/component/${widgetName.toLowerCase()}`;
}

async function createDemoRouter () {
  try {
    const allPathFile = await getFolderNames();
    const folderNames = await getDemoFolderNames(allPathFile);
    const router = await getRouter(folderNames, item => `${item.widgetName} ${item.title}`);
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
      const { value, text, floderName, sort } = childs;
      res.push(`
      '${value}':
        {
          value: '${value}',
          sort: ${sort},
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


async function getDemoFolderNames (allPathFile, cb) {
  const res = [];
  for (let index = 0; index < allPathFile.length; index++) {
    const folderName = allPathFile[ index ];
    const stats = await fs.statSync(getPath(folderName));
    const pos = index + 1;
    if (stats.isDirectory()) {
      res.push(folderName);
    } else {
      console.log('(%d) %s 目录错误  X', pos, folderName);
    }
  }
  return res;
}

async function createDemoPage () {
  const allPathFile = await getFolderNames();
  const filePath = [];
  console.log('总共待生成组件[%d]个', allPathFile.length);
  try {
    const folderNames = await getDemoFolderNames(allPathFile);
    const folderName2Meta = await getFolderName2Meta(folderNames);
    const folderName2DemoConfig = await getFolderName2DemoConfig(folderNames);

    folderNames.forEach(async (folderName, pos) => {
      const meta = folderName2Meta[ folderName ];
      const config = folderName2DemoConfig[ folderName ];
      if (!meta || !config) {
        return;
      }
      const { childrenWidget } = meta;
      const subTitle = meta.widgetName;
      let demoPageContent;
      try {
        const allDemoNames = Object.keys(config);
        demoPageContent = getContent(allDemoNames, config, folderName, {
          title: meta.title,
          subTitle,
          desc: meta.desc
        }, childrenWidget);
      } catch (error) {
        console.log('(%d) %s 代码生成错误 X', pos, folderName);
        return;
      }
      try {
        await fs.writeFileSync(getPath(`${folderName}/index.js`), prettier.format(demoPageContent), {
          useTabs: false,
          printWidth: 80,
          tabWidth: 2,
          singleQuote: false,
          trailingComma: 'none',
          bracketSpacing: true,
          jsxBracketSameLine: false,
          parser: 'babel',
          semi: true
        });
      } catch (err) {
        console.log('(%d) %s 写入文件失败  X', pos, folderName);
        return;
      }
      // console.log('(%d) %s 成功', pos, folderName);
      filePath.push(folderName);
      if (pos === folderNames.length - 1) {
        console.log('总共待生成组件[%d]个， 成功生成[%d]个', allPathFile.length, filePath.length);
      }
    });

  } catch (error) {
    console.log('%s 异常  X', error);
  }
}

async function getFolderName2Meta (folderNames) {
  const metas = {};
  folderNames.forEach((folderName, pos) => {
    try {
      metas[ folderName ] = loadMeta(folderName);
    } catch (error) {
      console.log('(%d) %s 读取元信息失败  X', pos, folderName);
      return;
    }
  });
  return metas;
}

async function getFolderName2DemoConfig (folderNames) {
  const configs = {};
  try {
    folderNames.forEach((folderName, pos) => {
      try {
        configs[ folderName ] = require(`./${folderName}/config.js`);
      } catch (err) {
        console.log('(%d) %s 读取config.js错误  X', pos, folderName);
        return;
      }
    });
  } catch (error) {
    console.log('%s 异常  X', error);
  }
  return configs;
}


function getContent (demos, config, folderName, pageInfo, childrenWidget) {
  const { importInfo: ApiImport, demo: ApiTable } = getAPITable(folderName, childrenWidget);
  const { title: pageTitle, subTitle, desc: pageDesc } = pageInfo;
  const importInfoAndDemo = getImportInfoAndDemo(demos, config, folderName);
  const indexCode =
    `import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     ${ApiImport}
        import Demo from '../code-box';
        import Title from '../code-box/Title';
        ${importInfoAndDemo.importInfo} 
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
      export default PageNavHoC(widgetrouter, class ComDemo extends React.Component {
            handleLinkClick = (e, href) => {
              if (href) {
                const name = href.slice(1);
                const anchorElement = document.getElementById(name);
                if (anchorElement) {
                  anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
                }
              }
            };
            
            render(){
                const {next, prev, isMobile = false} = this.props;
                const span = isMobile ? 24 : 20;
                const style = isMobile ? {} : {paddingRight: '50px'};
                return(
                    <Row>
                        <Col span={span}>
                          <div style={style}>
                              <Title title={'${pageTitle}'} subTitle={'${subTitle}'} desc={'${pageDesc}'} />
                              ${importInfoAndDemo.demo}
                              ${ApiTable}
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        {!isMobile && <Col span={4}>
                            <Anchor  slideType="line" onClick={this.handleLinkClick} useHref={false}>
                                ${importInfoAndDemo.link}
                            </Anchor>
                        </Col>}
                    </Row>
                )
            }
         });   
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
  const fixeMoudleName = fixFolderName(folderName);
  importInfo = `import ${fixeMoudleName} from '@lugia/lugia-web/dist/${folderName}/lugia.${folderName}.zh-CN.json';`;
  demo = `<EditTables dataSource={${fixeMoudleName}} />`;
  if (childrenWidget) {
    childrenWidget.forEach(item => {
      const fixeMoudleName = fixFolderName(item);
      importInfo = `${importInfo} import ${fixeMoudleName} from '@lugia/lugia-web/dist/${folderName}/lugia.${item}.zh-CN.json';`;
      demo = `${demo}<EditTables dataSource={${fixeMoudleName}} />`;
    });
  }
  return { importInfo, demo };
}
