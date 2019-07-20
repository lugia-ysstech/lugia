import React from 'react';
export default class ForceRenderComponent extends React.Component{
  componentDidMount(){
    console.log('ForceRenderComponent:I am render');
  }
  render(){
    return(<div>
      <p>请移步值控制台:ForceRenderComponent</p>
    </div>)
  }
}
