/**
 * create by szfeng
 *
 * @flow
 */
import { Theme, Tag } from '@lugia/lugia-web';
import styled from 'styled-components';
import React from 'react';

import DefaultTag from './DefaultTag';
import RoundTag from './RoundTag';
import PrimaryTag from './PrimaryTag';
import BasicTag from './BasicTag';
import PresetsTag from './PresetsTag';

const Box = styled.div`
  margin: 10px;
`;

export default class NormalCase extends React.Component<any, any> {
  render() {
    return [
      <Box>
        <DefaultTag />
      </Box>,
      <Box>
        <RoundTag />
      </Box>,
      <Box>
        <PrimaryTag />
      </Box>,
      <Box>
        <BasicTag />
      </Box>,
      <Box>
        <PresetsTag />
      </Box>
    ];
  }
}
