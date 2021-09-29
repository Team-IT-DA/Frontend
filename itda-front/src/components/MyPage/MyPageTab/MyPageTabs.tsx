import { Link } from "react-router-dom";
import MyPageTab from "components/MyPage/MyPageTab/MyPageTab";
import S from "../MyPageStyles";

interface IMyPageTabsProps {
  isSeller: boolean;
}

type TPath = {
  [index: string]: string;
};

const MyPageTabs = ({ isSeller }: IMyPageTabsProps) => {
  const customerTabs = ["주문 내역", "상품 후기", "잇다톡", "개인 정보 수정"];
  const sellerTabs = [
    "주문 내역",
    "상품 후기",
    "잇다톡",
    "개인 정보 수정",
    "등록 상품 조회",
  ];
  const path: TPath = {
    "주문 내역": "orderList",
    "상품 후기": "reviews",
    잇다톡: "",
    "개인 정보 수정": "myInfoEdit",
    "등록 상품 조회": "",
  };

  const getPath = (tab: string) => {
    let base = "/myPage/";
    return (base += path[tab]);
  };

  return (
    <S.MyPageTabs.Layout>
      <S.MyPageTabs.Layer>
        {(isSeller ? sellerTabs : customerTabs).map((tab, index) => (
          <Link to={getPath(tab)}>
            <MyPageTab
              key={`tabName-${index}`}
              isSeller={isSeller}
              category={tab}
            />
          </Link>
        ))}
      </S.MyPageTabs.Layer>
    </S.MyPageTabs.Layout>
  );
};

export default MyPageTabs;
