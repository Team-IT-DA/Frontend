import theme from "styles/theme";
import S from "./AtomsStyles";
import ColorButton from "./ColorButton";

interface IOrder {
  productName: string;
  imgSrc: string;
  count: number;
  price: number;
  productId: number;
}

const OrderList = ({
  orderList,
  width = "500px",
  useReviewButton = false,
  // useOrderTitle = true,
  onClickReviewButton,
  totalPrice,
}: {
  orderList: IOrder[];
  width?: string;
  useReviewButton?: boolean;
  useOrderTitle?: boolean;
  onClickReviewButton?: React.MouseEventHandler<HTMLElement>;
  totalPrice: number;
}) => {
  return (
    <S.OrderList.Layout width={width}>
      <S.OrderList.ProductLayer>
        {orderList.map((order) => (
          <S.OrderList.ProductBlock>
            <S.OrderList.ProductImage
              src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/pd/21/1/1/0/2/2/9/LdeGY/3721110229_B.jpg"
              alt="당근"
            />
            <S.OrderList.ProductInfo>
              <S.OrderList.ProductName>
                {order.productName}
              </S.OrderList.ProductName>
              <div>
                <span>수량: {order.count}</span>
                <span>{order.price.toLocaleString()}원</span>
              </div>
            </S.OrderList.ProductInfo>
            {useReviewButton && (
              <ColorButton
                width="100px"
                height="30px"
                isWhiteButton={false}
                baseColor={theme.colors.navy.normal}
                fontSize={theme.fontSizes.xs}
                onClickButton={onClickReviewButton}
              >
                Review
              </ColorButton>
            )}
          </S.OrderList.ProductBlock>
        ))}
      </S.OrderList.ProductLayer>
      <S.OrderList.PriceLayer>
        <dl>
          <dt>총 주문 금액</dt>
          <dd>{totalPrice.toLocaleString()} 원</dd>
        </dl>
      </S.OrderList.PriceLayer>
    </S.OrderList.Layout>
  );
};

export default OrderList;
