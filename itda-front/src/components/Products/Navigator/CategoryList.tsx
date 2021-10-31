import S from "../ProductsStyles";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import useToggle from "hooks/useToggle";
import CategoryService from "./CategoryService";
const CategoryList = () => {
  const [toggleFlag, setToggleFlag] = useToggle();
  const [selectedCategory, setSelectedCategory] = useState("");
  const { categoryData } = CategoryService();

  const handleCategoryListClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    setToggleFlag();
    setSelectedCategory(target.textContent as string);
  };

  const categoryList = categoryData?.map((category: string, idx: number) => (
    <S.CategoryList.List
      key={`category-${idx}`}
      onClick={handleCategoryListClick}
    >
      {category}
    </S.CategoryList.List>
  ));

  return (
    <>
      {selectedCategory && (
        <Redirect to={`/products?category=${selectedCategory}`} />
      )}
      <S.CategoryList.Layer>
        <S.CategoryList.ButtonLayout>
          <S.CategoryList.MenuButton onMouseEnter={setToggleFlag} />
          <S.CategoryList.Text>전체 카테고리</S.CategoryList.Text>
        </S.CategoryList.ButtonLayout>
        {toggleFlag && (
          <S.CategoryList.ListLayout onMouseLeave={setToggleFlag}>
            {categoryList}
          </S.CategoryList.ListLayout>
        )}
      </S.CategoryList.Layer>
    </>
  );
};

export default CategoryList;
