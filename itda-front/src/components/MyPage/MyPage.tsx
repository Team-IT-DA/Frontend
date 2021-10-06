import { Route, Switch } from "react-router-dom";
import S from "./MyPageStyles";
import MyReview from "components/MyPage/MyPageReview/MyReview";
import MyPageOrderList from "./MyPageOrderList/MyPageOrderList";
import MyInfoEditBefore from "./MyPageInfo/MyInfoEditBefore";
import MyInfoEditAfter from "./MyPageInfo/MyInfoEditAfter";
import { SellerInfoEdit } from "./SellerPage";
import PrivateRouter from "router/PrivateRouter";
import isPasswordCorrect from "util/isPasswordCorrect";

const MyPage = () => {
  return (
    <>
      <S.MyPage.Layout>
        <Switch>
          <Route exact path="/myPage" component={MyPageOrderList} />
          <Route path="/myPage/orderList" component={MyPageOrderList} />
          <Route path="/myPage/reviews" component={MyReview} />
          <Route path="/myPage/itdaTalk" />
          <Route path="/myPage/myInfoEditBefore" component={MyInfoEditBefore} />
          <Route path="/myPage/myInfoEdit/seller" component={SellerInfoEdit} />
          <PrivateRouter
            path="/myPage/myInfoEdit"
            redirectPath="/myPage/myInfoEditBefore"
            validationFunc={isPasswordCorrect}
            component={MyInfoEditAfter}
          />
        </Switch>
      </S.MyPage.Layout>
    </>
  );
};

export default MyPage;
