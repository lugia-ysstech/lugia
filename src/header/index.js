/**
 *
 * create by ligx
 *
 * @flow
 */
import React from "react";
import { go, Link } from "@lugia/lugiax-router";
import { Button, Menu } from "@lugia/lugia-web";
import '../css/menu.css'

const items = [
  { value: 'affix', text: 'affix' },
  { value: 'alert', text: 'alert' },
  { value: 'align', text: 'align' },
  { value: 'amountinput', text: 'amountinput' },
  { value: 'autocomplete', text: 'autocomplete' },
  { value: 'avatar', text: 'avatar' },
  { value: 'backtop', text: 'back-top' },
  { value: 'badge', text: 'badge' },
  { value: 'breadcrumb', text: 'breadcrumb' },
  { value: 'button', text: 'button' },
  { value: 'checkbutton', text: 'check-button' },
  { value: 'checkbox', text: 'checkbox' },
  { value: 'collapse', text: 'collapse' },
  { value: 'divider', text: 'divider' },
  { value: 'dropmenu', text: 'dropmenu' },
  { value: 'grid', text: 'grid' },
  { value: 'icon', text: 'icon' },
  { value: 'input', text: 'input' },
  { value: 'inputtag', text: 'inputtag' },
  { value: 'layout', text: 'layout' },
  { value: 'loading', text: 'loading' },
  { value: 'menu', text: 'menu' },
  { value: 'message', text: 'message' },
  { value: 'modal', text: 'modal' },
  { value: 'notification', text: 'notification' },
  { value: 'numberinput', text: 'numberinput' },
  { value: 'progress', text: 'progress' },
  { value: 'radio', text: 'radio' },
  { value: 'scroller', text: 'scroller' },
  { value: 'select', text: 'select' },
  { value: 'slider', text: 'slider' },
  { value: 'switch', text: 'switch' },
  { value: 'tabs', text: 'tabs' },
  { value: 'tag', text: 'tag' },
  { value: 'tooltip', text: 'tooltip' },
  { value: 'tree', text: 'tree' },
  { value: 'tree-select', text: 'tree-select' },
  { value: 'trigger', text: 'trigger' }
]


export default class Header extends React.Component<any, any> {
  render() {
    return (
      <div className="menu-container">
        {
          items.map((item, index) =>
            <Link key={index} to={'/' + item.value} >{item.text} </Link>
          )
        }
      </div>
    );
  }


}
