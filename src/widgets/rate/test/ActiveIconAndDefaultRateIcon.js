
import React from 'react';
import { Rate,Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';
import styled from 'styled-components';
const Text=styled.span`
  display:inline-block;
  padding:0 10px;
`;
const Box=styled.div`
  margin-bottom:10px;
`;
export default class ActiveIconAndDefaultRateIcon extends React.Component<any, any> {
  render() {
    const configNormal={[Widget.Rate]:{
        ActiveIcon:{
          normal:{
            color:'red',
            fontSize:30,
            margin:{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }
          },
        },
        DefaultRateIcon:{
          normal:{
            color:'green',
            fontSize:20,
            margin:{
              top: 10,
              right: 10,
              bottom: 10,
              left: 10,
            }
          },
        }
      }};
    const configDisabled={[Widget.Rate]:{
        ActiveIcon:{
          disabled:{
            color:'red',
          }
        },
        DefaultRateIcon:{
          disabled:{
            color:'green',
          }
        }
      }};
    return (
      <div>
        <Box>
      <Theme config={configNormal}>
        <Text>normal</Text><Rate/>
      </Theme>
        </Box>
        <Box>
        <Theme config={configDisabled}>
          <Text>disabled</Text><Rate disabled value={3}/>
        </Theme>
        </Box>
      </div>

    );
  }
}
