import React from 'react';
import { Tooltip, Theme,Button } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';
const Content = styled.div`
  margin: 100px;
`;
const ButtonDemo = styled(Button)`
  width: 70px;
`;
export default class BaseTooltip extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: '' };
  }

  onChange = ({ newValue: value }: any) => {
    this.setState({ value });
  };

  render() {
    const text = <span>prompt text</span>;
    const config = {
      [Widget.Tooltip]: {
        color: '#fef0ef',
        fontColor: '#000'
      }
    };
    return (
      <Theme config={config}>
        <Content className="demo">
          <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
            <Tooltip placement="topLeft" title={text}>
              <ButtonDemo type="primary">TL</ButtonDemo>
            </Tooltip>
            <Tooltip placement="top" title={text}>
              <ButtonDemo type="primary">Top</ButtonDemo>
            </Tooltip>
            <Tooltip placement="topRight" title={text}>
              <ButtonDemo type="primary">TR</ButtonDemo>
            </Tooltip>
          </div>
          <div style={{ width: 70, float: 'left' }}>
            <Tooltip placement="leftTop" title={text}>
              <ButtonDemo type="primary">LT</ButtonDemo>
            </Tooltip>
            <Tooltip placement="left" title={text}>
              <ButtonDemo type="primary">Left</ButtonDemo>
            </Tooltip>
            <Tooltip placement="leftBottom" title={text}>
              <ButtonDemo type="primary">LB</ButtonDemo>
            </Tooltip>
          </div>
          <div style={{ width: 70, marginLeft: 70 * 4 + 24 }}>
            <Tooltip placement="rightTop" title={text}>
              <ButtonDemo type="primary">RT</ButtonDemo>
            </Tooltip>
            <Tooltip placement="right" title={text}>
              <ButtonDemo type="primary">Right</ButtonDemo>
            </Tooltip>
            <Tooltip placement="rightBottom" title={text}>
              <ButtonDemo type="primary">RB</ButtonDemo>
            </Tooltip>
          </div>
          <div
            style={{
              marginLeft: 70,
              clear: 'both',
              whiteSpace: 'nowrap'
            }}
          >
            <Tooltip placement="bottomLeft" title={text}>
              <ButtonDemo type="primary">BL</ButtonDemo>
            </Tooltip>
            <Tooltip placement="bottom" title={text}>
              <ButtonDemo type="primary">Bottom</ButtonDemo>
            </Tooltip>
            <Tooltip placement="bottomRight" title={text}>
              <ButtonDemo type="primary">BR</ButtonDemo>
            </Tooltip>
          </div>
        </Content>
      </Theme>
    );
  }
}
