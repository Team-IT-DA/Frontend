import SellerSubtabs from "./SellerSubtabs";
import S from "../MyPageStyles";

interface IMyPageTabProps {
  category: string;
  isSubtabVisible: boolean;
  setIsSubtabVisible: (param: boolean) => void;
  currentSelectedTab: string;
  setCurrentSelectedTab: (tabName: string) => void;
  handleTabClick: (tabName: string) => void;
}

const MyPageTab = ({
  category,
  isSubtabVisible,
  setIsSubtabVisible,
  currentSelectedTab,
  setCurrentSelectedTab,
  handleTabClick,
}: IMyPageTabProps) => {
  const handleMouseEnter = () => {
    if (category === "개인 정보 수정") {
      setIsSubtabVisible(true);
    }
  };

  // todo: 하위탭에 마우스가 올라왔는지도 확인해야 함.
  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsSubtabVisible(false);
    }, 1000);
  };

  return (
    <S.MyPageTab.Layout>
      <S.MyPageTab.TabLayer
        category={category}
        currentSelectedTab={currentSelectedTab}
        onClick={() => handleTabClick(category)}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        {category}
      </S.MyPageTab.TabLayer>
      <S.MyPageTab.SubtabLayer>
        {category === "개인 정보 수정" &&
          (isSubtabVisible ? (
            <SellerSubtabs setCurrentSelectedTab={setCurrentSelectedTab} />
          ) : (
            <></>
          ))}
      </S.MyPageTab.SubtabLayer>
    </S.MyPageTab.Layout>
  );
};

export default MyPageTab;
