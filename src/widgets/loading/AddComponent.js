import React from 'react';
import { Loading,Alert } from '@lugia/lugia-web';
import styled from 'styled-components';
export const DemoItem=styled.div`
  border:1px solide #ddd
`;
export default class BaseLoad extends React.Component {
  render() {
    return(
      <Loading tip={'正在加载中.....'} size={'small'} loading>
          <Alert
            message="Lugia 的诞生就是要树立金融行业大前端解决方案的标杆。
          我们提供的不仅仅是设计规范、开源组件库、可视化开发套件......而是将设计、开发、工程，
          有机高效的演变为一种适应多端、多层的前端设计语言。Lugia 的目标是降低开发成本，提升开发质量，
          为前端开发人员赋能，让用户体验 知性。Lugia 的诞生就是要树立金融行业大前端解决方案的标杆。
          我们提供的不仅仅是设计规范、开源组件库、可视化开发套件......而是将设计、开发、工程，
          有机高效的演变为一种适应多端、多层的前端设计语言。Lugia 的目标是降低开发成本，提升开发质量，
          为前端开发人员赋能，让用户体验 知性。Lugia 的诞生就是要树立金融行业大前端解决方案的标杆。
          我们提供的不仅仅是设计规范、开源组件库、可视化开发套件......而是将设计、开发、工程，
          有机高效的演变为一种适应多端、多层的前端设计语言。Lugia 的目标是降低开发成本，提升开发质量，
          为前端开发人员赋能，让用户体验 知性。"
          />
        </Loading>
    );
  }
}
