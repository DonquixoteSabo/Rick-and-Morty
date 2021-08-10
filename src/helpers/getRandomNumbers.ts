const characterAmount = 671;

export const getRandomNumbers = (): number[] => {
  const numbers = [];
  for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * characterAmount + 1);
    numbers.push(randomNumber);
  }
  return numbers;
};
