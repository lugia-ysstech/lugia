/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import { Avatar, Theme, Badge } from '@lugia/lugia-web';
import ShapeAvatar from './ShapeAvatar';
import SizeAvatar from './SizeAvatar';
import TypeAvatar from './TypeAvatar';
import ComboAvatar from './ComboAvatar';

export default () => {
  return (
    <div>
      <ShapeAvatar></ShapeAvatar>
      <SizeAvatar></SizeAvatar>
      <TypeAvatar></TypeAvatar>
      <ComboAvatar></ComboAvatar>
    </div>
  );
};
