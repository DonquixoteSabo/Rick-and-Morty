import { useEffect } from 'react';

import { Wrapper, Button } from './Pagination.styles';

interface Props {
  page: number;
  setPage: (page: number) => void;
  pages: number;
  topScroll: number;
}

function Pagination({ page, setPage, pages, topScroll }: Props) {
  const goToPrevPage = () => setPage(page - 1);
  const goToNextPage = () => setPage(page + 1);
  const goToFirstPage = () => setPage(1);
  const goToLastPage = () => setPage(pages);

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: topScroll });
  }, [page, topScroll]);

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
