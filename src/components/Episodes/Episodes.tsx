import React, { useState } from 'react';
import { Query } from 'types/Query';
import { useQuery } from 'react-query';
import { List, Item } from 'components/styledComponents/List';
import { Title } from 'components/styledComponents/Title';
import { Pagination } from 'components/Pagination/Pagination';
import Spinner from '../Spinner/Spinner';

interface Episode {
  id: number;
  name: string;
  air_Date: string;
  episode: string;
}

const getEpisodes = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/episode/?page=${page}`
  );
  return response.json();
};

interface EpisodeQuery extends Query {
  results: Episode[];
}

export function Episodes() {
  const [page, setPage] = useState(1);
  const { isLoading, isError, isSuccess, data } = useQuery<EpisodeQuery>(
    ['episodes', page],
    () => getEpisodes(page)
  );
  const maxPages = data?.info.pages || 1;

  return (
    <div>
      <Title>Episode</Title>
      {isLoading && <Spinner />}
      {isError && (
        <h1>
          Sorry, but we couldn't load data for you. Please refresh the page
        </h1>
      )}
      {isSuccess && data && (
        <>
          <List>
            {data.results.map(({ id, name }) => (
              <Item key={id}>{name}</Item>
            ))}
          </List>
          <Pagination
            page={page}
            setPage={setPage}
            pages={maxPages}
            topScroll={400}
          />
        </>
      )}
    </div>
  );
}
