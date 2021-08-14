import { TextField } from "@material-ui/core";
import S from "./AddProductStyles";

const AddProduct = () => {
  return (
    <S.AddProductLayout>
      <h1>상품추가</h1>
      <S.AddProductFormLayer>
        <S.AddProductImageBlock>
          <S.AddProductImageHolder>
            <S.AddProductImg src="" alt="상품 이미지" />
          </S.AddProductImageHolder>
          <input type="file" />
        </S.AddProductImageBlock>
        <S.AddProductFormBlock>
          <div>
            <TextField
              InputLabelProps={{ shrink: true }}
              id="outlined-name"
              error={false}
              label="상품명"
              type="text"
              variant="outlined"
              size="small"
              name="name"
            />
          </div>
          <div>
            <TextField
              InputLabelProps={{ shrink: true }}
              id="outlined-textarea"
              error={false}
              label="상품 설명"
              type="text"
              variant="outlined"
              size="small"
              name="description"
            />
          </div>
          <div>
            <TextField
              InputLabelProps={{ shrink: true }}
              id="outlined-textarea"
              error={false}
              label="상품 가격"
              type="text"
              variant="outlined"
              size="small"
              name="description"
            />
          </div>
          <div>
            <TextField
              InputLabelProps={{ shrink: true }}
              id="outlined-textarea"
              error={false}
              label="판매 단위"
              type="text"
              variant="outlined"
              size="small"
              name="description"
            />
          </div>
          <div>
            <TextField
              InputLabelProps={{ shrink: true }}
              id="outlined-textarea"
              error={false}
              label="배송비"
              type="text"
              variant="outlined"
              size="small"
              name="description"
            />
          </div>
          <div>
            <TextField
              InputLabelProps={{ shrink: true }}
              id="outlined-textarea"
              error={false}
              label="배송비 추가 조건"
              type="text"
              variant="outlined"
              size="small"
              name="description"
            />
          </div>
          <div>
            <TextField
              InputLabelProps={{ shrink: true }}
              id="outlined-textarea"
              error={false}
              label="중량/용량"
              type="text"
              variant="outlined"
              size="small"
              name="description"
            />
          </div>
          <div>
            <TextField
              InputLabelProps={{ shrink: true }}
              id="outlined-textarea"
              error={false}
              label="안내 사항"
              type="text"
              variant="outlined"
              size="small"
              name="description"
            />
          </div>
        </S.AddProductFormBlock>
      </S.AddProductFormLayer>
      <S.AddProductEditorLayer>
        <h1>에디터 영역</h1>
      </S.AddProductEditorLayer>
    </S.AddProductLayout>
  );
};

export default AddProduct;
