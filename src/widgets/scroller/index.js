/*
 *
 * 滚动条
 * @flow
 * create by ligx 170911
 */
import '../common/shirm';
import * as React from 'react';
import styled from 'styled-components';
import Support from '../common/FormFieldWidgetSupport';
import { cacheOnlyFirstCall, getElementPosition } from '../utils';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import { FontSize, FontSizeNumber } from '../css';
import {
  BarBackgroundColor,
  BarDefaultSize,
  BarDefaultSizePadding,
  BarHoverBackgroundColor,
  ContainerBackgroundColor,
} from '../css/scroller';
import { px2emcss } from '../css/units';

const em = px2emcss(FontSizeNumber);

type ScrollerProps = {
  totalSize: number,
  viewSize: number,
  onDrag?: Function,
  type?: 'x' | 'y',
  onChange?: Function,
  value?: number,
  throttle?: number,
  defaultValue?: number,
  step?: number,
};
type ScrollerState = {
  value: number,
  sliderSize: number,
};
type Direction = 'down' | 'up' | 'none';

const Container = styled.div`
  position: relative;
  background: ${ContainerBackgroundColor};
  width: ${em(20)};
  height: ${em(300)};
  z-index: 996;
`;

const XContainer = Container.extend`
  height: ${em(BarDefaultSize)};
`;
const YContainer = Container.extend`
  width: ${em(BarDefaultSize)};
`;
const getBackground = props => (props.disabled ? '#898989' : BarBackgroundColor);
const Bar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  text-align: center;
  border-radius: ${em(8)};
  background: ${getBackground};
  color: #fff;
  font-size: ${FontSize};
  line-height: ${em(30)};

  &:hover {
    background-color: ${BarHoverBackgroundColor};
  }

  transition: all 0.4s;
`;

const scrollerSize = BarDefaultSize - BarDefaultSizePadding;
const XBar = Bar.extend`
  height: ${em(scrollerSize)};
  margin-bottom: ${em(2)};
  margin-top: ${em(2)};
`;
const YBar = Bar.extend`
  width: ${em(scrollerSize)};
  margin-left: ${em(2)};
  margin-right: ${em(2)};
`;

const XScroller = 'x',
  YScroller = 'y';
const Down = 'down';
const Up = 'up';
const None = 'none';
const DefaultStep = 30;

class Scroller extends React.Component<ScrollerProps, ScrollerState> {
  static defaultProps = {
    type: YScroller,
    throttle: 100,
    totalSize: 0,
    viewSize: 0,
    step: DefaultStep,
  };

  bodyMouseUpHandle: Object;
  bodyMouseMoveHandle: Object;
  fastStep: number;
  htmlScroller: HTMLElement;
  isDrag: boolean;
  lastFx: string;
  lastTime: number;
  maxValue: number;
  posGetter: Object;
  state: ScrollerState;
  throttleTimer: TimeoutID;
  sliderAbsoulateSize: number;
  step: number;
  move: IntervalID;

  constructor(props: ScrollerProps) {
    super(props);
    this.state = {
      value: Support.getInitNumberValue(props),
      sliderSize: this.getSliderBarSize(props),
    };
    this.updateStepInfo(props);
  }

  componentWillReceiveProps(props: ScrollerProps) {
    this.setState({
      value: Support.getNumberValue(props, this.state),
      sliderSize: this.getSliderBarSize(props),
    });
  }

  getSliderBarSize(props: ScrollerProps) {
    const { viewSize, totalSize } = props;
    const notNeed = totalSize <= viewSize;
    if (notNeed) {
      return 0;
    }
    const barSize = (viewSize * viewSize) / totalSize;
    return Math.round(Math.max(barSize, 10));
  }

  render() {
    let barStyle = {};
    let style: Object = {};
    let Target, TargetContainer;

    const { viewSize } = this.props;
    const { sliderSize } = this.state;

    const barPx = this.getPX(sliderSize);
    const posPx = this.getPX(this.getCurrentPos());
    const viewPx = this.getPX(viewSize);

    this.selectType(
      () => {
        barStyle = {
          width: barPx,
          left: posPx,
        };
        style = { width: viewPx };
        style.width = viewPx;
        Target = XBar;
        TargetContainer = XContainer;
      },
      () => {
        barStyle = {
          height: barPx,
          top: posPx,
        };
        style = { height: viewPx };
        Target = YBar;
        TargetContainer = YContainer;
      }
    );

    if (!Target || !TargetContainer) {
      return '';
    }

    const getScroller = cmp => (this.htmlScroller = cmp);
    return (
      <TargetContainer
        style={style}
        innerRef={getScroller}
        onMouseMove={this.onContainerMouseMove}
        onMouseDown={this.onContainerMouseDown}
        onMouseUp={this.onContainerMouseUp}
        onWheel={this.onWheel}
        onMouseOut={this.onContainerMouseOut}
      >
        <Target
          style={barStyle}
          onMouseDown={this.onSliderBarMouseDown}
          onMouseUp={this.onSliderBarMouseUp}
        />
      </TargetContainer>
    );
  }

  getCurrentPos(): number {
    return this.value2pos(this.state.value);
  }

  getPX(val: number): string {
    return `${em(val)}`;
  }

  componentDidMount() {
    if (document.body) {
      if (this.bodyMouseMoveHandle === undefined) {
        this.bodyMouseMoveHandle = this.bindDoc('mousemove', (e: Object) => {
          if (this.isDrag) {
            this.processDomEvent(this.getRealSliderPos(e));
          }
        });
      }
      if (this.bodyMouseUpHandle === undefined) {
        this.bodyMouseUpHandle = this.bindDoc('mouseup', () => {
          this.changeDrag(false);
        });
      }
    }
  }

  bindDoc(event: string, callback: Function): Object {
    return addEventListener(document, event, callback);
  }

  onSliderBarMouseDown = (e: Object) => {
    e.preventDefault();
    e.stopPropagation();
    this.sliderAbsoulateSize = this.getPos(e) - this.getCurrentPos();
    this.changeDrag(true);
  };

  getDirection(fx: number): Direction {
    if (fx === 0) {
      return None;
    }
    return fx > 0 ? Down : Up;
  }

  onContainerMouseDown = (e: Object) => {
    this.clearMove();

    if (this.isDrag) {
      return;
    }

    const { step = DefaultStep } = this.props;
    this.step = step;
    const mousePos = this.getPos(e);
    const fx = mousePos > this.value2pos(this.state.value) ? Down : Up;
    const targetValue = this.pos2value(mousePos);

    this.move = setInterval(() => {
      const maxValue = fx === Down ? targetValue : this.maxValue;
      this.fastMove(fx, 2, maxValue);
      const { value } = this.state;
      if (value === targetValue) {
        this.clearMove();
      }
    }, 200);
  };

  onContainerMouseUp = (e: Object) => {
    if (this.isDrag === true) {
      return;
    }
    this.processDomEvent(this.getPos(e));
    this.clearMove();
    this.changeDrag(false);
  };

  changeDrag(val: boolean) {
    this.isDrag = val;
    const { onDrag } = this.props;
    onDrag && onDrag(this.isDrag);
  }

  getPos(e: Object) {
    const arg = this.posGetter.func(this.htmlScroller);
    let pos = 0;

    this.selectType(
      () => {
        const { clientX } = e;
        const { x } = arg;
        pos = clientX - x;
      },
      () => {
        const { clientY } = e;
        const { y } = arg;
        pos = clientY - y;
      }
    );
    return Math.min(this.props.viewSize, pos);
  }

  onSliderBarMouseUp = (e: Object) => {
    e.preventDefault();
    e.stopPropagation();
    this.changeDrag(false);
  };

  onContainerMouseOut = () => {
    if (this.isDrag) {
      return;
    }
    this.clearMove();
  };

  clearMove() {
    if (this.move) {
      clearInterval(this.move);
    }
  }

  onContainerMouseMove = (e: Object) => {
    if (this.isDrag) {
      this.processDomEvent(this.getRealSliderPos(e));
    }
  };

  getRealSliderPos(e: Object): number {
    return this.getPos(e) - this.sliderAbsoulateSize;
  }

  processDomEvent(pos: number) {
    this.setValue(this.pos2value(pos));
  }

  componentWillUnmount() {
    this.bodyMouseMoveHandle && this.bodyMouseMoveHandle.remove();
    this.bodyMouseUpHandle && this.bodyMouseUpHandle.remove();
  }

  onWheel = (event: Object) => {
    const { deltaY } = event;
    this.fastMove(this.getDirection(deltaY), 0.03, this.maxValue);
  };

  fastMove = (fx: Direction, percent: number, maxValue: number) => {
    if (fx === None) {
      return;
    }
    const now = new Date();
    const timeSpan = now - this.lastTime;
    const { step = DefaultStep } = this.props;
    if (this.lastTime && timeSpan < 500) {
      this.step = this.step * (1 + percent);
    } else {
      this.step = step;
    }
    this.step = Math.min(this.fastStep, this.step);
    const realStep = this.getMoveStep(fx, this.step);
    let newValue = this.state.value + realStep;
    newValue = Math.min(newValue, maxValue);
    newValue = Math.max(newValue, 0);

    if (this.lastFx !== undefined && this.lastFx !== fx) {
      const timeSpan = new Date() - this.lastTime;
      if (timeSpan < 200) {
        this.lastFx = fx;
        return;
      }
    }

    this.setValue(newValue);
    this.lastFx = fx;
    this.lastTime = now;
  };

  getMoveStep(fx: Direction, step: number): number {
    if (fx === None) {
      return step;
    }
    return fx === Down ? step : -step;
  }

  setValue(theValue: number) {
    if (theValue === this.state.value) {
      return;
    }
    const min = Math.max(0, theValue);
    const max = this.maxValue;
    const value = Math.min(min, max);
    this.setState({ value }, () => {
      this.scrolling(value);
    });
  }

  scrolling(value: number) {
    if (this.throttleTimer !== undefined) {
      clearTimeout(this.throttleTimer);
    }
    const { props } = this;
    const { throttle } = props;
    this.throttleTimer = setTimeout(() => {
      this.onChange(value);
    }, throttle);
  }

  onChange = (value: number) => {
    const { onChange } = this.props;
    onChange && onChange(value);
  };

  selectType(x: Function, y: Function) {
    const { type } = this.props;
    switch (type) {
      case XScroller:
        x();
        break;
      case YScroller:
        y();
        break;
      default:
    }
  }

  shouldComponentUpdate(nextProps: ScrollerProps, nextState: ScrollerState) {
    const sizeChange =
      this.props.viewSize !== nextProps.viewSize || this.props.totalSize !== nextProps.totalSize;
    if (sizeChange) {
      this.updateStepInfo(nextProps);
    }
    return sizeChange || this.state.value !== nextState.value;
  }

  updateStepInfo(props: ScrollerProps): void {
    const { totalSize, step = DefaultStep } = props;
    this.posGetter = cacheOnlyFirstCall(getElementPosition);
    this.step = step;
    this.maxValue = this.getMaxValue(props);
    this.fastStep = totalSize / 32;
    this.sliderAbsoulateSize = 0;
  }

  value2pos(value: number) {
    const { viewSize, totalSize } = this.props;
    const maxPos = this.getMaxPos();
    return Math.min((value * maxPos) / (totalSize - viewSize), maxPos);
  }

  pos2value(pos: number) {
    const { viewSize, totalSize } = this.props;
    const maxPos = this.getMaxPos();
    return Math.min((pos * (totalSize - viewSize)) / maxPos, this.getMaxValue(this.props));
  }

  getMaxValue(props: ScrollerProps): number {
    const { totalSize, viewSize } = props;
    return totalSize - viewSize;
  }

  getMaxPos() {
    const { viewSize } = this.props;
    const { sliderSize } = this.state;
    return viewSize - sliderSize;
  }
}

export default Scroller;
