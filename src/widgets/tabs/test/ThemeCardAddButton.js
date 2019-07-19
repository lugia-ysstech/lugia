import React from 'react';
import { Theme, Tabs } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';
import { getBorderRadius, getBorder ,getBoxShadow} from '@lugia/theme-utils';
const {Tabpane}=Tabs;
const Contain =styled.div`
  float:left;
  width:50%;
`;
const H1 = styled.h1`
  line-height:50px;
  font-size:16px;
`;
const H2 = styled.p`
  line-height:50px;
  font-size:14px;
`;
/*
* "normal": [["width"], ["height"], ["opacity"], ["background"], ["border"], ["boxShadow"], ["color"], ["fontSize"]],
  "hover": [["width"], ["height"], ["opacity"], ["background"], ["border"], ["boxShadow"], ["color"], ["fontSize"]],
  "clicked": [],
  "disabled": []
* */
export default class ThemeCardAddButton extends React.Component<any, any> {
  render(){
    const props={
      tabType:'card'
    };
    const configNormal={
      [Widget.Tabs]:{
        AddButton:{
            normal:{
              width:500,
              height:300,
              color:'red',
              background:'green',
              border:{
                top:{
                  width:1,
                  style:'solid',
                  color:'green'
                },
                right:{
                  width:1,
                  style:'solid',
                  color:'green'
                },
                bottom:{
                  width:1,
                  style:'solid',
                  color:'green'
                },
                left:{
                  width:1,
                  style:'solid',
                  color:'green'
                }
              },
              boxShadow: getBoxShadow('0 -3px 6px 0 #ad1d45'),
              margin:{
                top:10,
                right:10,
                bottom:10,
                left:10,
              },
              padding:{
                top:10,
                right:10,
                bottom:10,
                left:10,
              },
              font:{
                size:30,
                weight:600
              },
              opacity:0.5
            }
          }
        }
    };
    return (
      <div>
        <H2>normal</H2>
        <Theme config={configNormal}>
          <Tabs {...props}/>
        </Theme>
      </div>
    )
  }
}
