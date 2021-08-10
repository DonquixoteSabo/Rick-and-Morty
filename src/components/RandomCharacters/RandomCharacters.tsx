// import { Wrapper, Button } from './Categories.styles';
import { getRandomNumbers } from 'helpers/getRandomNumbers';
import { useQuery } from 'react-query';

const getCharacters = async (nums: number[]) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${nums}`
  );
  return response.json();
};

function RandomCharacters() {
  const data = useQuery('characterAmount', () =>
    getCharacters(getRandomNumbers())
  );
  console.log(data);

  return (
    <>
      <h1>random</h1>
    </>
  );
}

export { RandomCharacters };
