import S from "../MyPageStyles";
import ReceiptCard from "./ReceiptCard";
import CancelButton from "components/common/Atoms/CancelButton";
import { IOrderList } from "types/OrderListTypes";
const ReceiptModal = ({
  handleModalOpen,
  toggleHandler,
}: {
  handleModalOpen: (e: React.MouseEvent<HTMLElement>) => void;
  toggleHandler: React.MouseEventHandler<SVGElement>;
  orderList: IOrderList[];
}) => {
  return (
    <S.ReceiptModal.Wrapper onClick={handleModalOpen}>
      <S.ReceiptModal.Layout className="receipt-modal">
        <S.ReceiptModal.ButtonLayer className="receipt-cancel-button">
          <CancelButton onClick={toggleHandler} />
        </S.ReceiptModal.ButtonLayer>
        <S.ReceiptModal.Title>결제 상세</S.ReceiptModal.Title>
        <S.ReceiptModal.TitleLayer>
          <S.ReceiptModal.DateTitle>2021/08/21</S.ReceiptModal.DateTitle>
          <S.ReceiptModal.OrderId>
            주문번호 2313-4345-1123
          </S.ReceiptModal.OrderId>
        </S.ReceiptModal.TitleLayer>
        <ReceiptCard />
      </S.ReceiptModal.Layout>
    </S.ReceiptModal.Wrapper>
  );
};

export default ReceiptModal;

// productName: "김크롱의 유기농 당근",
// productId: 1,
// price: 2000,
// shippingFee: 3000,
// count: 14,
// bank: "신한은행",
// accontHolder: "크롱",
// account: "100-1230-1230-123123",
