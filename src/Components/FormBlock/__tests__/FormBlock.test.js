import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import FormBlock from '../FormBlock.component';

describe('FormBlock', () => {
  it('should match with old snapshot', () => {
    const form = {
      formName: 'Code Academy Feedback 2019',
      createdAt: '2019-02-27T06:32:52.498Z',
    };
    const tree = renderer.create(<FormBlock formBlock={form} />);
    expect(tree).toMatchSnapshot();
  });
});

describe('separateDateAndTime', () => {
  it('should return the passed date and time separated by space', () => {
    const form = {
      formName: 'Code Academy Feedback 2019',
      createdAt: '2019-02-27T06:32:52.498Z',
    };
    const wrapper = shallow(<FormBlock formBlock={form} />);
    expect(wrapper.instance().separateDateAndTime('2019-02-27T06:32:52.498Z')).toEqual('2019-02-27 06:32:52');
  });
});

// describe('convertUTCtoIST', () => {
//   it('should convert the utc time to ist', () => {
//     const form = {
//       formName: 'Code Academy Feedback 2019',
//       createdAt: '2019-02-27T06:32:52.498Z',
//     };
//     const wrapper = shallow(<FormBlock formBlock={form} />);
//     expect(wrapper.instance().convertUTCtoIST('2019-02-27 06:32:52 UTC')).toEqual('Wed Feb 27 2019 12:02:52 GMT+0530 (India Standard Time)');
//   });
// });
