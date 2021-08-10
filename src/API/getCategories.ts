export const getCategories = async () => {
  const response = await fetch('https://rickandmortyapi.com/api');
  return response.json();
};
