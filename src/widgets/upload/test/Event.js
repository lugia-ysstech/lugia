import React from 'react';
import { Upload, Theme } from '@lugia/lugia-web';
export default class Event extends React.Component<any, any> {
  constructor(){
    super();
    this.state={
      onProgressValue:'kong',
      onSuccessValue:'kong',
      onCompleteValue:'kong',
      onChangeValue:'kong',
      onFailValue:'kong'
    }
  }
  onProgress=(obj)=>{
    this.setState({onProgressValue:'onProgress'})
  };
  onSuccess=(obj)=>{
    console.log(123);
    this.setState({onSuccessValue:'onSuccess'})
  };
  onComplete=(obj)=>{
    console.log(123);
    this.setState({onCompleteValue:'onComplete'})
  };
  onChange=(obj)=>{
    console.log(123);
    this.setState({onChangeValue:'onChange'})
  };
  onFail=(obj)=>{
    console.log(123);
    this.setState({onFailValue:'onFail'})
  };
  render(){
    const defaultProps = {
      areaType: 'both',
      url: 'http://localhost:7001/upload',
      showFileList: true,
      autoUpload:false,
      onProgress:this.onProgress,
      onSuccess:this.onSuccess,
      onComplete:this.onComplete,
      onChange:this.onChange,
      onFail:this.onFail
    };
    return (
      <div>
        <Upload {...defaultProps}/>
        <p>onProgress:{this.state.onProgressValue}</p>
        <p>onSuccess:{this.state.onSuccessValue}</p>
        <p>onComplete:{this.state.onCompleteValue}</p>
        <p>onChange:{this.state.onChangeValue}</p>
        <p>onFail:{this.state.onFailValue}</p>
      </div>

    )
  }
}
