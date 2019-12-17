/**
 *
 * create by szfeng
 *
 */
import * as React from 'react';
import { Tree, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';

const data = [
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
            icon: 'lugia-icon-financial_add_pic',
            disabled: true
          },
          { value: 'Icon', text: 'Icon', icon: 'lugia-icon-financial_archive' }
        ]
      },

      {
        value: 'Layout',
        text: 'Layout',
        children: [
          { value: 'Grid', text: 'Grid', disabled: true }
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

export default class InlineDataMutlipleTree extends React.Component<
  Object,
  Object
> {
  render() {
    const config = {
      [Widget.Tree]: {
        TreeWrap: {
          normal: {
            width: 300
          }
        }
      }
    };

    return (
      <Tree
        theme={config}
        autoHeight
        data={data}
        mutliple
        translateTreeData={true}
        valueField={'value'}
        displayField={'text'}
      />
    );
  }
}
