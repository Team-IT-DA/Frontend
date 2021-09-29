import { Route, Switch } from "react-router-dom";
import S from "./MyPageStyles";
import MyReview from "components/MyPage/MyPageReview/MyReview";
import MyPageOrderList from "./MyPageOrderList/MyPageOrderList";
import MyInfoEditBefore from "./MyPageInfo/MyInfoEditBefore";

const MyPage = () => {
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
