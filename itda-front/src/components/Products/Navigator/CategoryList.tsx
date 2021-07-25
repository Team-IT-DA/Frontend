const CategoryList = () => {
	const list = ["채소", "감자", "고구마"].map(v => <li>{v}</li>);

	return (
		<>
			<div>🍔전체 카테고리</div>
			<div>{list}</div>
		</>
	);
};

export default CategoryList;
