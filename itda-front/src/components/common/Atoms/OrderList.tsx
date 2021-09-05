import S from "./AtomsStyles";

const OrderList = () => {
  return (
    <S.OrderList.Layout>
      <S.OrderList.TitleLayer>주문 내역</S.OrderList.TitleLayer>
      <S.OrderList.ProductLayer>
        <S.OrderList.ProductBlock>
          <S.OrderList.ProductImage
            src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/pd/21/1/1/0/2/2/9/LdeGY/3721110229_B.jpg"
            alt="당근"
          />
          <S.OrderList.ProductInfo>
            <S.OrderList.ProductName>
              김크롱의 유기농 당근 2kg
            </S.OrderList.ProductName>
            <div>
              <span>수량: 1</span>
              <span>20,000원</span>
            </div>
          </S.OrderList.ProductInfo>
        </S.OrderList.ProductBlock>
      </S.OrderList.ProductLayer>
      <S.OrderList.PriceLayer>
        <dl>
          <dt>총 주문 금액</dt>
          <dd>20,000원</dd>
        </dl>
      </S.OrderList.PriceLayer>
    </S.OrderList.Layout>
  );
};

export default OrderList;
