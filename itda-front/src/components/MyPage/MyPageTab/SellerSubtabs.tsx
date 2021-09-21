import S from "../MyPageStyles";

interface ISellerSubtabsProps {
  setCurrentSelectedTab: (tabName: string) => void;
  handleMouseLeave: () => void;
}

const SellerSubtabs = ({
  setCurrentSelectedTab,
  handleMouseLeave,
}: ISellerSubtabsProps) => {
  const subtabTitles = ["기본정보", "판매자 정보"];

  const handleSubtabClick = (tabName: string) => {
    if (tabName === "기본정보") {
      setCurrentSelectedTab("개인 정보 수정");
    }
    if (tabName === "판매자 정보") {
      setCurrentSelectedTab("퍈매자 정보");
    }
  };

  return (
    <S.SellerSubtabs.Layout onMouseLeave={handleMouseLeave}>
      {subtabTitles.map((subtab) => (
        <S.SellerSubtabs.Subtab onClick={() => handleSubtabClick(subtab)}>
          {subtab}
        </S.SellerSubtabs.Subtab>
      ))}
    </S.SellerSubtabs.Layout>
  );
};

export default SellerSubtabs;
