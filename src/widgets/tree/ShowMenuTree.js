/**
 *
 * create by szfeng
 *
 */
import * as React from 'react'
import { Tree, Icon, Theme } from '@lugia/lugia-web'
import Widget from '@lugia/lugia-web/dist/consts'
import styled from 'styled-components'

const IconBox = styled.div`
  margin: 0 4px;
`

const getCSS = props => {
  const { visible, clientX, clientY } = props

  return !visible
    ? 'display: none; opacity: 0'
    : `display: block; left: ${clientX}px; top: ${clientY}px; opacity: 1`
}

const MenuBox = styled.div`
  position: fixed;
  width: 150px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  ${getCSS}
`

const Item = styled.div`
  width: 100%;
  height: 35px;
  line-height: 30px;
  padding-left: 10px;
  user-select: none;
  color: #999;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background: rgba(77, 99, 255, 0.1);
  }
`

const data = [
  { value: '1', text: '选项 1' },
  { value: '1.1', text: '选项 1.1', pid: '1', path: '1' },
  {
    value: '1.1.1',
    text: '选项 1.1.1',
    pid: '1.1',
    path: '1/1.1',
    isLeaf: true
  },
  {
    value: '1.1.2',
    text: '选项 1.1.2',
    pid: '1.1',
    path: '1/1.1',
    isLeaf: true,
    notCanSelect: true
  },

  { value: '1.2', text: '选项 1.2', pid: '1', path: '1' },
  {
    value: '1.2.1',
    text: '选项 1.2.1',
    pid: '1.2',
    path: '1/1.2',
    isLeaf: true
  },
  { value: '1.2.2', text: '选项 1.2.2', pid: '1.2', path: '1/1.2' },
  {
    value: '1.2.2.1',
    text: '选项 1.2.2.1',
    pid: '1.2.2',
    path: '1/1.2/1.2.2',
    isLeaf: true
  },

  {
    value: '1.2.2.2',
    text: '选项 1.2.2.2',
    pid: '1.2.2',
    path: '1/1.2/1.2.2',
    isLeaf: true
  },

  { value: '1.3', text: '选项 1.3', pid: '1', path: '1', isLeaf: true },

  { value: '2', text: '选项 2' },
  { value: '2.1', text: '选项 2.1', pid: '2', path: '2', isLeaf: true },
  { value: '2.2', text: '选项 2.2', pid: '2', path: '2', isLeaf: true }
]

export default class DefaultTree extends React.Component<Object, Object> {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      clientX: 0,
      clientY: 0,
      start: 0
    }
  }

  componentDidMount() {
    document.addEventListener('click', this._handleClick)
    document.addEventListener('scroll', this._handleScroll)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._handleClick)
    document.removeEventListener('scroll', this._handleScroll)
  }

  _handleClick = (event: Object) => {
    const { visible } = this.state
    if (visible) {
      this.setState({ visible: false })
    }
  }

  _handleScroll = (event: Object) => {
    const { visible } = this.state
    if (visible) {
      this.setState({ visible: false })
    }
  }

  getTriggerMenu(isLeaf: boolean) {
    return isLeaf
      ? [
          <Item
            onContextMenu={e => {
              e.preventDefault()
              return
            }}
          >
            叶子结点选项1
          </Item>,
          <Item
            onContextMenu={e => {
              e.preventDefault()
              return
            }}
          >
            叶子结点选项2
          </Item>
        ]
      : [
          <Item
            onContextMenu={e => {
              e.preventDefault()
              return
            }}
          >
            父级节点选项1
          </Item>,
          <Item
            onContextMenu={e => {
              e.preventDefault()
              return
            }}
          >
            父级节点选项2
          </Item>
        ]
  }

  onRightClick = (target: Object) => {
    const { event, item } = target
    const { notCanSelect, isLeaf } = item
    if (notCanSelect) {
      return
    }
    this.isLeaf = isLeaf
    const { clientX, clientY } = event

    this.setState({
      visible: true,
      clientX,
      clientY,
      item
    })
  }

  render() {
    const config = {
      [Widget.Tree]: {
        TreeWrap: {
          normal: {
            width: 320,
            height: 290
          }
        }
      }
    }
    const { visible, clientX, clientY } = this.state
    const menu = this.getTriggerMenu(this.isLeaf)
    return [
      <Tree
        data={data}
        theme={config}
        igronSelectField={'notCanSelect'}
        autoHeight
        expandAll
        onSelect={this.onSelect}
        shape={'round'}
        onRightClick={this.onRightClick}
      />,
      <MenuBox visible={visible} clientX={clientX} clientY={clientY}>
        {menu}
      </MenuBox>
    ]
  }
}
