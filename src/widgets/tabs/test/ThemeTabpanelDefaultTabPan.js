import React from 'react';
import { Theme, Tabs } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';
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

export default class ThemeTabpanelDefaultTabPan extends React.Component<any, any> {
  render(){
    const children=[
      <Tabpane title={'22'} content={'22'}/>,
      <Tabpane title={'11'} content={<div>11</div>}/>,
      <Tabpane title={'223'} content={<div>223</div>} />,
    ];
    const childrenDisabled=[
      <Tabpane title={'22'} content={'22'} disabled/>,
      <Tabpane title={'11'} content={<div>11</div>}/>,
      <Tabpane title={'223'} content={<div>223</div>} />,
    ];
    const normal={
      normal:{
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
    };
    const hover={
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
      }
    };
    const configNormal={
      [Widget.Tabs]:{
        TabHeader:{
          DefaultTabPan:{
            ...normal
          }
        }

      }
    };
    const configHover={
      [Widget.Tabs]:{
        TabHeader:{
          DefaultTabPan:{
            ...hover,
            disabled:{
              color:'blue'
            }
          }
        }

      }
    };
    const configDisabled={
      [Widget.Tabs]:{
        TabHeader:{
          DefaultTabPan:{
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
          DefaultTabPan:{
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
          DefaultTabPan:{
            focus:{
              color:'pink'
            }
          }
        }

      }
    };
    const normalAndHover={
      [Widget.Tabs]:{
        TabHeader:{
          DefaultTabPan:{
            ...normal,
            ...hover
          }}

      }
    }
    return (
      <div>
        <H2>normal</H2>
        <Theme config={configNormal}>
          <Tabs children={children}/>
        </Theme>
        <H2>hover</H2>
        <Theme config={configHover}>
          <Tabs children={children}/>
        </Theme>
        <H2>normal+hover</H2>
        <Theme config={normalAndHover}>
          <Tabs children={children}/>
        </Theme>
        <H2>disabled</H2>
        <Theme config={configDisabled}>
          <Tabs children={childrenDisabled}/>
        </Theme>
        <H2>active(测试未在配置项是否生效)</H2>
        <Theme config={configActive}>
          <Tabs children={children}/>
        </Theme>
        <H2>focus(测试未在配置项是否生效)</H2>
        <Theme config={configFocus}>
          <Tabs children={children}/>
        </Theme>
      </div>
    )
  }
}
