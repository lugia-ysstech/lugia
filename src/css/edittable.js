/**
 *
 * create by LYQ
 *
 * 2018-12-24
 *
 * @flow
 */

import styled from 'styled-components';
import colorsFunc from '@lugia/lugia-web/dist/css/stateColor';
const { themeColor } = colorsFunc();

export const Table = styled.table`
  border-top: 1px solid #e8e8e8;
  border-collapse: collapse;
  text-align: left;
  margin: 10px 0;
  background: #fff;
  font-family: '微软雅黑';
  font-size: 14px;
  width: ${props => props.width?props.width:'100%'};
  min-width: 570px;
`;

export const Tr = styled.tr`
  border-bottom:1px solid #e8e8e8;
`;

export const Td = styled.td`
  padding:15px 20px;
  min-height:48px;
  vertical-align:middle;
  line-height:24px;
  max-width:242px;
  min-width:${props => props.width?props.width+'px':''};
  color:${props => (props.mode?'#f8ac30':'#36384c')}
`;

export const Args = styled.div`
  
  
`;
export const Title = styled.div`
  font-family: '微软雅黑';
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 20px;
  text-align: left;
  &:before {
    display: inline-block;
    content: ' ';
    width: 4px;
    height: 18px;
    background: ${themeColor};
    border-radius: 2px;
    margin-right: 8px;
    vertical-align: bottom;
  }
`;

// export const EditIcon = styled(Icon)`
//   // color:${ props => props.mode?'#f8ac30':'#36384c'}
// `;
//

