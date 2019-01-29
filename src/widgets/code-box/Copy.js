import React from 'react';
import ClipboardJS from 'clipboard';
import { notification } from '@lugia/lugia-web';

export default class BaseIcon extends React.Component<any, any> {


  constructor (){
    super();
    this.state = {
      text: '',
    };
  }
  render() {
    return <button ref={cmp => (this.btn = cmp)} id="btn" data-clipboard-text={this.state.text} style={{display: 'none'}}>
    </button>;
  }

  copy(text){
    this.setState({text}, () => {
      this.btn.click();
      notification.open({
        icon: 'lugia-icon-reminder_check_circle',
        title: `已复制 ${text}`
      });
    });
  }

  componentDidMount(): void {
    this.clipboard = new ClipboardJS('#btn');
  }

  componentWillUnmount (): void {
    this.clipboard.destroy();
  }
}
