import { Status } from 'components/styledComponents/Status';

import { Character } from 'types/Character';
import {
  Card,
  ImageContainer,
  Image,
  CardBody,
} from './SingleCharacter.styles';

function SingleCharacter({
  name,
  status,
  image,
  species,
  location,
  origin,
  id,
}: Character) {
  return (
    <Card to={`/characters/${id}`}>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <CardBody>
        <div>
          <header>{name}</header>
          <Status status={status}>
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
