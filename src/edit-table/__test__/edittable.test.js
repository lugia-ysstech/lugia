/*
 *@flow
 *
 */

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import EditTables, {
  objectToArray,
  getEventProps,
  getDefaultValue
} from '../edittable';
import Enzyme, { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });
describe('editTable Test', () => {
  const target = mount(<EditTables />);
  it('css', () => {
    const target = <EditTables />;
    expect(renderer.create(target).toJSON()).toMatchSnapshot();
  });

});
