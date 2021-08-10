import { Link } from 'react-router-dom';
import { Wrapper, Button } from './Categories.styles';

interface Props {
  categories: string[];
}

function Categories({ categories }: Props) {
  return (
    <Wrapper>
      {categories.map((category) => (
        <Link to={`/${category}`}>
          <Button>{category}</Button>
        </Link>
      ))}
    </Wrapper>
  );
}

export { Categories };
