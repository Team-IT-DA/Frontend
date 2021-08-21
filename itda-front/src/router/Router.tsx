import Home from "components/Home";
import BrandStory from "components/BrandStory/BrandStory";
import Login from "components/Login";
import MyPage from "components/MyPage";
import Products from "components/Products";
import ProductDetail from "components/ProductDetail";
import AddProduct from "components/AddProduct";
import SignUp from "components/SignUp";
import ShoppingCart from "components/ShoppingCart";
import ThankYou from "components/ThankYou";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import SignUpCompletePage from "components/SignUp/SignUpCompletePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/brandstory" component={BrandStory}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/myPage" component={MyPage}></Route>
        <Route path="/products" component={Products}></Route>
        <Route path="/product/:productId" component={ProductDetail}></Route>
        <Route path="/addProduct" component={AddProduct}></Route>
        <Route path="/cart" component={ShoppingCart}></Route>
        <Route path="/signUp" component={SignUp}></Route>
        <Route path="/signUpComplete" component={SignUpCompletePage}></Route>
        <Route path="/thankYou" component={ThankYou}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
