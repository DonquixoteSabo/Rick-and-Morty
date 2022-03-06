import { useState } from 'react';
import { useQuery } from 'react-query';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { CharactersWrapper } from 'components/styledComponents/CharactersWrapper';
import { Pagination } from 'components/Pagination/Pagination';
import { SingleCharacter } from 'components/SingleCharacter/SingleCharacter';
import { Title } from 'components/styledComponents/Title';

import { CharacterPage } from 'pages/CharacterPage/CharacterPage';
import { Character } from 'types/Character';
import { Query } from 'types/Query';

const getCharacters = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  return response.json();
};

interface CharacterQuery extends Query {
  results: Character[];
}

function Characters() {
  const [page, setPage] = useState(1);
  let match = useRouteMatch();

  const { isLoading, isError, isSuccess, data } = useQuery<CharacterQuery>(
    ['characters', page],
    () => getCharacters(page)
  );
  const maxPages = data?.info.pages || 1;

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
