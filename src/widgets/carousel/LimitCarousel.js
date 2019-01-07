import React from 'react';
import styled from 'styled-components';
import { Carousel, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';

const getBackground = (props: Object) => {
  const { i } = props;
  const isEven = i % 2 === 0;
  return `background: ${isEven ? '#000033' : '#161651'}`;
};

const ItemWrap = styled.div`
  width: 100%;
  height: 100%;
  line-height: 200px;
  text-align: center;
  ${getBackground};
  color: #ccc;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  display: inline-block;
  vertical-align: top;
`;

const data = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543751358232&di=f7fd14870cb6028086f7bb55d479df53&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F4%2F586b090b7f42b.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543751053813&di=7374346483180a4f42ea53227f866fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-10-19%2F59e8072871e49.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543751112606&di=d22242ff68a6a20996cc4ac375d04776&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-07-20%2F5b517965781e5.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543751600594&di=be6d42fffdc5d235f4d2c83455885936&imgtype=0&src=http%3A%2F%2Fbbsfiles.vivo.com.cn%2Fvivobbs%2Fattachment%2Fforum%2F201601%2F24%2F175433rossj7cn74vksn4p.jpg'
];

const getImgWrap = () => {
  const len = data.length;
  const items = [];
  for (let i = 0; i < len; i++) {
    items.push(
      <ItemWrap i={i}>
        <Img src={data[i]} />
      </ItemWrap>
    );
  }
  return items;
};

export default class CarouselLimtDemo extends React.Component<any, any> {
  constructor() {
    super();
    this.state = { start: 2 };
  }

  onChange = (param: Object) => {
    const { newValue } = param;
    this.setState({ start: newValue });
  };

  render() {
    const view = { [Widget.Carousel]: { width: 500, height: 250 } };
    return (
      <Theme config={view}>
        <Carousel
          animationTime={500}
          delay={3000}
          start={this.state.start}
          onChange={this.onChange}
        >
          {getImgWrap()}
        </Carousel>
      </Theme>
    );
  }
}
