import { inputNames } from "util/constants";
import S from "./AddProductStyles";
import TinyEditor from "components/common/TinyEditor";
import AddProductTextField from "./AddProductTextField";
import AddProductSelectBox from "./AddProductSelectBox";
import AddProductImageBlock from "./AddProductImageBlock";

const AddProductForm = () => {
  return (
    <S.AddProductLayout>
      <h1>상품추가</h1>
      <S.AddProductFormLayer>
        <AddProductImageBlock />
        <S.AddProductFormBlock>
          <S.AddProductGridBox>
            {inputNames.map((input) => (
              <AddProductTextField {...input} />
            ))}
          </S.AddProductGridBox>
          <S.AddProductSelectBoxHolder>
            <S.AddProductSelectBox>
              <div>
                <AddProductSelectBox
                  label={"원산지"}
                  name="origin"
                  options={["제주도", "대구", "광주"]}
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
        </S.AddProductFormBlock>
      </S.AddProductFormLayer>
      <S.AddProductEditorLayer>
        <h1>에디터 영역</h1>
        <TinyEditor />
      </S.AddProductEditorLayer>
    </S.AddProductLayout>
  );
};

export default AddProductForm;
