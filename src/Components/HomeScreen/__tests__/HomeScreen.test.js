import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import HomeScreen from '../HomeScreen.component';
// import FormBlock from '../../FormBlock/FormBlock.component';

describe('HomeScreen', () => {
  it('should match old snapshot', async () => {
    const tree = renderer.create(<HomeScreen />);
    expect(tree).toMatchSnapshot();
  });
});

describe('getFormBlocks', () => {
  const formBlocks = [
    {
      formName: 'Feedback Form',
      createdAt: '2019-02-27T06:32:52.498Z',
    },
    {
      formName: 'Personal Details Form',
      createdAt: '2019-02-27T06:32:52.501Z',
    },
  ];
  it('should create array of formBlocks element', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper.instance().getFormBlocks(formBlocks).length).toEqual(2);
  });
  it('should retunr empty array if passed formBlocks array is empty', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper.instance().getFormBlocks([])).toEqual([]);
  });
});
