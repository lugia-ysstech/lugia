/**
 *
 * create by guorg
 *
 */
import * as React from 'react';
import styled from 'styled-components';
import { Icon } from '@lugia/lugia-web';
import Highlight from 'react-highlight';


const Wrap = styled.div`
  box-sizing: border-box;
  margin-bottom: 40px
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
    background: #4d63ff;
    border-radius: 2px;
    margin-right: 8px;
    vertical-align: bottom;
  }
`;
const Desc = styled.div`
  font-size: 14px;
  margin: 12px 0 20px 0;
  color: #525466;
  box-sizing: border-box;
  line-height: 1.5
`;
const DemoBox = styled.div`
  padding: 20px;

`;
const BoxWrap = styled.div`
  box-shadow: 0px 0px 6px rgba(102, 102, 102, 0.2);
  background: #fff;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0px 0px 6px rgba(77, 99, 255, 0.2);
  }
`;
const CodeBox = styled.div`
  font-size: 14px;
  box-sizing: border-box;
  text-align: left;
  display: ${props => (props.visible ? 'block' : 'none')};
  & > pre > code {
    line-height: 1.2;
  }
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
  constructor (props) {
    super(props);
    this.state = {
      visible: false,
      textVisible: false,
    };
  }

  render () {
    const { title, desc, demo, code, titleID } = this.props;
    const { visible, textVisible } = this.state;
    return (
      <Wrap>
        <Title id={titleID} name={titleID}>{title}</Title>
        <Desc>{desc}</Desc>
        <BoxWrap>
        <DemoBox>
          <div>{demo}</div>
        </DemoBox>

        {visible ? <CodeBox visible={true}>
          <Highlight className="language-jsx">
            {code}
          </Highlight>
        </CodeBox> : null}

        <VisibleCode
          onClick={this.handleClick}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseOver}
        >
          <Icons
            iconClass={visible ? 'lugia-icon-financial_code' : 'lugia-icon-finacial_hide_code'}
          />
          {textVisible ? (visible ? '隐藏代码' : '显示代码') : ''}
        </VisibleCode>
        </BoxWrap>
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
