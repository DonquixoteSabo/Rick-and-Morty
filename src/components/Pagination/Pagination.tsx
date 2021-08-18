import React, { useEffect } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 1em;
  border: 1px solid rgb(158, 158, 158);
  color: rgb(158, 158, 158);
  background: transparent;
  outline: none;
  font-size: 1rem;
`;

interface Props {
  page: number;
  setPage: (page: number) => void;
  pages: number;
}

function Pagination({ page, setPage, pages }: Props) {
  const goToPrevPage = () => setPage(page - 1);
  const goToNextPage = () => setPage(page + 1);
  const goToFirstPage = () => setPage(1);
  const goToLastPage = () => setPage(pages);
  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 500 });
  }, [page]);
  return (
    <Wrapper>
      <Button disabled={page === 1} onClick={goToFirstPage}>
        First
      </Button>
      <Button disabled={page === 1} onClick={goToPrevPage}>
        Prev
      </Button>
      <Button disabled>{page}</Button>
      <Button disabled={page === pages} onClick={goToNextPage}>
        Next
      </Button>
      <Button disabled={page === pages} onClick={goToLastPage}>
        Last
      </Button>
    </Wrapper>
  );
}

export { Pagination };
