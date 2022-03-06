import { Categories } from 'components/Categories/Categories';
import { Header } from 'components/Header/Header';
import { Wrapper } from './Home.styles';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { RandomCharacters } from 'components/RandomCharacters/RandomCharacters';
import { Episodes } from 'components/Episodes/Episodes';
import { Characters } from 'components/Characters/Characters';
import { Locations } from 'components/Locations/Locations';
import Footer from '../../components/Footer/Footer';

const displayCategories = [
  {
    component: <Characters />,
    link: 'characters',
  },
  {
    component: <Locations />,
    link: 'locations',
  },
  {
    component: <Episodes />,
    link: 'episodes',
  },
];

function Home() {
  return (
    <Router basename="/Rick-and-Morty">
      <Wrapper>
        <Header />
        <Switch>
          {displayCategories.map(({ component, link }) => (
            <Route key={link} path={`/${link}`}>
              {component}
            </Route>
          ))}
          <Route path="/">
            <RandomCharacters />
          </Route>
        </Switch>
        <Categories
          categories={displayCategories.map((category) => category.link)}
        />
        <Footer />
      </Wrapper>
    </Router>
  );
}

export { Home };
