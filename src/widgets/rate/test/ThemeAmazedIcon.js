
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
const BoxP=styled.p`
  margin-bottom:10px;
  color:#000;
`;
export default class ThemeAmazedIcon extends React.Component<any, any> {
  render() {
    const configNormalColor={[Widget.Rate]:{
        AmazedIcon:{
          normal:{
            color:'blue',
          },
        }
      }};
    const configNormalFont={[Widget.Rate]:{
        AmazedIcon:{
          normal:{
            fontSize:30,
          },
        }
      }};
    const configNormalMargin={[Widget.Rate]:{
        AmazedIcon:{
          normal:{
            margin:{
              top:20,
              right:20,
              bottom:20,
              left:20,
            }
          },
        }
      }};
    return (
      <div>
        <Box>
          <Theme config={configNormalColor}>
            <Text>normal-color</Text><Rate classify/>
          </Theme>
        </Box>
        <Box>
          <Theme config={configNormalFont}>
            <Text>normal-font</Text><Rate classify/>
          </Theme>
        </Box>
        <Box>
          <Theme config={configNormalMargin}>
            <Text>normal-margin</Text><Rate classify/>
          </Theme>
        </Box>
      </div>
    );
  }
}
