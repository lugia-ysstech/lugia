/**
 *
 * create by liangguodong
 *
 */
import React from 'react';
import styled from 'styled-components';
import BaseCard from './BaseCard';
import ShadowCard from './ShadowCard';
import TypeCard from './TypeCard';
import ComboCard from './ComboCard';
import TabsCard from './TabsCard';
const Wrapper = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  display: inline-block;
`;

export default () => {
  return (
    <Wrapper>
      <BaseCard />
      <br />
      <ShadowCard />
      <br />
      <TypeCard /> <br />
      <ComboCard /> <br />
      <TabsCard />
    </Wrapper>
  );
};
