import S from "./AddProductStyles";
import AddProductSelectBox from "./AddProductSelectBox";
import AddProductTextField from "./AddProductTextField";
import { productAPI } from "util/API/productAPI";
import { useQuery } from "react-query";
import LoadingSpinner from "components/common/LoadingSpinner";
const AddProductSelectLayer = () => {
  const { data, isLoading } = useQuery(
    "categories",
    productAPI.category.get.getCategoryList
  );

  return (
    <S.AddProductSelectBoxHolder>
      <S.AddProductSelectBox>
        <div>
          {isLoading ? (
            <LoadingSpinner width={"100px"} />
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
