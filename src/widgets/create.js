/**
 *
 * create by guorg
 *
 */
const fs = require('fs');

const allPathFile = fs.readdirSync('./');
const filePath = [];
allPathFile.forEach(folderName => {
    fs.stat(folderName,(error,stats)=>{
        if(error){
            console.log(error);
            return;
        }else{
            if(stats.isDirectory()){
                if(folderName === 'affix'){
                    const config = require(`./${folderName}/config.js`);
                    const allDemo = Object.keys(config);
                    console.log(getContent(allDemo,config,folderName));
                    // console.log(fs.readFileSync('./affix/index.js', 'utf-8'));

                }
                // fs.appendFileSync 同步地将数据追加到文件，如果文件不存在则创建文件。
                // try {
                //     fs.appendFileSync(`${item}/index.js`, '追加的数据');
                //     console.log('数据已追加到文件');
                // } catch (err) {
                //     console.log(err);
                // }
                filePath.push(folderName);
            }
        }

    })
});

function getContent(demos,config,folderName){
    const indexCode =
        `import  React from 'react';
         import  from 
        import Demo from '../code-box;'
        ${getImportInfoAndDemo(demos,config,folderName).importInfo} 
        export default class Demo extends React.Component {
            render(){
                return(
                    <div>
                        ${getImportInfoAndDemo(demos,config,folderName).demo}
                    </div>
                )
            }
         }   
        `;
    return indexCode;
}
function getImportInfoAndDemo(demos,config,folderName){
    let importInfo ='',demo='';
    demos.forEach(item => {
        const {title,desc} = config[item];
        const code = fs.readFileSync(`./${folderName}/${item}.js`, 'utf-8');
        importInfo = `${importInfo} import ${item} from './${item}';`;
        demo = `${demo}<Demo title={${title}} desc={${desc}} code={${code}} demo={<${item} />} />`;
    });
    return {importInfo,demo};
}
