/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from "react";
import { go } from "@lugia/lugiax-router";
import { Theme, Icon, Input, Trigger } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts/index";
import styled from "styled-components";
import colorsFunc from "@lugia/lugia-web/dist/css/stateColor";
import { getBorderRadius, getBorder, getBoxShadow } from "@lugia/theme-utils";

const Container = styled.div`
  z-index: 9999999999999999;
  background: #fff;
  box-shadow: 0 0 5px #ccc;
  padding: 10px 0;
  border-radius: 4px;
`;

const Type = styled.div`
  font-size: 16px;
  color: #333333;
  line-height: 1;
  margin: 24px 0 18px;
  padding: 0 16px;
`;
const { themeColor } = colorsFunc();
const TypeLine = styled.div`
  width: 6px;
  height: 16px;
  background: ${themeColor};
  margin-right: 8px;
  display: inline-block;
  border-radius: 6px;
  vertical-align: top;
`;

const Title = styled.div`
  font-size: 14px;
  color: #999999;
  line-height: 1.5;
  text-align: right;
  padding: 0 16px 0 0;
`;
const UL = styled.ul``;
const Li = styled.li`
  display: flex;
  width: 500px;
  padding: 0 16px;
  line-height: 1.5;
  margin: 8px 0;
  cursor: pointer;
  background: ${props => (props.active ? "rgba(77, 99, 255,0.1)" : "")};
`;
const LiLeft = styled.div`
  width: 156px;
`;
const LiRight = styled.div`
  width: 342px;
  border-left: 1px solid #999999;
  padding: 0 16px;
`;

type DefProps = {
  current?: Array<string>,
  onSelect?: Function
};

type StateProps = {
  currentState: Array<string>
};

class SearchIcon extends React.Component<any> {
  static displayName = Widget.SearchIcon;

  render() {
    return <Icon iconClass="lugia-icon-financial_search" />;
  }
}

export default class Navcomponent extends React.Component<any, any> {
  input: any;
  constructor(props: Object) {
    super(props);
    this.input = React.createRef();
  }

  static getDerivedStateFromProps(defProps: DefProps, stateProps: StateProps) {
    const { searchInfo, result } = defProps;
    if (!stateProps) {
      return {
        searchInfo,
        result,
        current: null,
        totalLi: 0
      };
    }
    return {
      searchInfo: "searchInfo" in defProps ? searchInfo : stateProps.searchInfo,
      result: "searchInfo" in defProps ? result : stateProps.result
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.addKeyUpListener);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.addKeyUpListener);
  }

  render() {
    const InputStyle = {
      [Widget.Input]: {
        Container: {
          normal: {
            margin: { top: 0, right: 0, bottom: 0, left: 38 }
          }
        },
        Input: {
          normal: {
            border: "none",
            margin: { top: 0, right: 0, bottom: 0, left: 38 },
            width: 150,
            background: {
              color: "transparent"
            }
          },
          hover: {
            border: "none",
            background: {
              color: "rgba(255,255,255,0.4)"
            }
          },
          focus: {
            border: getBorder({
              width: "1px",
              color: "#4D68FF",
              style: "solid"
            }),
            background: {
              color: "rgb(255,255,255)"
            }
          }
        },
        InputPrefix: { normal: { fontSize: 14 } }
      },
      [Widget.Trigger]: {
        width: 500,
        zIndex: 9999999
      }
    };
    const { searchInfo } = this.state;
    const poup = this.getPopup();
    return (
      <Theme config={InputStyle}>
        <Trigger offsetX={120} offsetY={0} action={["focus"]} popup={poup}>
          <Input
            ref={this.input}
            prefix={<SearchIcon />}
            onChange={this.handleInputChange}
            placeholder="在lugia中搜索"
            value={searchInfo}
          />
        </Trigger>
      </Theme>
    );
  }

  getPopElementData = (data: Object) => {
    let keyIndex = 0;
    const newData = {};
    for (const i in data) {
      const arr = [];
      data[i].forEach((item, index) => {
        if (index < 10) {
          keyIndex += 1;
          arr.push({ ...item, keyIndex });
        }
      });
      newData[i] = arr;
    }
    const { totalLi } = this.state;
    if (totalLi !== keyIndex) {
      this.setState({
        totalLi: keyIndex
      });
    }
    return newData;
  };

  getPopElement = (data: Object) => {
    const child = [];
    const { current } = this.state;
    const filterData = this.getPopElementData(data);
    for (const i in filterData) {
      child.push(
        <React.Fragment>
          <Type>
            <TypeLine />
            {i}
          </Type>
          <UL>
            {filterData[i].map(item => (
              <React.Fragment>
                <Li
                  active={current === item.keyIndex}
                  url={item.url}
                  onMouseMove={() => this.setCurrent(item.keyIndex)}
                >
                  <LiLeft onClick={e => this.linkToUrl(item.url.split("#")[0])}>
                    {" "}
                    <Title>{item.owner}</Title>{" "}
                  </LiLeft>
                  <LiRight onClick={e => this.linkToUrl(item.url)}>
                    {item.content}
                  </LiRight>
                </Li>
              </React.Fragment>
            ))}
          </UL>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        {child.map(item => (
          <React.Fragment>{item}</React.Fragment>
        ))}
      </React.Fragment>
    );
  };

  getPopup = () => {
    const { result } = this.state;
    return (
      <Container onMouseOut={() => this.setCurrent(null)}>
        {result && this.getPopElement(result)}
      </Container>
    );
  };
  handleInputChange = (event: Object) => {
    let newValue = "";
    if (!event) {
      newValue = null;
    } else {
      newValue = event.newValue;
    }
    const { handleInputChange } = this.props;
    handleInputChange && handleInputChange(newValue);
    this.fetchRequest(newValue);
  };

  fetchRequest = (newValue: string) => {
    const { fetchRequest } = this.props;
    fetchRequest && fetchRequest(newValue);
  };
  linkToUrl = (res: string) => {
    if (!res) {
      return;
    }
    this.handleInputChange(null);
    go({ url: res });
    this.setState({
      current: null
    });
  };
  setCurrent = value => {
    const { current } = this.state;
    if (current !== value) {
      this.setState({
        current: value
      });
    }
  };

  addKeyUpListener = e => {
    const { current, totalLi } = this.state;
    let currentValue = current;
    switch (e.keyCode) {
      case 38:
        currentValue = current <= 1 ? 1 : current - 1;
        break;
      case 40:
        currentValue = current >= totalLi ? totalLi : current + 1;
        break;
      case 13:
        const { result } = this.state;
        const filterData = this.getPopElementData(result);
        let url = null;
        for (const i in filterData) {
          filterData[i].forEach(item => {
            if (item.keyIndex === currentValue) {
              url = item.url;
            }
          });
        }
        this.linkToUrl(url);
        break;
      default:
        break;
    }
    if (currentValue !== current) {
      this.setState({
        current: currentValue
      });
    }
  };
}
