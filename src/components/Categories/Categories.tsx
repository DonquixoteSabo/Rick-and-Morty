import { Wrapper, Typography, Link } from './Categories.styles';

interface Props {
  categories: string[];
}

function Categories({ categories }: Props) {
  return (
    <Wrapper>
      {categories.map((category) => (
        <Typography>
          <Link key={category} to={`/${category}`}>
            {category}
          </Link>
        </Typography>
      ))}
    </Wrapper>
  );
}

export { Categories };
