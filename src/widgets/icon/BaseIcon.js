import React from 'react';
import { Icon, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
const onClick = () => {};
export default class BaseIcon extends React.Component<any, any> {
  render() {
    const view = {
      [Widget.Icon]: {
        margin: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 0
        },
        fontSize:20
      }
    };
    return (
      <Theme config={view}>
        <Icon iconClass={'lugia-icon-financial_unlock'} onClick={onClick} />
        <Icon
          iconClass={'lugia-icon-financial_upload_cloud'}
          onClick={onClick}
        />
        <Icon iconClass={'lugia-icon-financial_pay'} onClick={onClick} />
      </Theme>
    );
  }
}
