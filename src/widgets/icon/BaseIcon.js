import React from 'react';
import { Icon, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';
import Copy from '../code-box/Copy';

const ColorIcon = styled(Icon)`
  color: #4d63ff;
`;
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
        <Copy ref={cmp => (this.copy = cmp)}/>
        <ColorIcon
          iconClass={'lugia-icon-financial_unlock'}
          onClick={() => {
            this.copy.copy('lugia-icon-financial_unlock');
          }}
        />
        <ColorIcon
          iconClass={'lugia-icon-financial_upload_cloud'}
          onClick={() => {
            this.copy.copy('lugia-icon-financial_upload_cloud');
          }}
        />
        <ColorIcon
          iconClass={'lugia-icon-financial_pay'}
          onClick={() => {
            this.copy.copy('lugia-icon-financial_pay');
          }}
        />
      </Theme>
    );
  }
}
