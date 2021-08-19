import { useParams } from 'react-router-dom';
import { Character } from 'types/Character';
import { useQuery } from 'react-query';
interface Params {
  id: string;
}

const getCharacter = async (id: string) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return response.json();
};

export function CharacterPage() {
  const { id } = useParams<Params>();
  const { isLoading, isError, isSuccess, data } = useQuery<Character>(
    ['characters', id],
    () => getCharacter(id)
  );

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Sorry, but we couldn't load data for you</h1>}
      {isSuccess && data && (
        <>
          <h1>{data.name}</h1>
          {/* <h1>{data.origin}</h1> */}
        </>
      )}
    </>
  );
}
