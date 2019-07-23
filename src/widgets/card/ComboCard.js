import React from "react";
import styled from "styled-components";
import { Card, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";
const CardContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
`;
const Price = styled.div`
  text-align: center;
  font-size: 16px;
  color: #666;
  margin-bottom: 26px;
  width: 100%;
`;
const PriceNum = styled.div`
  text-align: center;
  color: #4d63ff;
  display: inline-block;
`;
const Buy = styled.button`
  position: absolute;
  text-align: center;
  font-size: 14px;
  border-radius: 20px;
  margin-top: 32px;
  color: #fff;
  bottom: 10%;
  width: 80%;
  background-color: #4d63ff;
  height: 32px;
  border: 2px solid #4d63ff;
  left: 10%;
`;
class AmountCard extends React.Component<Object, Object> {
  render() {
    const price = "9.88";
    let int = 0;
    let decimals = 0;
    if (price.indexOf(".") > 0) {
      int = price.substring(0, price.indexOf("."));
      decimals = price.substring(price.indexOf("."));
    }
    return (
      <CardContainer>
        <Price>{"价格"}</Price>
        <PriceNum>
          <PriceNum style={{ fontSize: 60 }}>{int}</PriceNum>
          <PriceNum style={{ fontSize: 45 }}>{decimals}</PriceNum>
        </PriceNum>
        <Buy>{"购买"}</Buy>
      </CardContainer>
    );
  }
}

export default class ComboCard extends React.Component<Object, Object> {
  render() {
    const combo = {
      [Widget.Card]: {
        Container: {
          normal: { width: 200, height: 220 }
        }
      }
    };

    return (
      <Theme config={combo}>
        <Card
          viewClass={"vertical"}
          type={"combo"}
          content={<AmountCard />}
          shadow={"hover"}
        />
      </Theme>
    );
  }
}
