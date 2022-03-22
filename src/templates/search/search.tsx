import React, { memo, useCallback, useEffect, useState } from 'react';
import { Box, GridItem, Select, Skeleton } from '@chakra-ui/react';
import debounce from 'lodash/debounce';
import Searcher from '@components/searcher';
import useInfiniteScroll from '@services/infinite-scroll';
import search from '@services/search';
import Card from '@components/card';
import Layout from '@styles/custom/layout'
import { useRouter } from 'next/router';

function Search() {
  const { push, query: name } = useRouter();
  const [query, setQuery] = useState<any>('');
  const [entity, setEntity] = useState<any>('topics');
  const [results, setResults] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [, setIsFetching] = useInfiniteScroll(addResults, 'list');
  const [page, setPage] = useState(0);

  function getResults(entity, query) {
    if (query) {
      push(`?entity=${entity}&query=${query}`);
    }
  }

  async function loadResults() {
    setIsLoaded(false);
    try {
      if (query) {
        const data = await search({ query, entity });
        setResults(data.hits.hits);
        setPage(1);
        setTotalItems(data.hits.total.value);
        setIsLoaded(true);
        setSelected(null);
      }

    } catch (error) {
      setResults([]);
      setTotalItems(0);
    }
  }

  async function addResults() {
    if (query) {
      const data = await search({ query, entity, from: 10 * page });
      setResults([...results, ...data.hits.hits]);
      setPage(page + 1);
      setIsFetching(false);
    }
  }


function searchResults(e) {
  setQuery(e?.target?.value);
}

function selectTopic(e) {
  setEntity(e?.target?.value);
}

function selectItem(val) {
  setSelected(val);
}

const debouncedGetResults = useCallback(debounce(getResults, 300), []);

useEffect(() => {
  debouncedGetResults(entity, query);
}, [query, entity]);

useEffect(() => {
  setQuery(name.query);
  setEntity(name.entity ?? 'topics');
  loadResults();
}, [name]);


const Item = memo(({ index }: { index: number }) => {
  return (
    <Box
      cursor='pointer'
      border='solid 1px gray'
      padding='5px 5px'
      transition='0.05s ease background-color'
      height='36px'
      overflow='hidden'
      title={results[index]?._source.name}
      _hover={{
        backgroundColor: 'gray.200'
      }}
      onMouseEnter={() => selectItem(results[index]?._source)}

    >
      {results[index]?._source.name}
    </Box>
  )
});

return (
  <Layout>
    <GridItem colSpan={4}>
      <Select value={entity} onChange={selectTopic}  data-testid='entity'>
        <option value='topics'>Topics</option>
        <option value='companies'>Companies</option>
      </Select>
    </GridItem>
    <GridItem colSpan={8}>
      <Searcher inputProps={{ value: query, onChange: searchResults }} />
    </GridItem>
    <GridItem colSpan={4}>
        <Box height='350px' overflowY='auto' id='list'>
        <Skeleton isLoaded={isLoaded}>
          {results.map((_, key) => (
            <Item index={key} key={key} />
          ))}
        </Skeleton>
        </Box>
        Total {totalItems}
    </GridItem>
    <GridItem colSpan={8}>
      { selected && <Card
        name={entity === 'topics' ? selected?.name : null}
        numberOfConections={selected?.number_of_connections}
        createdAt={selected?.created_at ? (new Date(selected?.created_at)).toISOString().split('T')[0] : null}
        description={entity === 'companies' ? selected?.description : null}
      />
      }
      
    </GridItem>
  </Layout>
);
}

export default Search;
