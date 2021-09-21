import SellerSubtabs from "./SellerSubtabs";
import S from "../MyPageStyles";

interface IMyPageTabProps {
  isSeller: boolean;
  category: string;
  isSubtabVisible: boolean;
  setIsSubtabVisible: (param: boolean) => void;
  currentSelectedTab: string;
  setCurrentSelectedTab: (tabName: string) => void;
  handleTabClick: (tabName: string) => void;
}

const MyPageTab = ({
  isSeller,
  category,
  isSubtabVisible,
  setIsSubtabVisible,
  currentSelectedTab,
  setCurrentSelectedTab,
  handleTabClick,
}: IMyPageTabProps) => {
  const handleMouseEnter = () => {
    if (isSeller && category === "개인 정보 수정") {
      setIsSubtabVisible(true);
    }
  };

  const handleMouseLeave = () => {
    setIsSubtabVisible(false);
  };

  return (
    <S.MyPageTab.Layout>
      <S.MyPageTab.TabLayer
        category={category}
        currentSelectedTab={currentSelectedTab}
        onClick={() => handleTabClick(category)}
        onMouseEnter={() => handleMouseEnter()}
        // onMouseLeave={() => handleMouseLeave()}
      >
        {category}
      </S.MyPageTab.TabLayer>
      <S.MyPageTab.SubtabLayer>
        {category === "개인 정보 수정" &&
          (isSubtabVisible ? (
            <SellerSubtabs
              setCurrentSelectedTab={setCurrentSelectedTab}
              handleMouseLeave={handleMouseLeave}
            />
          ) : (
            <></>
          ))}
      </S.MyPageTab.SubtabLayer>
    </S.MyPageTab.Layout>
  );
};

export default MyPageTab;
