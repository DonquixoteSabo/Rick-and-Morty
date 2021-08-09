import { Categories } from 'components/Categories/Categories';
import { Header } from 'components/Header/Header';
import { Wrapper } from './Home.styles';

function Home() {
  return (
    <Wrapper>
      <Header />
      <Categories />
    </Wrapper>
  );
}

export { Home };
