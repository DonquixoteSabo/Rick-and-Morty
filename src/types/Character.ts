import { Status } from './Status';

export interface Character {
  id: string;
  name: string;
  status: Status;
  species: string;
  location: { name: string; link: string };
  origin: { name: string };
  image: string;
  gender: string;
  type: string;
}
