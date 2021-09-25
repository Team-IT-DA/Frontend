import S from "../MyPageStyles";

interface ISellerSubtabsProps {
  setCurrentSelectedTab: (tabName: string) => void;
  setCurrentSelectedSubtab: (tabName: string) => void;
  handleMouseLeaveSubTab: () => void;
  handleMouseEnterSubtab: () => void;
}

const SellerSubtabs = ({
  setCurrentSelectedTab,
  setCurrentSelectedSubtab,
  handleMouseLeaveSubTab,
  handleMouseEnterSubtab,
}: ISellerSubtabsProps) => {
  const subtabTitles = ["기본정보", "판매자 정보"];

  const handleSubtabClick = (tabName: string) => {
    if (tabName === "기본정보") {
      setCurrentSelectedTab("개인 정보 수정");
      setCurrentSelectedSubtab("기본정보");
    }
    if (tabName === "판매자 정보") {
      setCurrentSelectedTab("개인 정보 수정");
      setCurrentSelectedSubtab("판매자 정보");
    }
  };

  return (
    <S.SellerSubtabs.Layout
      onMouseLeave={handleMouseLeaveSubTab}
      onMouseEnter={handleMouseEnterSubtab}
    >
      {subtabTitles.map((subtab, index) => (
        <S.SellerSubtabs.Subtab
          key={`subtab-${index}`}
          onClick={() => handleSubtabClick(subtab)}
        >
          {subtab}
        </S.SellerSubtabs.Subtab>
      ))}
    </S.SellerSubtabs.Layout>
  );
};

export default SellerSubtabs;
