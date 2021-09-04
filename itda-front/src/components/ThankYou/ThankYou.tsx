import Header from "components/common/Header";
import S from "./ThankyouStyles";

const ThankYou = () => {
  return (
    <div>
      <Header />
      <S.ThankyouLayout>
        <h1>마음을 잇는 현명한 소비에 함께해주셔서 감사합니다.</h1>
        <h3>24시간 이내로 무통장입금을 완료하지 않으시면 자동취소 됩니다.</h3>
        <S.OrderLayerTitle>주문 내역</S.OrderLayerTitle>
        <S.OrderLayer>
          <S.OrderItemBlock>
            <S.OrderItemImg
              src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/pd/21/1/1/0/2/2/9/LdeGY/3721110229_B.jpg"
              alt="당근"
            />
            <S.OrderItemDescription>
              <S.OrderItemTitle>김크롱의 유기농 당근 2kg</S.OrderItemTitle>
              <div>
                <span>수량: 1</span>
                <span>20,000원</span>
              </div>
            </S.OrderItemDescription>
          </S.OrderItemBlock>
          <S.OrderItemBlock>
            <S.OrderItemImg
              src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/pd/21/1/1/0/2/2/9/LdeGY/3721110229_B.jpg"
              alt="당근"
            />
            <S.OrderItemDescription>
              <S.OrderItemTitle>김크롱의 유기농 당근 2kg</S.OrderItemTitle>
              <div>
                <span>수량: 1</span>
                <span>20,000원</span>
              </div>
            </S.OrderItemDescription>
          </S.OrderItemBlock>
          <S.OrderItemTotalPrice>
            <dl>
              <dt>총 주문 금액</dt>
              <dd>20,000원</dd>
            </dl>
          </S.OrderItemTotalPrice>
        </S.OrderLayer>
        <S.PaymentLayerTitle>결제 내역</S.PaymentLayerTitle>
        <S.PaymentLayer>
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
          <div></div>
        </S.PaymentLayer>
      </S.ThankyouLayout>
    </div>
  );
};

export default ThankYou;
