import S from "../ProductsStyles";
import { useState } from "react";
import useToggle from "hooks/useToggle";
const CategoryList = () => {
	const [toggleFlag, setToggleFlag] = useToggle();
	const [selectedCategory, setSelectedCategory] = useState("");
	const handleCategoryListClick = (event: React.MouseEvent) => {
		const target = event.target as HTMLElement;
		setToggleFlag();
		setSelectedCategory(target.textContent as string);
	};

	const list = [
		"채소",
		"과일/견과/쌀",
		"수산/해산/건어물",
		"정육/계란",
		"면/양념/오일",
		"음료/우유/커피/차",
		"베이커리/치즈/델리",
		"간식/과자/떡",
	].map((v, i) => (
		<S.CategoryList.List
			key={`category-${i}`}
			onClick={handleCategoryListClick}
		>
			{v}
		</S.CategoryList.List>
	));

	return (
		<S.CategoryList.Layer>
			<S.CategoryList.ButtonLayout>
				<S.CategoryList.MenuButton onMouseEnter={setToggleFlag} />
				<S.CategoryList.Text>전체 카테고리</S.CategoryList.Text>
			</S.CategoryList.ButtonLayout>
			{toggleFlag && (
				<S.CategoryList.ListLayout onMouseLeave={setToggleFlag}>
					{list}
				</S.CategoryList.ListLayout>
			)}
		</S.CategoryList.Layer>
	);
};

export default CategoryList;
