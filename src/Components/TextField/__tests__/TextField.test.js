import React from 'react';
import renderer from 'react-test-renderer';
import TextField from '../TextField.component';

describe('TextField', () => {
  it('should match with old snapshot', () => {
    const tree = renderer.create(<TextField index={0} onChange={jest.fn()} />);
    expect(tree).toMatchSnapshot();
  });
});
