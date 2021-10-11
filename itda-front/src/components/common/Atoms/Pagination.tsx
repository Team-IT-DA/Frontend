import S from "./AtomsStyles";

interface IPagination {
  itemsPerPage: number;
  totalPosts: number;
  paginate: (num: number) => void;
  currentPage: number;
}

const Pagination = ({
  itemsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: IPagination) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <S.Pagination.Layer>
      {pageNumbers.map((number) => (
        <S.Pagination.Number
          key={number}
          isClicked={number === currentPage}
          onClick={() => paginate(number)}
        >
          {number}
        </S.Pagination.Number>
      ))}
    </S.Pagination.Layer>
  );
};

export default Pagination;
