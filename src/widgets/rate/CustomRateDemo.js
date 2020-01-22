import React from 'react';
import { Rate } from '@lugia/lugia-web';
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

    const characterProps = {
      count: 5,
      max: 5,
      value: 3.5,
      disabled: false,
      allowHalf: true,
      classify: false,
      onClick: res => {
        this.setStateValue("characterProps", "value", res.newValue);
      },
      onChange: res => {
        this.setStateValue("characterProps", "value", res.newValue);
      }
    };
    const lowProps = {
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
      onClick: res => {
        this.setStateValue("lowProps", "value", res.newValue);
      },
      onChange: res => {
        this.setStateValue("lowProps", "value", res.newValue);
      }
    };
    const defaultProps = {
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
      onClick: res => {
        this.setStateValue("defaultProps", "value", res.newValue);
      },
      onChange: res => {
        this.setStateValue("defaultProps", "value", res.newValue);
      }
    };
    const highProps = {
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
      onClick: res => {
        this.setStateValue("highProps", "value", res.newValue);
      },
      onChange: res => {
        this.setStateValue("highProps", "value", res.newValue);
      }
    };
    return (
      <div>

          <TitleBox>文字评分</TitleBox>
          <Rate {...characterProps} character="好" />
          <TitleBox>分级评分 低分值样式</TitleBox>
          <Rate {...lowProps} />
          <TitleBox>分级评分 正常样式</TitleBox>
          <Rate {...defaultProps} />
          <TitleBox>分级评分  高分值样式</TitleBox>
          <Rate {...highProps} />

      </div>

    );
  }
  setStateValue = (target: string, val: number) => {
    this.setState({
      [target]: val
    });
  };
}
