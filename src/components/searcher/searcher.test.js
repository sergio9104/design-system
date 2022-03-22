import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Searcher from './index';

const props = {
  inputProps: {
    value: 'Amazon',
    onChange: jest.fn(function () {
      return;
    }),
  },
};

test('Searcher', () => {
  const utils = render(<Searcher {...props} />);
  const input = utils.getByTestId('search');
  act(() => {
    fireEvent.change(input, { target: { value: 'Google' }});
  })
  expect(props.inputProps.onChange).toHaveBeenCalled();
});
