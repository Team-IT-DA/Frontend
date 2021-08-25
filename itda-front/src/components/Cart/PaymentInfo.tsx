import S from "./CartStyles";
import GradientButton from "components/common/Atoms/GradientButton";

const PaymentInfo = () => {
  const subTitles = ["주문금액", "배송비", "합계"];
  const subTitleList = subTitles.map((title, idx) => (
    <li key={idx}>
      <S.PaymentInfo.SubTitle key={idx}>{title}</S.PaymentInfo.SubTitle>
    </li>
  ));
  return (
    <S.PaymentInfo.Layout>
      <S.PaymentInfo.Title>결제 상세</S.PaymentInfo.Title>
      <S.PaymentInfo.ContentsLayer>
        <S.PaymentInfo.SubTitleBlock>
          {subTitleList}
        </S.PaymentInfo.SubTitleBlock>
        <S.PaymentInfo.ContentsBlock>
          <S.PaymentInfo.Contents>19,900원</S.PaymentInfo.Contents>
          <S.PaymentInfo.Contents>3,000원</S.PaymentInfo.Contents>
          <S.PaymentInfo.Contents>22,900원</S.PaymentInfo.Contents>
        </S.PaymentInfo.ContentsBlock>
      </S.PaymentInfo.ContentsLayer>
      <GradientButton width={"18rem"} disabled={true}>
        구매 하기
      </GradientButton>
    </S.PaymentInfo.Layout>
  );
};

export default PaymentInfo;
