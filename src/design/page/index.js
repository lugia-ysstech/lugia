/**
 *
 * create by LYQ
 *
 * @flow
 */
import * as React from 'react';
import { Alert ,  Theme } from '@lugia/lugia-web';
// import { Widget} from '@lugia/lugia-web/dist/consts/index';
import Widget from '@lugia/lugia-web/dist/consts/index';
import styled from 'styled-components';
import Temlpate from '../template/template';
const Container = styled.div` 
  padding:45px 50px 50px;
  width:980px;
`;

const data ={
  introduce:{
    title:'简介',
    content:['知性一词，原本是德国古典哲学常用的术语。康德认为知性是介于感性和理性之间的一种认知能力。对于设计来说，知性可以同时定义为“形式上的优美和极致”和“科学上的精确和简洁”，我们相信知性的设计，实现了二者的完美契合。'],
    children:[
      {
        title:'科学上的精确和简洁',
        content:['用户可能会因为悦目而又兴趣尝试使用，但是使用的体验如果不好，他一样会离开。 lugia解决了产品的可用性、易用性问题，让用户在使用这些产品的过程中感觉更加方便容易，有效完成任务，达成预期目标。因此Lugia致力于消除阻碍用户使用的障碍，如歧义的文字，迷惑性的按钮，出错的页面，违背用户习惯的操作。','Lugia对用户群体有清晰的了解和划分，能做到业务使用的共同感。我们把一个复杂信息架构产品，分角色，划场景，可以让用户对产品目的了解更深刻，全局把握更强，精简页面层级，提升用户的使用效率和舒适度。'],
        img:[{url:'../public/design-core-img2.png'}],
        imgPosition:'top',
      },
      {
        title:'形式上的优美和极致',
        content:['优秀设计的经典要素之一是形式的简约，以简驭繁。','Lugia对于界面设计，就是用最少的屏幕与器件来完成任务。与此同时我们把简约适用于行为，在视觉设计中给予用户最简单的工具，即运用最少的视觉区别明确传达想要表达的意思。','优秀的设计让人感觉是一个整体，各部分平衡和谐。Lugia设计形式上遵循自然，利用人类对自然的感知，提炼自然界中的客观规律并运用到界面设计中，从而创造出有层次、有艺术感的设计语言。'],
        img:[{url:'../public/design-core-img1.png',desc:'图片1描述'}],
        imgPosition:'top',
      }

    ]
  },
  proximity:{
    title:'知性',
    content:['知性一词，原本是德国古典哲学常用的术语。康德认为知性是介于感性和理性之间的一种认知能力。对于设计来说，知性可以同时定义为“形式上的优美和极致”和“科学上的精确和简洁”，我们相信知性的设计，实现了二者的完美契合。'],
    children:[
      {
        title:'形式上的优美和极致',
        content:['优秀设计的经典要素之一是形式的简约，以简驭繁。','Lugia对于界面设计，就是用最少的屏幕与器件来完成任务。与此同时我们把简约适用于行为，在视觉设计中给予用户最简单的工具，即运用最少的视觉区别明确传达想要表达的意思。','优秀的设计让人感觉是一个整体，各部分平衡和谐。Lugia设计形式上遵循自然，利用人类对自然的感知，提炼自然界中的客观规律并运用到界面设计中，从而创造出有层次、有艺术感的设计语言。'],
        img:[{url:'../public/design-core-img1.png',desc:'图片1描述'}],
        imgPosition:'top',
      },
      {
        title:'科学上的精确和简洁',
        content:['用户可能会因为悦目而又兴趣尝试使用，但是使用的体验如果不好，他一样会离开。 lugia解决了产品的可用性、易用性问题，让用户在使用这些产品的过程中感觉更加方便容易，有效完成任务，达成预期目标。因此Lugia致力于消除阻碍用户使用的障碍，如歧义的文字，迷惑性的按钮，出错的页面，违背用户习惯的操作。','Lugia对用户群体有清晰的了解和划分，能做到业务使用的共同感。我们把一个复杂信息架构产品，分角色，划场景，可以让用户对产品目的了解更深刻，全局把握更强，精简页面层级，提升用户的使用效率和舒适度。'],
        img:[{url:'../public/design-core-img2.png'}],
        imgPosition:'top',
      }
    ]
  }
} ;

export default class Pages extends React.Component<any, any> {

  static getDerivedStateFromProps(defProps: DefProps, stateProps: StateProps) {
    const path = window.location.pathname;
    const pathType = path.match(/[^/]+/g)[1];
    const defCurrent = defProps.current || pathType;
    if (!stateProps) {
      return {
        current:defCurrent,
        pathType:pathType
      };
    }
    return {
      current: 'current' in defProps ? defCurrent : stateProps.current,
      pathType: 'pathType' in stateProps ? stateProps.pathType : pathType,
    };
  }


  render() {
    const {pathType} = this.state;
    const dataSource = data[pathType] ||data.introduce;
    return (
      <Container>
        <Temlpate dataSource={dataSource}>
        </Temlpate>
      </Container>
    );
  }
}
