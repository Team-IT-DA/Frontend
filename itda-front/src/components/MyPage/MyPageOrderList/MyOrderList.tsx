import theme from "styles/theme";
import S from "../MyPageStyles";
import ColorButton from "components/common/Atoms/ColorButton";
import { IOrderList } from "types/OrderListTypes";
import OrderList from "components/common/Atoms/OrderList";

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
  width,
  onClickReviewButton,
  onClickOrderDetailButton,
}: IOrderCard) => {
  return (
    <>
      <S.MyOrderList.HeaderLayer width={width}>
        <S.MyOrderList.TitleLayer>2021/08/21</S.MyOrderList.TitleLayer>
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
      </S.MyOrderList.HeaderLayer>
      <OrderList
        width={width}
        orderList={orderList}
        useReviewButton={true}
        onClickReviewButton={onClickReviewButton}
        totalPrice={22000}
      />
    </>
  );
};

export default MyOrderList;
