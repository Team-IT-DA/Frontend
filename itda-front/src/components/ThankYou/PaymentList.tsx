import S from "./ThankyouStyles";
interface IPayment {
  bank: string;
  accountHolder: string;
  account: string;
  shippingFee: number;
  totalAmount?: number;
}
const PaymentList = () => {
  return (
    <S.PaymentItemBlock>
      <dl>
        <dt>결제 수단</dt>
        <dd>무통장 입금</dd>
      </dl>
      <dl>
        <dt>입금 계좌</dt>
        <dd>크롱은행 100-3434-454-6666</dd>
      </dl>
      <dl>
        <dt>예금주</dt>
        <dd>이크롱</dd>
      </dl>
      <dl>
        <dt>배송비</dt>
        <dd>2,500원</dd>
      </dl>
      <dl>
        <dt>입금 금액</dt>
        <dd>22,500원</dd>
      </dl>
    </S.PaymentItemBlock>
  );
};

export default PaymentList;
