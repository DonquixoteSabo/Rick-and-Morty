import { CharactersWrapper } from 'components/styledComponents/CharactersWrapper';
import { Pagination } from 'components/Pagination/Pagination';
import { SingleCharacter } from 'components/SingleCharacter/SingleCharacter';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Character } from 'types/Character';
import { Query } from 'types/Query';
import { Title } from 'components/styledComponents/Title';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { CharacterPage } from 'pages/CharacterPage/CharacterPage';
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
  let match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:id`}>
          <CharacterPage />
        </Route>
        <Route path={match.path}>
          {isLoading && <h1>Loading...</h1>}
          {isError && <h1>Sorry, but we couldn't load data for you</h1>}
          {isSuccess && data && (
            <>
              <Title>Characters</Title>
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
        </Route>
      </Switch>
    </div>
  );
}

export { Characters };
