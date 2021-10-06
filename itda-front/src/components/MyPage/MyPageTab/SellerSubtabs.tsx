import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import S from "../MyPageStyles";
import { currentSelectedTab, currentSelectedSubtab } from "stores/MyPageAtoms";

interface ISellerSubtabsProps {
  handleMouseLeaveSubTab: () => void;
  handleMouseEnterSubtab: () => void;
}

type TPath = {
  [index: string]: string;
};

const SellerSubtabs = ({
  handleMouseLeaveSubTab,
  handleMouseEnterSubtab,
}: ISellerSubtabsProps) => {
  const setCurrentSelectedTab = useSetRecoilState(currentSelectedTab);
  const setCurrentSelectedSubtabState = useSetRecoilState(
    currentSelectedSubtab
  );
  const subtabTitles = ["기본정보", "판매자 정보"];

  const path: TPath = {
    기본정보: "",
    "판매자 정보": "/seller",
  };

  const getPath = (tab: string) => {
    let base = "/myPage/myInfoEdit";
    return (base += path[tab]);
  };

  const handleSubtabClick = (tabName: string) => {
    if (tabName === "기본정보") {
      setCurrentSelectedTab("개인 정보 수정");
      setCurrentSelectedSubtabState("기본정보");
    }
    if (tabName === "판매자 정보") {
      setCurrentSelectedTab("개인 정보 수정");
      setCurrentSelectedSubtabState("판매자 정보");
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
          <Link to={getPath(subtab)}>{subtab} </Link>
        </S.SellerSubtabs.Subtab>
      ))}
    </S.SellerSubtabs.Layout>
  );
};

export default SellerSubtabs;
