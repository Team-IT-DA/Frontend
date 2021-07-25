import Home from "./Home";
import Login from "./Login";
import MyPage from "./MyPage";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import AddProduct from "./AddProduct";
import SignUp from "./SignUp";
import ShoppingCart from "./ShoppingCart";
import ThankYou from "./ThankYou";
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
