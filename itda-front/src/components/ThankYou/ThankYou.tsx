import OrderList from "components/common/Atoms/OrderList";
import PaymentList from "./PaymentList";
import Header from "components/common/Header";
import newOrderListData from "util/mock/newOrderListData";
import S from "./ThankyouStyles";
import { useEffect } from "react";

const ThankYou = () => {
  const { orderList } = newOrderListData;

  return (
    <div>
      <Header />
      <S.ThankyouLayout>
        <h1>마음을 잇는 현명한 소비에 함께해주셔서 감사합니다.</h1>
        <h3>24시간 이내로 무통장입금을 완료하지 않으시면 자동취소 됩니다.</h3>
        <S.PaymentLayerTitle>주문 내역</S.PaymentLayerTitle>
        <OrderList orderList={orderList} width="1050px" />
        <S.PaymentLayerTitle>결제 내역</S.PaymentLayerTitle>
        <S.PaymentLayer>
          <PaymentList />
          <PaymentList />
        </S.PaymentLayer>
      </S.ThankyouLayout>
    </div>
  );
};

export default ThankYou;
