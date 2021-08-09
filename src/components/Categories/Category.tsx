import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

// import { Wrapper, Title } from './Header.styles';

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
    <>
      {categories.map((category) => (
        <h1 key={category}>{category}</h1>
      ))}
    </>
  );
}

export { Categories };
