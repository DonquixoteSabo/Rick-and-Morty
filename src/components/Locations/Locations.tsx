import React, { useState } from 'react';
import { Query } from 'types/Query';
import { useQuery } from 'react-query';
import { List, Item } from 'components/styledComponents/List';
import { Title } from 'components/styledComponents/Title';
import { Pagination } from 'components/Pagination/Pagination';

const getLocations = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/location/?page=${page}`
  );
  return response.json();
};
interface Location {
  id: number;
  name: string;
  type: string;
  dimenstion: string;
  residentals: string[];
}

interface LocationQuery extends Query {
  results: Location[];
}

export function Locations() {
  const [page, setPage] = useState(1);
  const { isLoading, isError, isSuccess, data } = useQuery<LocationQuery>(
    ['locations', page],
    () => getLocations(page)
  );
  const maxPages = data?.info.pages || 1;

  return (
    <div>
      <Title>Locations</Title>
      {isLoading && <h1>Loading...</h1>}
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
