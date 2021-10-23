import S from "./CartStyles";
import GradientButton from "components/common/Atoms/GradientButton";
import { cartProductData } from "stores/CartAtoms";
import { useRecoilValue } from "recoil";
import { useMutation } from "react-query";
import cartAPI from "util/API/cartAPI";
import { IOrder } from "types/CartTypes";
import { shippingDefaultInfoState } from "stores/CartAtoms";

const PaymentInfo = () => {
  const cartProductState = useRecoilValue(cartProductData);
  const shippingInfoState = useRecoilValue(shippingDefaultInfoState);

  const subTitles = ["주문금액", "배송비", "합계"];
  const subTitleList = subTitles.map((title, idx) => (
    <li key={idx}>
      <S.PaymentInfo.SubTitle key={idx}>{title}</S.PaymentInfo.SubTitle>
    </li>
  ));

  const calculateTotalAmount = () => {
    return cartProductState.reduce((acc, product) => {
      const { price, count } = product;
      acc += price * count;
      return acc;
    }, 0);
  };

  const mutation = useMutation(async (orderList: IOrder) => {
    cartAPI.order.post.postOrder(orderList);
  });

  const handleOrderProduct = () => {
    //mutation.mutate(body에 넣은 데이터를 넣어준다)
  };

  const totalAmount = calculateTotalAmount();
  return (
    <S.PaymentInfo.Layout>
      <S.PaymentInfo.Title>결제 상세</S.PaymentInfo.Title>
      <S.PaymentInfo.ContentsLayer>
        <S.PaymentInfo.SubTitleBlock>
          {subTitleList}
        </S.PaymentInfo.SubTitleBlock>
        <S.PaymentInfo.ContentsBlock>
          <S.PaymentInfo.Contents>
            {totalAmount.toLocaleString()}
          </S.PaymentInfo.Contents>
          <S.PaymentInfo.Contents>0원</S.PaymentInfo.Contents>
          <S.PaymentInfo.Contents>
            {totalAmount.toLocaleString()}원
          </S.PaymentInfo.Contents>
        </S.PaymentInfo.ContentsBlock>
      </S.PaymentInfo.ContentsLayer>
      <GradientButton
        width={"18rem"}
        disabled={shippingInfoState}
        onClick={handleOrderProduct}
      >
        구매 하기
      </GradientButton>
    </S.PaymentInfo.Layout>
  );
};

export default PaymentInfo;
