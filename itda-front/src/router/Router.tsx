import Home from "components/Home";
import Login from "components/Login";
import MyPage from "components/MyPage";
import Products from "components/Products";
import ProductDetail from "components/ProductDetail";
import AddProduct from "components/AddProduct";
import SignUp from "components/SignUp";
import ShoppingCart from "components/ShoppingCart";
import ThankYou from "components/ThankYou";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/login" component={Login}></Route>
				<Route exact path="/myPage" component={MyPage}></Route>
				<Route exact path="/products" component={Products}></Route>
				<Route exact path="/products/:id" component={ProductDetail}></Route>
				<Route exact path="/products/new" component={AddProduct}></Route>
				<Route exact path="/cart" component={ShoppingCart}></Route>
				<Route exact path="/signUp" component={SignUp}></Route>
				<Route exact path="/thankYou" component={ThankYou}></Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
