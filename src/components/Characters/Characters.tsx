import { CharactersWrapper } from 'components/CharactersWrapper/CharactersWrapper';
import { Pagination } from 'components/Pagination/Pagination';
import { SingleCharacter } from 'components/SingleCharacter/SingleCharacter';
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Character } from 'types/Character';

const getCharacters = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  return response.json();
};

interface Query {
  info: {
    next: string;
    prev: string;
  };
  results: Character[];
}

function Characters() {
  const [page, setPage] = useState(2);
  const { isLoading, isError, isSuccess, data } = useQuery<Query>(
    ['characters', page],
    () => getCharacters(page)
  );
  console.log(data);
  return (
    <div>
      <h1>Characters</h1>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Sorry, but we couldn't load data for you</h1>}
      {isSuccess && data && (
        <>
          <CharactersWrapper>
            {data.results.map((character) => (
              <SingleCharacter key={character.id} {...character} />
            ))}
          </CharactersWrapper>
          <Pagination page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
}

export { Characters };
