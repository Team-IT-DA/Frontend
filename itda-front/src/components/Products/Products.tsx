import Header from "components/common/Header/Header";
import { Redirect } from "react-router-dom";
import Navigator from "./Navigator";
import ProductList from "./ProductList";
import S from "./ProductsStyles";
const Products = () => {
	return (
		<>
			<Header color={"#555555"} />
			<S.Products.Layer>
				<Navigator />
				<ProductList />
			</S.Products.Layer>
		</>
	);
};

export default Products;
