import React from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
  width: 100%;
  height: 90px;
  margin-top: 70px;
  background: #f8f9fa;
  display: grid;
  place-items: center;
`;
const CopyRight = styled.div`
  line-height: 25px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #747e90;
  text-align: center;
`;

export const Footer = () => (
  <FooterWrap>
    <CopyRight>
      Copyright @ 2001-2020 Ysstech,All Rights Reserved 粤ICP备05050184号
    </CopyRight>
  </FooterWrap>
);
