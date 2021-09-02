import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Character } from 'types/Character';
import styled from 'styled-components';
import { Status } from 'components/styledComponents/Status';
import { Title } from 'components/styledComponents/Title';
interface Params {
  id: string;
}

const getCharacter = async (id: string) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return response.json();
};
const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  font-size: 22px;
  .img-container {
    width: 329px;
    margin-bottom: 1em;
  }
  .information {
    color: gray;
    font-size: 0.9rem;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

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
          <Title>{data.name}</Title>
          <Wrapper>
            <div className="img-container">
              <img src={data.image} alt={data.name} />
            </div>
            <div className="inner-wrapper">
              <Status status={data.status}>
                {data.status} - {data.species}
              </Status>
            </div>
            <p>
              <span className="information">Last known location:</span>
              {'  '}
              {data.location.name}
            </p>
            <p>
              <span className="information">Origin: </span>
              {'  '}
              {data.origin.name}
            </p>
            <p>
              <span className="information">Gender: </span>
              {'  '}
              {data.gender}
            </p>
            <p>
              <span className="information">Type: </span>
              {'  '}
              {data.type}
            </p>
          </Wrapper>
        </>
      )}
    </>
  );
}
