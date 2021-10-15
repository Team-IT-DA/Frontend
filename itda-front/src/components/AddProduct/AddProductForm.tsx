import { addProductinputNames } from "util/constants";
import S from "./AddProductStyles";
import TinyEditor from "components/common/TinyEditor";
import AddProductTextField from "./AddProductTextField";
import AddProductImageBlock from "./AddProductImageBlock";
import AddProductSubmitLayer from "./AddProductSubmitLayer";
import AddProductSelectLayer from "./AddProductSelectLayer";

const AddProductForm = () => {
  return (
    <S.AddProductLayout>
      <h1>상품추가</h1>
      <S.AddProductFormLayer>
        <AddProductImageBlock />
        <S.AddProductFormBlock>
          <S.AddProductTextFieldBox>
            {addProductinputNames.map((input) => (
              <AddProductTextField {...input} key={input.name} />
            ))}
          </S.AddProductTextFieldBox>
          <AddProductSelectLayer />
        </S.AddProductFormBlock>
      </S.AddProductFormLayer>
      <S.AddProductEditorLayer>
        <h1>에디터 영역</h1>
        <TinyEditor />
      </S.AddProductEditorLayer>
      <AddProductSubmitLayer />
    </S.AddProductLayout>
  );
};

export default AddProductForm;
