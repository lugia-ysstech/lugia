/**
 *
 * create by ligx
 *
 * @flow
 */
/**
 *
 * create by ligx
 *
 * @flow
 */

import React, { Component } from "react";
import styled from "styled-components";

const Msg = styled.div`
  color: red;
`;
export default (props: Object) => {
  return <Msg>{props.msg}</Msg>;
};
