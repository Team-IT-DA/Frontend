const AddProduct = () => {
  return (
    <div>
      <h1>상품추가</h1>
      <div>
        <div>
          이미지영역
          <input type="file" />
        </div>
        <div>
          <div>
            상품명
            <input />
          </div>
          <div>
            상품 설명
            <input />
          </div>
          <div>
            상품 가격
            <input />
          </div>
          <div>
            판매 단위
            <input />
          </div>
          <div>
            배송비
            <input />
          </div>
          <div>
            배송비 추가 조건
            <input />
          </div>
          <div>
            중량/용량
            <input />
          </div>
          <div>
            안내사항
            <input />
          </div>
        </div>
      </div>
      <div>
        <h1>에디터 영역</h1>
      </div>
    </div>
  );
};

export default AddProduct;
