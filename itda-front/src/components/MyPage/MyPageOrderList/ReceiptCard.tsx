import S from "../MyPageStyles";

const ReceiptCard = () => {
  return (
    <S.ReceiptCard.Layout>
      <S.ReceiptCard.RowLayer>
        <S.ReceiptCard.SubTitle>제품명</S.ReceiptCard.SubTitle>
        <S.ReceiptCard.Contents>김크롱의 유기농 당근</S.ReceiptCard.Contents>
      </S.ReceiptCard.RowLayer>
      <S.ReceiptCard.RowLayer>
        <S.ReceiptCard.SubTitle>수량</S.ReceiptCard.SubTitle>
        <S.ReceiptCard.Contents>2개</S.ReceiptCard.Contents>
      </S.ReceiptCard.RowLayer>
      <S.ReceiptCard.RowLayer>
        <S.ReceiptCard.SubTitle>가격</S.ReceiptCard.SubTitle>
        <S.ReceiptCard.Contents>20,000원</S.ReceiptCard.Contents>
      </S.ReceiptCard.RowLayer>
      <S.ReceiptCard.RowLayer>
        <S.ReceiptCard.SubTitle>배송비</S.ReceiptCard.SubTitle>
        <S.ReceiptCard.Contents>3,000원</S.ReceiptCard.Contents>
      </S.ReceiptCard.RowLayer>
      <S.ReceiptCard.RowLayer>
        <S.ReceiptCard.SubTitle>입금 계좌</S.ReceiptCard.SubTitle>
        <S.ReceiptCard.Contents>
          신한 100-1230-1230-123123
        </S.ReceiptCard.Contents>
      </S.ReceiptCard.RowLayer>
      <S.ReceiptCard.RowLayer>
        <S.ReceiptCard.SubTitle>예금주</S.ReceiptCard.SubTitle>
        <S.ReceiptCard.Contents>박크롱</S.ReceiptCard.Contents>
      </S.ReceiptCard.RowLayer>
    </S.ReceiptCard.Layout>
  );
};

export default ReceiptCard;
