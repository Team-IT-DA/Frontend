import { useState } from "react";
import { useRecoilValue } from "recoil";
import S from "./MyPageStyles";
import Header from "components/common/Header";
import MyPageTabs from "components/MyPage/MyPageTab/MyPageTabs";
import MyReview from "components/MyPage/MyPageReview/MyReview";
import MyPageOrderList from "./MyPageOrderList/MyPageOrderList";
import MyInfoEditBefore from "./MyPageInfo/MyInfoEditBefore";
import MyInfoEditAfter from "./MyPageInfo/MyInfoEditAfter";
import { SellerInfoEdit } from "./SellerPage";
import { currentSelectedTab } from "stores/MyPageAtoms";

// todo: 관리해야 할 상태가 너무 많아짐. recoil로 관리할 수 있게 뺄 것.
const MyPage = () => {
  const currentSelectedTabstate = useRecoilValue(currentSelectedTab);
  //임시로 만든 로그인 상태: true => 기본정보수정 페이지, 판매자 페이지 보여짐
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  //임시로 만든 판매자 식별 상태 => 판매자용 화면/탭 보기: true
  const [isSeller, setIsSeller] = useState(true);
  //하위 탭이 보여지는 상태
  const [isSubtabVisible, setIsSubtabVisible] = useState(false);
  const [currentSelectedSubTab, setCurrentSelectedSubtab] =
    useState("기본정보");

  return (
    <>
      <S.MyPage.Layout>
        <S.MyPage.HeaderLayout>
          <Header />
        </S.MyPage.HeaderLayout>
        <S.MyPage.MainLayout>
          <S.MyPage.SideTabLayout>
            <MyPageTabs
              isSeller={isSeller}
              isSubtabVisible={isSubtabVisible}
              setIsSubtabVisible={setIsSubtabVisible}
              setCurrentSelectedSubtab={setCurrentSelectedSubtab}
            />
          </S.MyPage.SideTabLayout>
          <S.MyPage.ContentLayout>
            <S.MyPage.ContentLayer>
              {currentSelectedTabstate === "주문 내역" && <MyPageOrderList />}
              {currentSelectedTabstate === "상품 후기" && <MyReview />}
              {currentSelectedTabstate === "잇다톡"}
              {currentSelectedTabstate === "개인 정보 수정" &&
                (!isLoggedIn ? (
                  <MyInfoEditBefore />
                ) : currentSelectedSubTab === "기본정보" ? (
                  <MyInfoEditAfter />
                ) : (
                  <SellerInfoEdit />
                ))}
              {currentSelectedTabstate === "등록 상품 조회" && (
                <>등록된 상품 목록 보여주기</>
              )}
            </S.MyPage.ContentLayer>
          </S.MyPage.ContentLayout>
        </S.MyPage.MainLayout>
      </S.MyPage.Layout>
    </>
  );
};

export default MyPage;
