import React, { useState } from 'react';
import { Query } from 'types/Query';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { Title } from 'components/styledComponents/Title';
import { Pagination } from 'components/Pagination/Pagination';
export const Wrapper = styled.ul`
  color: white;
  font-size: 1.1rem;
  text-align: center;
  list-style: none;
`;

export const Item = styled.li`
  margin: 0.5em 0;
`;
interface Location {
  id: number;
  name: string;
  type: string;
  dimenstion: string;
  residentals: string[];
}

const getLocations = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/location/?page=${page}`
  );
  return response.json();
};

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
          <Wrapper>
            {data.results.map(({ id, name }) => (
              <Item key={id}>{name}</Item>
            ))}
          </Wrapper>
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
