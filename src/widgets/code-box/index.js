/**
 *
 * create by guorg
 *
 */
import * as React from 'react';
import styled from 'styled-components';
import Icon from '../icon';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-light.css';

hljs.registerLanguage('javascript', javascript);

const Wrap = styled.div`
  padding: 10px;
  box-sizing: border-box;
`;
const Title = styled.div`
  font-size: 18px;
  color: #0f1333;
  font-weight: 500;
  line-height: 1;
  box-sizing: border-box;

  &:before {
    display: inline-block;
    content: ' ';
    width: 4px;
    height: 18px;
    background: blue;
    border-radius: 2px;
    margin-right: 8px;
    vertical-align: bottom;
  }
`;
const Desc = styled.div`
  font-size: 14px;
  margin: 20px 0;
  color: #36384c;
  box-sizing: border-box;
`;
const DemoBox = styled.div`
  padding: 20px;
  box-shadow: 0px 0px 6px rgba(102, 102, 102, 0.2);
  background: #fff;
  box-sizing: border-box;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 0px 6px rgba(77, 99, 255, 0.2);
  }
`;
const CodeBox = styled.div`
  font-size: 16px;
  box-sizing: border-box;
  display: ${props => (props.visible ? 'block' : 'none')};
`;
const VisibleCode = styled.div`
  font-size: 14px;
  height: 30px;
  background: #f8f8f8;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  color: #a1a3b3;
  transition: all 0.3s linear;
  box-sizing: border-box;

  &:hover {
    color: #4d63ff;
    background: #f2f5ff;
  }
`;
const Icons = styled(Icon)`
  font-size: 20px;
  vertical-align: middle !important;
  margin-right: 10px;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      textVisible: false,
    };
  }
  componentDidMount() {
    hljs.initHighlightingOnLoad();
  }

  render() {
    const { title,desc,demo,code } = this.props;
    const { visible, textVisible } = this.state;
    return (
      <Wrap>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <DemoBox>{demo}</DemoBox>

        <CodeBox visible={visible}>
          <pre>
            <code className="language-jsx">
              {code}
            </code>
          </pre>
        </CodeBox>

        <VisibleCode
          onClick={this.handleClick}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseOver}
        >
          <Icons
            iconClass={visible ? 'lugia-icon-financial_code' : 'lugia-icon-financial_hide_clip'}
          />
          {textVisible ? (visible ? '隐藏代码' : '显示代码') : ''}
        </VisibleCode>
      </Wrap>
    );
  }
  handleClick = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible,
    });
  };
  mouseEnter = () => {
    this.setState({ textVisible: true });
  };
  mouseOver = () => {
    this.setState({ textVisible: false });
  };
}
