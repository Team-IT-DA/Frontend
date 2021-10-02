import S from "./AddProductStyles";
import AddProductSelectBox from "./AddProductSelectBox";
import AddProductTextField from "./AddProductTextField";
import { useEffect } from "react";
import { productAPI } from "util/API/productAPI";
import { categoryList } from "stores/ProductListAtoms";
import { useRecoilState } from "recoil";
import { useQuery } from "react-query";

const AddProductSelectLayer = () => {
  const [categories, setCategories] = useRecoilState(categoryList);

  const { data, isLoading } = useQuery(
    "categories",
    productAPI.category.get.getCategoryList
  );
  console.log("here", isLoading);

  return (
    <S.AddProductSelectBoxHolder>
      <S.AddProductSelectBox>
        <div>
          {isLoading ? (
            <>loading..</>
          ) : (
            <AddProductSelectBox
              label="카테고리"
              name="mainProductCategory"
              options={data?.data.categories}
            />
          )}
        </div>
        <div>
          <AddProductSelectBox
            label="원산지"
            name="origin"
            options={["제주도", "대구", "광주", "부산", "강원도"]}
          />
        </div>
        <div>
          <AddProductSelectBox
            label="포장 타입"
            name="packagingType"
            options={["박스", "비닐", "얼음팩"]}
          />
        </div>
      </S.AddProductSelectBox>
      <AddProductTextField name="account" label="계좌번호" />
    </S.AddProductSelectBoxHolder>
  );
};

export default AddProductSelectLayer;
