/**
 * create by szfeng
 */
import React from 'react';
import { Navmenu, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';

const NavMenuWrap = styled.div`
  display: inline-block;
  margin: 10px;
`;

const data = [
  {
    value: 'Lugia Design of React',
    text: 'Lugia Design of React',
    icon: 'lugia-icon-financial_add_pic'
  },
  {
    value: 'Lugia-web',
    text: 'Lugia-web',
    icon: 'lugia-icon-financial_columns'
  },
  { value: 'Lugia-mobile', text: 'Lugia-mobile' },
  {
    value: 'Components',
    text: 'Components',
    children: [
      {
        value: 'General',
        text: 'General',
        describe: true,
        children: [
          {
            value: 'Button',
            text: 'Button',
            icon: 'lugia-icon-financial_add_pic'
          },
          {
            value: 'Icon',
            text: 'Icon',
            icon: 'lugia-icon-financial_archive'
          }
        ]
      },

      {
        value: 'Layout',
        text: 'Layout',
        describe: true,
        children: [
          { value: 'Grid', text: 'Grid' },
        ]
      },

      {
        value: 'Navigation',
        text: 'Navigation',
        describe: true,
        children: [
          { value: 'Affix', text: 'Affix' },
          { value: 'Breadcrumb', text: 'Breadcrumb' }
        ]
      },

      {
        value: 'Data Entry',
        text: 'Data Entry',
        describe: true,
        children: [
          { value: 'AutoComplete', text: 'AutoComplete' },
          { value: 'Cascader', text: 'Cascader' }
        ]
      }
    ]
  }
];

export default class DefaultBreadcrumb extends React.Component<any, any> {
  render() {
    return [
      <NavMenuWrap>
        <Navmenu data={data} inlineType={'ellipse'} />
      </NavMenuWrap>,
      <NavMenuWrap>
        <Navmenu data={data} themeStyle={'dark'} inlineType={'ellipse'} />
      </NavMenuWrap>
    ];
  }
}
