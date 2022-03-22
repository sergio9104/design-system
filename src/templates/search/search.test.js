import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Search from './index';
import mockSearch from '@services/mocks/search';
import { useRouter } from 'next/router';
import { act } from 'react-dom/test-utils';

jest.mock('next/router', () => {
  return  {
      useRouter: jest.fn(() => {
          return {
              push: jest.fn(() => null),
              route: '/',
              query: {
                entity: 'topics',
                query: '*'
              }
          }
      }) 
  }   
});

jest.mock('@services/search', () => {
  return  jest.fn(() => {
    return new Promise((resolve) => {
      resolve(mockSearch);
    });
  })   
});

jest.mock('lodash/debounce', () => {
  return  jest.fn((cb) => {
    return (val1, val2) => {cb(val1, val2)}
  })   
});

describe('Search Template', () => {
  test('Search its rendering', () => {
    render(<Search />);
  });

  test('Search is changing', () => {
    const router = {
        push: jest.fn(),
        route: '/',
        query: {
          entity: 'topics',
          query: 'Google'
        }
    }

    const spyPush = jest.spyOn(router, 'push');
    useRouter.mockImplementation(() => {
      return router;
  });
    const { getByTestId } = render(<Search />);
    const input = getByTestId('search');
    fireEvent.change(input, { target: { value: 'Amazon' }});
    expect(spyPush).toHaveBeenCalled();
  });

  test('Scroll changing and mouse over', async () => {
    const { getByText, container} = render(<Search />);

    const element = container.querySelector('#list');
    fireEvent.scroll(element, {y: element.clientHeight});
    await waitFor(() => {
      getByText(mockSearch.hits.hits[0]._source.name);
    });
    const item = getByText(mockSearch.hits.hits[0]._source.name);
    fireEvent.mouseOver(item);
    getByText(mockSearch.hits.hits[0]._source.number_of_connections);
  });

  test('Its selecting a new topics', async () => {
    const router = {
        push: jest.fn(),
        route: '/',
        query: {
          entity: 'topics',
          query: 'Google'
        }
    }

    const spyPush = jest.spyOn(router, 'push');
    useRouter.mockImplementation(() => {
      return router;
  });
    const { getByTestId } = render(<Search />);

    const element = getByTestId('entity');
    fireEvent.change(element, { target: { value: 'companies' }});
    expect(spyPush).toHaveBeenCalled();
  });
});


