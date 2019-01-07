/**
 *
 * create by szfeng
 *
 */
import React from 'react';
import { Cascader, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';

const data = [
  {
    value: 'Lugia Design',
    text: 'Lugia Design',
    icon: 'lugia-icon-financial_add_pic'
  },
  {
    value: 'Lugia-mega',
    text: 'Lugia-mega',
  },
  {
    value: 'Components',
    text: 'Components',
    children: [
      {
        value: 'General',
        text: 'General',
        children: [
          {
            value: 'Button',
            text: 'Button',
            icon: 'lugia-icon-financial_add_pic'
          },
          { value: 'Icon', text: 'Icon', icon: 'lugia-icon-financial_archive' }
        ]
      },

      {
        value: 'Layout',
        text: 'Layout',
        children: [
          { value: 'Grid', text: 'Grid' },
          { value: 'Layout', text: 'Layout' }
        ]
      },

      {
        value: 'Navigation',
        text: 'Navigation',
        children: [
          { value: 'Affix', text: 'Affix' },
          { value: 'Breadcrumb', text: 'Breadcrumb' },
          { value: 'Dropdown', text: 'Dropdown' },
          { value: 'Menu', text: 'Menu' },
          { value: 'Pagination', text: 'Pagination' },
          { value: 'Steps', text: 'Steps' }
        ]
      },

      {
        value: 'Data Entry',
        text: 'Data Entry',
        children: [
          { value: 'AutoComplete', text: 'AutoComplete' },
          { value: 'Cascader', text: 'Cascader' },
          { value: 'Checkbox', text: 'Checkbox' },
          { value: 'DatePicker', text: 'DatePicker' },
          { value: 'Form', text: 'Form' },
          { value: 'Input', text: 'Input' }
        ]
      }
    ]
  }
];

export default class extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Theme
          config={{
            [Widget.Cascader]: { width: 300 }
          }}
        >
          <Cascader
            data={data}
            placeholder={'请选择'}
            separator={'/'}
            action={'hover'}
          />
        </Theme>
      </div>
    );
  }
}
