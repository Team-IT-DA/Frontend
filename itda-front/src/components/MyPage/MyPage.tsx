import { useState } from "react";
import { useRecoilValue } from "recoil";
import { Link, Route } from "react-router-dom";
import S from "./MyPageStyles";
import Header from "components/common/Header";
import MyPageTabs from "components/MyPage/MyPageTab/MyPageTabs";
import MyReview from "components/MyPage/MyPageReview/MyReview";
import MyPageOrderList from "./MyPageOrderList/MyPageOrderList";
import MyInfoEditBefore from "./MyPageInfo/MyInfoEditBefore";
import MyInfoEditAfter from "./MyPageInfo/MyInfoEditAfter";
import { SellerInfoEdit } from "./SellerPage";
import { currentSelectedTab, currentSelectedSubtab } from "stores/MyPageAtoms";
import { isLoggedIn } from "stores/LoginAtoms";

const MyPage = () => {
  const currentSelectedTabState = useRecoilValue(currentSelectedTab);
  const currentSelectedSubtabState = useRecoilValue(currentSelectedSubtab);
  //임시로 만든 로그인 상태: true => 기본정보수정 페이지, 판매자 페이지 보여짐
  const isLoggedInState = useRecoilValue(isLoggedIn);
  //임시로 만든 판매자 식별 상태 => 판매자용 화면/탭 보기: true
  const [isSeller, setIsSeller] = useState(true);

  return (
    <>
      <S.MyPage.Layout>
        {/* <S.MyPage.HeaderLayout>
          <Header />
        </S.MyPage.HeaderLayout>
        <S.MyPage.MainLayout>
          <S.MyPage.SideTabLayout>
            <MyPageTabs isSeller={isSeller} />
          </S.MyPage.SideTabLayout>
          <S.MyPage.ContentLayout>
            <S.MyPage.ContentLayer>
              {currentSelectedTabState === "주문 내역" && <MyPageOrderList />}
              {currentSelectedTabState === "상품 후기" && <MyReview />}
              {currentSelectedTabState === "잇다톡"}
              {currentSelectedTabState === "개인 정보 수정" &&
                (!isLoggedInState ? (
                  <MyInfoEditBefore />
                ) : currentSelectedSubtabState === "기본정보" ? (
                  <MyInfoEditAfter />
                ) : (
                  <SellerInfoEdit />
                ))}
              {currentSelectedTabState === "등록 상품 조회" && (
                <>등록된 상품 목록 보여주기</>
              )}
            </S.MyPage.ContentLayer>
          </S.MyPage.ContentLayout>
        </S.MyPage.MainLayout> */}
        <Route path="/myPage/orderList" component={MyPageOrderList} />
        <Route path="/myPage/reviews" component={MyReview} />
        <Route path="/myPage/itdaTalk" />
        <Route path="/myPage/myInfoEdit" component={MyInfoEditBefore} />
      </S.MyPage.Layout>
    </>
  );
};

export default MyPage;
