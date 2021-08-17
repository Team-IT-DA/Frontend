import { TextField } from "@material-ui/core";
import {
  InputLabel,
  FormControl,
  NativeSelect,
  FormHelperText,
} from "@material-ui/core";
import { inputNames } from "util/constants";
import { useRecoilState } from "recoil";
import { productPreviewImage, addProductInfos } from "stores/AddProductAtoms";
import Header from "components/common/Header";
import S from "./AddProductStyles";

const AddProduct = () => {
  const [previewImg, setPreviewImg] = useRecoilState(productPreviewImage);
  const [productInput, setProductInput] = useRecoilState(addProductInfos);

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

  const handleProductInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductInput({ ...productInput, [name]: value });
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
              {inputNames.map((input) => (
                <div>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    id="outlined-textarea"
                    error={false}
                    label={input.label}
                    type="text"
                    variant="outlined"
                    size="small"
                    onChange={handleProductInputChange}
                    name={input.name}
                  />
                </div>
              ))}
            </S.AddProductGridBox>
            <S.AddProductSelectBoxHolder>
              <S.AddProductSelectBox>
                <div>
                  <FormControl error={false}>
                    <InputLabel shrink={true} htmlFor="name-native-error">
                      원산지
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
                </div>
                <div>
                  <FormControl error={false}>
                    <InputLabel shrink={true} htmlFor="name-native-error">
                      포장 타입
                    </InputLabel>
                    <NativeSelect
                      name="name"
                      inputProps={{
                        id: "name-native-error",
                      }}
                    >
                      <option value="박스">박스</option>
                      <option value="비닐">비닐</option>
                      <option value="얼음팩">얼음팩</option>
                    </NativeSelect>
                    <FormHelperText>Error</FormHelperText>
                  </FormControl>
                </div>
              </S.AddProductSelectBox>
              <div>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  id="outlined-textarea"
                  error={false}
                  label="계좌번호"
                  type="text"
                  variant="outlined"
                  size="small"
                  onChange={handleProductInputChange}
                  name="account"
                />
              </div>
            </S.AddProductSelectBoxHolder>
          </S.AddProductFormBlock>
        </S.AddProductFormLayer>
        <S.AddProductEditorLayer>
          <h1>에디터 영역</h1>
        </S.AddProductEditorLayer>
        <button onClick={() => alert(JSON.stringify(productInput))}>
          SUBMIT
        </button>
      </S.AddProductLayout>
    </>
  );
};

export default AddProduct;
