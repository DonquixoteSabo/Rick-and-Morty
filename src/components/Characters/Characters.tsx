import { CharactersWrapper } from 'components/styledComponents/CharactersWrapper';
import { Pagination } from 'components/Pagination/Pagination';
import { SingleCharacter } from 'components/SingleCharacter/SingleCharacter';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Character } from 'types/Character';
import { Query } from 'types/Query';
import { Title } from 'components/styledComponents/Title';
const getCharacters = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  return response.json();
};

interface CharecterQuery extends Query {
  results: Character[];
}

function Characters() {
  const [page, setPage] = useState(1);

  const { isLoading, isError, isSuccess, data } = useQuery<CharecterQuery>(
    ['characters', page],
    () => getCharacters(page)
  );

  const maxPages = data?.info.pages || 1;
  console.log(data);

  return (
    <div>
      <Title>Characters</Title>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Sorry, but we couldn't load data for you</h1>}
      {isSuccess && data && (
        <>
          <CharactersWrapper>
            {data.results.map((character) => (
              <SingleCharacter key={character.id} {...character} />
            ))}
          </CharactersWrapper>
          <Pagination
            page={page}
            setPage={setPage}
            pages={maxPages}
            topScroll={500}
          />
        </>
      )}
    </div>
  );
}

export { Characters };
