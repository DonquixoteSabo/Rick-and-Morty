import { Categories } from 'components/Categories/Categories';
import { Header } from 'components/Header/Header';
import { Wrapper } from './Home.styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { RandomCharacters } from 'components/RandomCharacters/RandomCharacters';
import { Episodes } from 'components/Episodes/Episodes';
import { Characters } from 'components/Characters/Characters';
import { Locations } from 'components/Locations/Locations';

const displayCategories = [
  {
    component: Characters,
    link: 'characters',
  },
  {
    component: Locations,
    link: 'locations',
  },
  {
    component: Episodes,
    link: 'episodes',
  },
];
function Home() {
  return (
    <Router>
      <Wrapper>
        <Header />
        {/* <Categories
          categories={displayCategories.map((category) => category.link)}
        /> */}
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
      </Wrapper>
    </Router>
  );
}

export { Home };
