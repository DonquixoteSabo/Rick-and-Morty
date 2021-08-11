export interface Character {
  id: string;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  location: { name: string; link: string };
  origin: { name: string };
  image: string;
}
