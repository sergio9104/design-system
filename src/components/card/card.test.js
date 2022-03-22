import React from 'react';
import { render } from '@testing-library/react';
import Card from './index';

const props = {
  name: 'CARD',
  createdAt: '2021-12-14',
  description: 'Muun is a self-custodial wallet for bitcoin and lightning.',
  numberOfConections: 3
};

test('Card', () => {
  const { getByText } = render(<Card {...props} />);

  expect(getByText(props.name)).toBeTruthy();
});
