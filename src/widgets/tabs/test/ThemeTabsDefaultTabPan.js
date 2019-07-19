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
/*
* "normal": [["color"], ["background"], ["border"], ["margin"], ["padding"], ["font"], ["opacity"]],
      "hover": [["color"], ["background"], ["border"], ["font"], ["opacity"]],
      "clicked": [],
      "disabled": []
* */
export default class ThemeTabsDefaultTabPan extends React.Component<any, any> {
  render(){
    const data=[
      {title:'123123',content:"1231213"},
      {title:'222',content:"222",disabled:true},
      {title:'333',content:"333"},
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
      },
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
              color:'green'
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
            hover:{
              color:'pink'
            }
        }}
      }
    };
    return (
      <div>
        <H2>normal</H2>
        <Theme config={configNormal}>
          <Tabs/>
        </Theme>
        <H2>hover</H2>
        <Theme config={configHover}>
          <Tabs/>
        </Theme>
        <H2>normal+hover</H2>
        <Theme config={normalAndHover}>
          <Tabs/>
        </Theme>
        <H2>disabled</H2>
        <Theme config={configDisabled}>
          <Tabs data={data}/>
        </Theme>
        <H2>active(测试未在配置项是否生效)</H2>
        <Theme config={configActive}>
          <Tabs/>
        </Theme>
        <H2>focus(测试未在配置项是否生效)</H2>
        <Theme config={configFocus}>
          <Tabs/>
        </Theme>
      </div>
    )
  }
}
