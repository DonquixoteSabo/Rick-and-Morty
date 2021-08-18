import React from 'react';
import styled from 'styled-components';
interface Props {
  page: number;
  setPage: (page: number) => void;
}

function Pagination({ page, setPage }: Props) {
  const goToPrevPage = () => setPage(page - 1);
  const goToNextPage = () => setPage(page + 1);

  return (
    <div>
      <button onClick={goToPrevPage}>-1</button>
      <button onClick={goToNextPage}>+1</button>
    </div>
  );
}

export { Pagination };
