/**
 *
 * create by szfeng
 *
 */
import * as React from 'react';
import { TreeSelect, Theme } from '@lugia/lugia-web';
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
          { value: 'Grid', text: 'Grid', disabled: true },
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

export default class InlineDataTreeSelect extends React.Component<any, any> {
  render() {
    const config = { [Widget.TreeSelect]: { width: 300, height: 300 } };
    return (
      <Theme config={config}>
        <TreeSelect
          data={data}
          onlySelectLeaf
          expandAll
          mutliple
          translateTreeData
        />
      </Theme>
    );
  }
}
