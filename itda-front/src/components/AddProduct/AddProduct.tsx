import { TextField } from "@material-ui/core";
import {
  InputLabel,
  FormControl,
  NativeSelect,
  FormHelperText,
} from "@material-ui/core";
import { useRecoilState } from "recoil";
import { productPreviewImage } from "stores/AddProductAtoms";
import Header from "components/common/Header";
import S from "./AddProductStyles";

const AddProduct = () => {
  const [previewImg, setPreviewImg] = useRecoilState(productPreviewImage);

  const handlePreviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const reader = new FileReader();
    let file = e.target.files[0];

    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreviewImg({ file: file, previewURL: reader.result });
      }
      console.log(previewImg.previewURL);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <Header />
      <S.AddProductLayout>
        <h1>상품추가</h1>
        <S.AddProductFormLayer>
          <S.AddProductImageBlock>
            <S.AddProductImageHolder>
              {previewImg.previewURL && (
                <S.AddProductImg
                  src={previewImg.previewURL}
                  alt="상품 이미지"
                />
              )}
            </S.AddProductImageHolder>
            <input
              type="file"
              accept="image/*"
              onChange={handlePreviewChange}
            />
          </S.AddProductImageBlock>
          <S.AddProductFormBlock>
            <S.AddProductGridBox>
              <div>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  id="outlined-textarea"
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
            </S.AddProductGridBox>
            <S.AddProductSelectBox>
              <FormControl error={false}>
                <InputLabel shrink={true} htmlFor="name-native-error">
                  Name
                </InputLabel>
                <NativeSelect
                  name="name"
                  inputProps={{
                    id: "name-native-error",
                  }}
                >
                  <option value="제주도">제주도</option>
                  <option value="대구">대구</option>
                  <option value="광주">광주</option>
                </NativeSelect>
                <FormHelperText>Error</FormHelperText>
              </FormControl>
              <FormControl error={false}>
                <InputLabel shrink={true} htmlFor="name-native-error">
                  Name
                </InputLabel>
                <NativeSelect
                  name="name"
                  inputProps={{
                    id: "name-native-error",
                  }}
                >
                  <option value="제주도">박스</option>
                  <option value="대구">비닐</option>
                  <option value="광주">얼음팩</option>
                </NativeSelect>
                <FormHelperText>Error</FormHelperText>
              </FormControl>
            </S.AddProductSelectBox>
          </S.AddProductFormBlock>
        </S.AddProductFormLayer>
        <S.AddProductEditorLayer>
          <h1>에디터 영역</h1>
        </S.AddProductEditorLayer>
      </S.AddProductLayout>
    </>
  );
};

export default AddProduct;
