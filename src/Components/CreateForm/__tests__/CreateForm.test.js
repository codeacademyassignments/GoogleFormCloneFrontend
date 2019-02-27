import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import CreateForm from '../CreateForm.component';

// describe('CreateForm', () => {
//   it('should match with old snapshot', () => {
//     const tree = shallow(<CreateForm />);
//     expect(tree).toMatchSnapshot();
//   });
// });
describe('addField', () => {
  it('should add an empty string to array', () => {
    const wrapper = shallow(<CreateForm />);
    expect(wrapper.instance().state.fields).toEqual([]);
    wrapper.instance().addFields();
    expect(wrapper.instance().state.fields).toEqual([]);
  });
});
// describe('onChange',()=>{
//   it('should change the state',()=>{
//     const tree = shallow(<CreateForm />);
//     tree.instance().onChange(0,)
//   })
// })
