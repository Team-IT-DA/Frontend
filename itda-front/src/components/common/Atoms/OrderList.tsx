import S from "./AtomsStyles";

interface IOrder {
  orderName: string;
  orderImage: string;
  orderCount: number;
  orderPrice: number;
  orderId: number;
}

const OrderList = ({ orderList }: { orderList: IOrder[] }) => {
  return (
    <S.OrderList.Layout>
      <S.OrderList.TitleLayer>주문 내역</S.OrderList.TitleLayer>
      <S.OrderList.ProductLayer>
        {orderList.map((order) => (
          <S.OrderList.ProductBlock>
            <S.OrderList.ProductImage
              src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/pd/21/1/1/0/2/2/9/LdeGY/3721110229_B.jpg"
              alt="당근"
            />
            <S.OrderList.ProductInfo>
              <S.OrderList.ProductName>
                {order.orderName}
              </S.OrderList.ProductName>
              <div>
                <span>수량: {order.orderCount}</span>
                <span>{order.orderPrice.toLocaleString()}원</span>
              </div>
            </S.OrderList.ProductInfo>
          </S.OrderList.ProductBlock>
        ))}
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
