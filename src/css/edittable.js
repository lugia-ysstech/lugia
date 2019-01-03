/**
 *
 * create by LYQ
 *
 * 2018-12-24
 *
 * @flow
 */

import styled from 'styled-components';
// import Icon from '@lugia/lugia-web';

export const Table = styled.table`
  border-top: 1px solid #e8e8e8;
  border-collapse: collapse;
  text-align: left;
  margin: 10px 0;
  background: #fff;
  font-family: '微软雅黑';
  font-size: 14px;
  width:100%;
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
  color:${props => (props.mode?'#f8ac30':'#36384c')}
`;

export const Args = styled.div`
  
  
`;
export const Title = styled.span`
  font-family: '微软雅黑';
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
// export const EditIcon = styled(Icon)`
//   // color:${ props => props.mode?'#f8ac30':'#36384c'}
// `;
//

