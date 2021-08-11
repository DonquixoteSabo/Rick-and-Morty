import { Character } from 'types/Character';

import styled from 'styled-components';

export const Card = styled.article`
  width: clamp(400px, 40%, 500px);
  height: 200px;
  display: flex;
  overflow: hidden;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px,
    rgb(0 0 0 / 6%) 0px 2px 4px -1px;
`;

export const ImageContainer = styled.div`
  width: 229px;
  height: 200px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Status = styled.div`
  font-size: 0.8rem;
`;

export const CardBody = styled.div`
  padding: 0.75rem;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  header {
    font-size: 1.5rem;
  }
  .information {
    color: gray;
    font-size: 0.75rem;
  }
`;

function SingleCharacter({
  name,
  status,
  image,
  species,
  location,
  origin,
}: Character) {
  return (
    <Card>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <CardBody>
        <div>
          <header>{name}</header>
          <Status>
            {status} - {species}
          </Status>
        </div>
        <p>
          <span className="information">
            Last known location: <br />
          </span>
          {location.name}
        </p>
        <p>
          <span className="information">
            Origin: <br />{' '}
          </span>
          {origin.name}
        </p>
      </CardBody>
    </Card>
  );
}

export { SingleCharacter };
