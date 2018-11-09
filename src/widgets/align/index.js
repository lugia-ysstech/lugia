/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import styled from 'styled-components';
import { Align } from '@lugia/lugia-web';

const Target = styled.div`
  background: red;
  height: 50px;
  width: 50px;
  margin: 100px auto;
`;
const Source = styled.span`
  border: solid 1px green;
  width: 90px;
  display: block;
`;
type StateType = {
  align: string,
};
export default class AlignDemo extends React.Component<any, StateType> {
  getTargetDom() {
    return document.getElementById('align');
  }

  state = { align: 'left' };

  render() {
    return (
      <div>
        <div>
          {this.getRadio('topLeft')}
          {this.getRadio('top')}
          {this.getRadio('topRight')}
        </div>
        <div>
          {this.getRadio('leftTop')}
          {this.getRadio('left')}
          {this.getRadio('leftBottom')}
        </div>{' '}
        <div>
          {this.getRadio('rightTop')}
          {this.getRadio('right')}
          {this.getRadio('rightBottom')}
        </div>
        <div>
          {this.getRadio('bottom')}
          {this.getRadio('bottomLeft')}
          {this.getRadio('bottomRight')}
        </div>
        <Target id="align" />
        <Align getTargetDom={this.getTargetDom} align={this.state.align}>
          <Source>hello world</Source>
        </Align>
      </div>
    );
  }

  getRadio(targetAlign: string): React.Element<any> {
    const { align } = this.state;
    return (
      <label>
        <input
          name="align"
          type="radio"
          value={targetAlign}
          checked={align === targetAlign}
          onClick={this.onSelectAlign(targetAlign)}
        />
        {targetAlign}
      </label>
    );
  }

  onSelectAlign = (align: string) => () => {
    this.setState({ align });
  };
}
