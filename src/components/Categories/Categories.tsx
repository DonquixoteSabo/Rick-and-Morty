import { Wrapper, Typography, Link } from './Categories.styles';

interface Props {
  categories: string[];
}

function Categories({ categories }: Props) {
  return (
    <Wrapper>
      {categories.map((category) => (
        <Typography key={category}>
          <Link to={`/${category}`}>{category}</Link>
        </Typography>
      ))}
    </Wrapper>
  );
}

export { Categories };
