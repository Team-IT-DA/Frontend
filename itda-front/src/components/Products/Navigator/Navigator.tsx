import CategoryList from "./CategoryList";
import SearchBar from "./SearchBar";
import S from "../ProductsStyles";
const Navigator = () => {
	return (
		<S.Navigator.Layer>
			<CategoryList />
			<SearchBar />
		</S.Navigator.Layer>
	);
};

export default Navigator;
