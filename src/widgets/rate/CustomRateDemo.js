import React from 'react';
import { Rate, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from "styled-components";
const TitleBox = styled.div`
  font-size: 14px;
  margin: 10px  0;
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
        this.setStateValue('defaultProps2', x.currentValue);
      },
      onChange: (e: Object, x: any) => {
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
        this.setStateValue('defaultProps5', x.currentValue);
      },
      onChange: (e: Object, x: any) => {
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
        this.setStateValue('defaultProps6', x.currentValue);
      },
      onChange: (e: Object, x: any) => {
        this.setStateValue('defaultProps6', x.currentValue);
      }
    };
    return (
      <div>
        <Theme config={config}>
          <TitleBox>文字评分</TitleBox>
          <Rate {...defaultProps2} character="好" />
          <TitleBox>分级评分 低分值样式</TitleBox>
          <Rate {...defaultProps4} />
          <TitleBox>分级评分 正常样式</TitleBox>
          <Rate {...defaultProps5} />
          <TitleBox>分级评分  高分值样式</TitleBox>
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
