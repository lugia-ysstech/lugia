import React from 'react';
import { Rate, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';
const TitleBox = styled.div`
  position: relative;
  padding: 10px;
  font-size: 18px;
  border-top: 1px solid #ccc;
`;
const TextBox = styled.span`
  font-size: 14px;
  color: #333;
`;
export default class RateDemo extends React.Component<any, any> {
  constructor(props: Object) {
    super(props);
    this.state = {};
  }
  render() {
    const config = {
      [Widget.Rate]: { fontSize: '18px' }
    };
    const defaultProps2 = {
      count: 5,
      max: 5,
      value: 3.5,
      disabled: false,
      allowHalf: true,
      classify: false,
      onClick: (e: Object, x: any) => {
        console.log('onClick defaultProps2', x);
        this.setStateValue('defaultProps2', x.currentValue);
      },
      onChange: (e: Object, x: any) => {
        console.log('onChange defaultProps2', x);
        this.setStateValue('defaultProps2', x.currentValue);
      }
    };
    const defaultProps4 = {
      count: 5,
      max: 5,
      value: 2,
      disabled: false,
      allowHalf: false,
      classify: true,
      iconClass: {
        default: 'lugia-icon-financial_meh',
        danger: 'lugia-icon-financial_sad',
        amazed: 'lugia-icon-financial_smile'
      },
      className: 'cccc',
      onClick: (e: Object, x: any) => {
        this.setStateValue('defaultProps4', x.currentValue);
      },
      onChange: (e: Object, x: any) => {
        this.setStateValue('defaultProps4', x.currentValue);
      }
    };
    const defaultProps5 = {
      count: 5,
      max: 5,
      value: 3,
      disabled: false,
      allowHalf: false,
      classify: true,
      iconClass: {
        default: 'lugia-icon-financial_meh',
        danger: 'lugia-icon-financial_sad',
        amazed: 'lugia-icon-financial_smile'
      },
      onClick: (e: Object, x: any) => {
        console.log('onClick defaultProps5', x);
        this.setStateValue('defaultProps5', x.currentValue);
      },
      onChange: (e: Object, x: any) => {
        console.log('onChange defaultProps5', x);
        this.setStateValue('defaultProps5', x.currentValue);
      }
    };
    const defaultProps6 = {
      count: 5,
      max: 5,
      value: 4,
      disabled: false,
      allowHalf: false,
      classify: true,
      iconClass: {
        default: 'lugia-icon-financial_meh',
        danger: 'lugia-icon-financial_sad',
        amazed: 'lugia-icon-financial_smile'
      },
      onClick: (e: Object, x: any) => {
        console.log('onClick defaultProps6', x);
        this.setStateValue('defaultProps6', x.currentValue);
      },
      onChange: (e: Object, x: any) => {
        console.log('onChange defaultProps6', x);
        this.setStateValue('defaultProps6', x.currentValue);
      }
    };
    return (
      <div>
        <Theme config={config}>
          <TitleBox>自定义图标：</TitleBox>
          <Rate {...defaultProps2} character="好" />
          <Rate {...defaultProps4} />
          <Rate {...defaultProps5} />
          <Rate {...defaultProps6} />
        </Theme>
      </div>

    );
  }
  setStateValue = (target: string, val: number) => {
    this.setState({
      [target]: val
    });
  };
}
