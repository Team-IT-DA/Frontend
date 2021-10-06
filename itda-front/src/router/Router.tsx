import Home from "components/Home";
import BrandStory from "components/BrandStory/BrandStory";
import Login from "components/Login";
import MyPage from "components/MyPage";
import Products from "components/Products";
import ProductDetail from "components/ProductDetail";
import AddProduct from "components/AddProduct";
import SignUp from "components/SignUp";
import Cart from "components/Cart";
import ThankYou from "components/ThankYou";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import SignUpCompletePage from "components/SignUp/SignUpCompletePage";
import MyReview from "components/MyPage/MyPageReview/MyReview";
import NaverCallback from "components/Login/NaverCallback";
import KakaoCallback from "components/Login/KakaoCallback";
import PrivateRouter from "./PrivateRouter";
import NotFound from "./NotFound";
import isLogin from "util/isLogin";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/brandstory" component={BrandStory} />
        <Route path="/login" component={Login} />
        <Route path="/products" component={Products} />
        <Route path="/product/:productId" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/signUpComplete" component={SignUpCompletePage} />
        <Route path="/JennyTest" component={MyReview} />
        <Route exact path="/naver/callback" component={NaverCallback} />
        <Route exact path="/kakao/callback" component={KakaoCallback} />
        <PrivateRouter
          path="/myPage"
          redirectPath="/login"
          validationFunc={isLogin}
          component={MyPage}
        />
        <PrivateRouter
          path="/addProduct"
          redirectPath="/login"
          validationFunc={isLogin}
          component={AddProduct}
        />
        <PrivateRouter
          path="/thankYou"
          redirectPath="/login"
          validationFunc={isLogin}
          component={ThankYou}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
