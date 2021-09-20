import theme from "styles/theme";
import S from "components/common/Atoms/AtomsStyles";
import ColorButton from "components/common/Atoms/ColorButton";
import { IOrderList } from "types/OrderListTypes";
import OrderCard from "components/common/Atoms/OrderList"; //TODO:이걸로 추가하기

interface IOrderCard {
  orderList: IOrderList[];
  width?: string;
  orderSheetId?: number;
  createdAt?: string;
  onClickReviewButton?: React.MouseEventHandler<HTMLElement>;
  onClickOrderDetailButton?: React.MouseEventHandler<HTMLElement>;
}

const MyOrderList = ({
  orderList,
  width = "500px",
  onClickReviewButton,
  onClickOrderDetailButton,
}: IOrderCard) => {
  return (
    <S.OrderList.Layout width={width}>
      <S.OrderList.HeaderLayer>
        <S.OrderList.TitleLayer>2021/08/21</S.OrderList.TitleLayer>
        <ColorButton
          width="70px"
          height="30px"
          isWhiteButton={true}
          baseColor={theme.colors.navy.normal}
          fontSize={theme.fontSizes.xs}
          onClickButton={onClickOrderDetailButton}
        >
          결제 상세
        </ColorButton>
      </S.OrderList.HeaderLayer>
      <S.OrderList.ProductLayer>
        {orderList.map(order => (
          <S.OrderList.ProductBlock>
            <S.OrderList.ProductImage
              src={order.imgSrc}
              alt={order.productName}
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
            <ColorButton
              width="100px"
              height="30px"
              isWhiteButton={false}
              baseColor={theme.colors.navy.normal}
              fontSize={theme.fontSizes.xs}
              onClickButton={onClickReviewButton}
            >
              리뷰 쓰기
            </ColorButton>
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

export default MyOrderList;
