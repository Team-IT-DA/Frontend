import S from "../ProductsStyles";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { ESearchCriteria } from "types/enums/searchBar";
const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 100,
		textAlign: "center",
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const SearchBar = () => {
	const classes = useStyles();
	const [searchCriteria, setSearchCriteria] = useState("PRODUCT");
	const [searchInputState, setSearchInputState] = useState("");
	const [searchTerm, setSearchTerm] = useState("");

	const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setSearchCriteria(event.target.value as string);
	};
	const handleInputChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setSearchInputState(event.target.value as string);
	};
	const handleSearchButtonClick = () => setSearchTerm(searchInputState);

	const handleSearchBarKeyEvent = (
		event: React.KeyboardEvent<HTMLDivElement>
	) => event.key === "Enter" && setSearchTerm(searchInputState);

	const getQueryString = () => {
		if (searchCriteria === ESearchCriteria.PRODUCT)
			return `productName=${searchTerm}`;
		else if (searchCriteria === ESearchCriteria.SELLER)
			return `sellerName=${searchTerm}`;
	};
	return (
		<>
			{searchTerm && <Redirect to={`/products?${getQueryString()}`} />}
			<S.SearchBar.Layer>
				<FormControl className={classes.formControl}>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={searchCriteria}
						onChange={handleSelectChange}
					>
						<MenuItem value={ESearchCriteria.PRODUCT}>제품명</MenuItem>
						<MenuItem value={ESearchCriteria.SELLER}>판매자</MenuItem>
					</Select>
				</FormControl>
				<S.SearchBar.InputLayer>
					<S.SearchBar.Input
						placeholder={"검색어를 입력해주세요."}
						autoComplete="off"
						value={searchInputState}
						onChange={handleInputChange}
						onKeyPress={handleSearchBarKeyEvent}
					/>

					<S.SearchBar.SearchButton onClick={handleSearchButtonClick} />
				</S.SearchBar.InputLayer>
			</S.SearchBar.Layer>
		</>
	);
};

export default SearchBar;
