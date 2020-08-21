import React from "react";
import { createRoute } from "@lugia/lugiax-router";
import "@lugia/lugia-web/dist/css/global.css";
import { Grid } from "@lugia/lugia-web";
import Router from "../../router";
import Headers from "../../nav";
import Asides from "../../menu";
import PageLoading from "../../pageloading";

const { Row, Col } = Grid;
const { tutorialConfig, tutorialRouter } = Router;

const rout = createRoute(tutorialRouter, PageLoading);

const block = <div style={{ height: "60px" }}></div>;

export default () => {
  return (
    <React.Fragment>
      <Headers />
      <Row>
        <Col span={5} xl={{ span: 5 }} xxl={{ span: 5 }}>
          <Asides data={tutorialConfig} />
          {block}
        </Col>
        <Col span={19} xl={{ span: 19 }} xxl={{ span: 19 }}>
          {rout}
        </Col>
      </Row>
    </React.Fragment>
  );
};
