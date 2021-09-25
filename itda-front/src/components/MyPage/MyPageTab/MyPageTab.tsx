import { useRef } from "react";
import SellerSubtabs from "./SellerSubtabs";
import S from "../MyPageStyles";

interface IMyPageTabProps {
  isSeller: boolean;
  category: string;
  isSubtabVisible: boolean;
  setIsSubtabVisible: (param: boolean) => void;
  currentSelectedTab: string;
  setCurrentSelectedTab: (tabName: string) => void;
  setCurrentSelectedSubtab: (tabName: string) => void;
  handleTabClick: (tabName: string) => void;
}

const MyPageTab = ({
  isSeller,
  category,
  isSubtabVisible,
  setIsSubtabVisible,
  currentSelectedTab,
  setCurrentSelectedTab,
  setCurrentSelectedSubtab,
  handleTabClick,
}: IMyPageTabProps) => {
  const isMouseEnterInSubTab = useRef(false);
  const subtabMouseLeaveHandler = useRef<any>(null);

  const handleMouseEnter = () => {
    if (isSeller && category === "개인 정보 수정") {
      clearTimeout(subtabMouseLeaveHandler.current);
      setIsSubtabVisible(true);
      isMouseEnterInSubTab.current = true;
    } else {
      setIsSubtabVisible(false);
      isMouseEnterInSubTab.current = false;
    }
  };

  const handleMouseLeave = () => {
    if (!isMouseEnterInSubTab.current && isSubtabVisible) {
      setIsSubtabVisible(false);
    }
  };

  const handleMouseLeaveSubTab = () => {
    subtabMouseLeaveHandler.current = setTimeout(() => {
      if (!isMouseEnterInSubTab.current && category === "개인 정보 수정") {
        return;
      } else {
        isMouseEnterInSubTab.current = false;
        setIsSubtabVisible(false);
      }
    }, 500);
  };
  const handleMouseEnterSubtab = () => {
    isMouseEnterInSubTab.current = true;
  };

  return (
    <S.MyPageTab.Layout>
      <S.MyPageTab.TabLayer
        category={category}
        currentSelectedTab={currentSelectedTab}
        onClick={() => handleTabClick(category)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {category}
      </S.MyPageTab.TabLayer>
      <S.MyPageTab.SubtabLayer>
        {category === "개인 정보 수정" &&
          (isSubtabVisible ? (
            <SellerSubtabs
              setCurrentSelectedTab={setCurrentSelectedTab}
              setCurrentSelectedSubtab={setCurrentSelectedSubtab}
              handleMouseLeaveSubTab={handleMouseLeaveSubTab}
              handleMouseEnterSubtab={handleMouseEnterSubtab}
            />
          ) : (
            <></>
          ))}
      </S.MyPageTab.SubtabLayer>
    </S.MyPageTab.Layout>
  );
};

export default MyPageTab;
