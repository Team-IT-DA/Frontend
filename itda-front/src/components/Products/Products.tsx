import Header from "components/common/Header/Header";
import Navigator from "./Navigator";
import ProductList from "./ProductList";
const Products = () => {
	return (
		<>
			<Header color={'#555555'}/>
			<Navigator />
			<ProductList />
		</>
	);
};

export default Products;
