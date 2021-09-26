import MyPageTab from "components/MyPage/MyPageTab/MyPageTab";
import S from "../MyPageStyles";

interface IMyPageTabsProps {
  isSeller: boolean;
  isSubtabVisible: boolean;
  setIsSubtabVisible: (param: boolean) => void;
  setCurrentSelectedSubtab: (tabName: string) => void;
}

const MyPageTabs = ({
  isSeller,
  isSubtabVisible,
  setIsSubtabVisible,
  setCurrentSelectedSubtab,
}: IMyPageTabsProps) => {
  const customerTabs = ["주문 내역", "상품 후기", "잇다톡", "개인 정보 수정"];
  const sellerTabs = [
    "주문 내역",
    "상품 후기",
    "잇다톡",
    "개인 정보 수정",
    "등록 상품 조회",
  ];

  return (
    <S.MyPageTabs.Layout>
      <S.MyPageTabs.Layer>
        {(isSeller ? sellerTabs : customerTabs).map((tab, index) => (
          <MyPageTab
            key={`tabName-${index}`}
            isSeller={isSeller}
            category={tab}
            isSubtabVisible={isSubtabVisible}
            setIsSubtabVisible={setIsSubtabVisible}
            setCurrentSelectedSubtab={setCurrentSelectedSubtab}
          />
        ))}
      </S.MyPageTabs.Layer>
    </S.MyPageTabs.Layout>
  );
};

export default MyPageTabs;
