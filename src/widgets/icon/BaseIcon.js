import React from 'react';
import { Icon, notification, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';

const ColorIcon = styled(Icon)`
  color: #4d63ff;
`;
document.addEventListener('copy', e => {
  const cd = e.clipboardData;
  cd.setData('text/plain', window.__iconClass__);
  delete window.__iconClass__;
  e.preventDefault();
  return false;
});

const onHandleClick = iconClass => {
  window.__iconClass__ = iconClass;
  document.execCommand('copy');
  notification.open({
    icon: 'lugia-icon-reminder_check_circle',
    title: `已复制 ${iconClass}`
  });
};
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
        fontSize: 36
      }
    };

    return (
      <Theme config={view}>
        <ColorIcon
          iconClass={'lugia-icon-financial_unlock'}
          onClick={() => {
            onHandleClick('lugia-icon-financial_unlock');
          }}
        />
        <ColorIcon
          iconClass={'lugia-icon-financial_upload_cloud'}
          onClick={() => {
            onHandleClick('lugia-icon-financial_upload_cloud');
          }}
        />
        <ColorIcon
          iconClass={'lugia-icon-financial_pay'}
          onClick={() => {
            onHandleClick('lugia-icon-financial_pay');
          }}
        />
      </Theme>
    );
  }
}
