import styled from "styled-components";
import { ReactComponent as hamburgerIcon } from "images/hamburger.svg";
import { ReactComponent as searchIcon } from "images/search.svg";
import { ReactComponent as cancelIcon } from "images/cancel.svg";

const S = {
	ProductList: {},
	Navigator: {
		Layer: styled.div`
			display: flex;
			align-items: center;
			justify-content: space-between;
		`,
	},

	SearchBar: {
		Layer: styled.div`
			display: flex;
			align-items: center;
		`,
		InputLayer: styled.div`
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 1rem;
			height: 2.5rem;
			width: 20rem;

			border: #f7f7f7 1px solid;
			border-radius: 10px;
			background: #f7f7f7;
			color: #000;
			font-size: 14px;
			cursor: pointer;
		`,
		Input: styled.input`
			padding: 1rem;
			height: 100%;
			width: 100%;
			border: none;
			background: none;
		`,
		SearchButton: styled(searchIcon)`
			margin-left: 1rem;
		`,
		CancelButton: styled(cancelIcon)``,

		DropDownList: styled.li`
			padding: 10px 0;
			cursor: pointer;

			:hover {
				text-decoration: underline;
			}
		`,
	},
	CategoryList: {
		ButtonLayout: styled.div`
			position: relative;
			display: flex;
			align-items: center;
		`,
		Layer: styled.div``,
		Text: styled.div`
			display: flex;
			align-items: center;
			padding: 10px;
		`,

		List: styled.li`
			padding: 10px 0;
			cursor: pointer;
			padding: 10px 20px;

			:hover {
				background-color: #f2f2f2;
				color: #046d9a;
			}
		`,
		ListLayout: styled.ul`
			position: absolute;
			top: 3rem;
			padding: 0;
			background-color: #fefefe;
			border-radius: 5px;
			border: 1px #f2f2f2 solid;
		`,
		MenuButton: styled(hamburgerIcon)`
			cursor: pointer;
			margin-bottom: 4px;
		`,
	},
};

export default S;
