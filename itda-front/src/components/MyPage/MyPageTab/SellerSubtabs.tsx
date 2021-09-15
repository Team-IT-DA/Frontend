import S from "../MyPageStyles";

const SellerSubtabs = () => {
  const subtabTitles = ["기본정보", "판매자 정보"];
  return (
    <S.SellerSubtabs.Layout>
      {subtabTitles.map((subtab) => (
        <S.SellerSubtabs.Subtab>{subtab}</S.SellerSubtabs.Subtab>
      ))}
    </S.SellerSubtabs.Layout>
  );
};

export default SellerSubtabs;
