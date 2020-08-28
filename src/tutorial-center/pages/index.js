import React from "react";
import { createRoute } from "@lugia/lugiax-router";
import "@lugia/lugia-web/dist/css/global.css";
import styled from "styled-components";
import { Grid } from "@lugia/lugia-web";
import Router from "../../router";
import Headers from "../../nav";
import Asides from "../../menu";
import PageLoading from "../../pageloading";

const { Row, Col } = Grid;
const { tutorialRouter } = Router;

const OuterWrap = styled.div`
  padding: 0 20px;
`;
const Block = styled.div`
  height: 60px;
`;

const rout = createRoute(tutorialRouter, PageLoading);

export default () => {
  return (
    <OuterWrap>
      <Headers />
      <Row>
        <Col span={5} xl={{ span: 5 }} xxl={{ span: 5 }}>
          <Asides />
          <Block />
        </Col>
        <Col span={19} xl={{ span: 19 }} xxl={{ span: 19 }}>
          {rout}
        </Col>
      </Row>
    </OuterWrap>
  );
};
