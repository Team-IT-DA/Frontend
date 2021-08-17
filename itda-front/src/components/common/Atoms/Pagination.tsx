import S from "./AtomsStyles";

interface IPagination {
  itemsPerPage: number; //한 페이지당 보여줄 상품 개수. product의 경우 16개였나용..?18개..?
  totalPosts: number; //데이터 개수 (제품목록의 경우 전체 제품의 개수)
  paginate: (num: number) => void; //current Page를 1페이지 2페이지 등 누른 페이지로 이동시키는 set함수를 내려주면 됩니다!
  currentPage: number; //현재 page. 상위 컴포넌트에서 현재 페이지를 관리하는 state를 하나 두어서 내려줘야합니다!
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
