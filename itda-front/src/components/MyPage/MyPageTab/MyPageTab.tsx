import { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import S from "../MyPageStyles";
import SellerSubtabs from "./SellerSubtabs";
import { currentSelectedTab } from "stores/MyPageAtoms";

interface IMyPageTabProps {
  isSeller: boolean;
  category: string;
  setCurrentSelectedSubtab: (tabName: string) => void;
}

const MyPageTab = ({
  isSeller,
  category,
  setCurrentSelectedSubtab,
}: IMyPageTabProps) => {
  const [isSubtabVisible, setIsSubtabVisible] = useState(false);
  const [currentSelectedTabState, setCurrentSelectedTab] =
    useRecoilState(currentSelectedTab);
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

  const handleTabClick = (tabName: string) => {
    setCurrentSelectedTab(tabName);
  };

  return (
    <S.MyPageTab.Layout>
      <S.MyPageTab.TabLayer
        category={category}
        currentSelectedTab={currentSelectedTabState}
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
