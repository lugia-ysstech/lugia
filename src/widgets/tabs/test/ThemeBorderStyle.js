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

export default class ThemeBorderStyle extends React.Component<any, any> {
  render(){
    const propsCard={
      tabType:'card'
    };
    const propsWindow={
      tabType:'window'
    };
    const configNormal={
      [Widget.Tabs]:{
        BorderStyle:{
          normal:{
            width:300,
            height:30,
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
    const configHover={
      [Widget.Tabs]:{
        BorderStyle:{
          hover:{
            color:'green',
            background:'red',
            border:{
              top:{
                width:2,
                style:'solid',
                color:'red'
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
            font:{
              size:30,
              weight:600
            },
            opacity:0.5
          },
          disabled:{
            color:'blue'
          }
        }
      }
    };
    const configDisabled={
      [Widget.Tabs]:{
        TabHeader:{
          SelectTabPan:{
            disabled:{
              color:'blue'
            }
          }
        }

      }
    };
    const configActive={
      [Widget.Tabs]:{
        TabHeader:{
          SelectTabPan:{
            active:{
              color:'yellow'
            }
          }
        }

      }
    };
    const configFocus={
      [Widget.Tabs]:{
        TabHeader:{
          SelectTabPan:{
            focus:{
              color:'pink'
            }
          }
        }

      }
    };
    return (
      <div>
        <H2>normal-card</H2>
        <Theme config={configNormal}>
          <Tabs {...propsCard}/>
        </Theme>
        <H2>normal-window</H2>
        <Theme config={configNormal}>
          <Tabs {...propsCard}/>
        </Theme>
        <H2>normal-line</H2>
        <Theme config={configNormal}>
          <Tabs/>
        </Theme>
        <H2>hover-card</H2>
        <Theme config={configHover}>
          <Tabs {...propsCard}/>
        </Theme>
        <H2>hover-window</H2>
        <Theme config={configHover}>
          <Tabs {...propsCard}/>
        </Theme>
        <H2>hover-line</H2>
        <Theme config={configHover}>
          <Tabs/>
        </Theme>
      </div>
    )
  }
}
