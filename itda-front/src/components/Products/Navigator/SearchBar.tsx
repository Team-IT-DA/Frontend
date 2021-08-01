import S from "../ProductsStyles";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
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
	const [searchCriteria, setSearchCriteria] = useState("");
	const [searchTerm, setSearchTerm] = useState("");

	const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setSearchCriteria(event.target.value as string);
	};
	const handleInputChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setSearchTerm(event.target.value as string);
	};

	return (
		<S.SearchBar.Layer>
			<FormControl className={classes.formControl}>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={searchCriteria}
					onChange={handleSelectChange}
				>
					<MenuItem value={"PRODUCT"}>제품명</MenuItem>
					<MenuItem value={"SELLER"}>판매자</MenuItem>
				</Select>
			</FormControl>
			<S.SearchBar.InputLayer>
				<S.SearchBar.Input
					placeholder={"검색어를 입력해주세요."}
					autoComplete="off"
					value={searchTerm}
					onChange={handleInputChange}
				/>

				<S.SearchBar.SearchButton />
			</S.SearchBar.InputLayer>
		</S.SearchBar.Layer>
	);
};

export default SearchBar;
