import React from 'react';
import { Loading,Alert,Switch } from '@lugia/lugia-web';
import styled from 'styled-components';
export const DemoItem=styled.span`
  display:inline-block;
  padding:0 10px 10px 0;
`;
export default class BaseLoad extends React.Component {
  constructor(){
    super();
    this.state={
      loading:false
    };
  }
  changeState=obj => {
    const {newValue}=obj;
    this.setState({loading:newValue});
  }
  render() {
    return(
      <React.Fragment>
        <Loading size={'small'} delay={0.3} loading={this.state.loading}>
            <Alert
              message="Lugia 的诞生就是要树立金融行业大前端解决方案的标杆。
            我们提供的不仅仅是设计规范、开源组件库、可视化开发套件......而是将设计、开发、工程，
            有机高效的演变为一种适应多端、多层的前端设计语言。Lugia 的目标是降低开发成本，提升开发质量，
            为前端开发人员赋能，让用户体验 知性。Lugia 的诞生就是要树立金融行业大前端解决方案的标杆。
            我们提供的不仅仅是设计规范、开源组件库、可视化开发套件......而是将设计、开发、工程，
            有机高效的演变为一种适应多端、多层的前端设计语言。Lugia 的目标是降低开发成本，提升开发质量，
            为前端开发人员赋能，让用户体验 知性。Lugia 的诞生就是要树立金融行业大前端解决方案的标杆。
            我们提供的不仅仅是设计规范、开源组件库、可视化开发套件......而是将设计、开发、工程，
            有机高效的演变为一种适应多端、多层的前端设计语言。Lugia 的目标是降低开发成本，提升开发质量，
            为前端开发人员赋能，让用户体验 知性。"
            />
        </Loading>
        <Switch onChange={this.changeState}/>
    </React.Fragment>
    );
  }
}
