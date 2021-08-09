import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import { Wrapper, Button } from './Category.styles';

const getCategories = async () => {
  const response = await fetch('https://rickandmortyapi.com/api');
  return response.json();
};

function Categories() {
  const [categories, setCategories] = useState<string[]>([]);
  const { data } = useQuery('categories', getCategories);

  useEffect(() => {
    if (data) {
      const keys = Object.keys(data);
      setCategories(keys);
    }
  }, [data]);

  return (
    <Wrapper>
      {categories.map((category) => (
        <Button key={category}>{category}</Button>
      ))}
    </Wrapper>
  );
}

export { Categories };
