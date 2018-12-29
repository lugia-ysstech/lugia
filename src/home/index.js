/**
 *
 * create by LYQ
 *
 * @flow
 */
import * as React from 'react';
import { Alert , Theme,Grid } from '@lugia/lugia-web';
import styled from 'styled-components';
import Widget from '@lugia/lugia-web/dist/consts/index';

// const  Col = Grid.Col,Row = Grid.Row;
const { Row, Col } = Grid;

const Wrapper = styled.div`
  width:100%;
  height:92px;
  border:1px solid red;
`;

const Container = styled.div` 
  // padding:45px 50px 50px;
  height:1500px;
`;


export default class Pages extends React.Component<any, any> {
  static getDerivedStateFromProps(defProps: DefProps, stateProps: StateProps) {
    const defCurrent = defProps.current || ['EditTable'];
    if (!stateProps) {
      return {
        current:defCurrent,
      };
    }
    return {
      current: 'current' in defProps ? defCurrent : stateProps.current,
    };
  }


  render() {
    const view = {
      [Widget.Row]: {
        height: 200,
      },
    };
    return (
      <Container>
          <Theme>
            <Row>
              <Col span={5} >
                <Wrapper >col-5</Wrapper>
              </Col>
              <Col span={14} >
                <Wrapper >col-14</Wrapper>
              </Col>
              <Col span={5} >
                <Wrapper >col-5</Wrapper>
              </Col>
            </Row>
          </Theme>
          Home!!
      </Container>
    );
  }
}
