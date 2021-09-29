import { useState } from "react";
import { useRecoilValue } from "recoil";
import { Route, Switch } from "react-router-dom";
import S from "./MyPageStyles";
import MyReview from "components/MyPage/MyPageReview/MyReview";
import MyPageOrderList from "./MyPageOrderList/MyPageOrderList";
import MyInfoEditBefore from "./MyPageInfo/MyInfoEditBefore";
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
        <Switch>
          <Route exact path="/myPage" component={MyPageOrderList} />
          <Route path="/myPage/orderList" component={MyPageOrderList} />
          <Route path="/myPage/reviews" component={MyReview} />
          <Route path="/myPage/itdaTalk" />
          <Route path="/myPage/myInfoEdit" component={MyInfoEditBefore} />
        </Switch>
      </S.MyPage.Layout>
    </>
  );
};

export default MyPage;
