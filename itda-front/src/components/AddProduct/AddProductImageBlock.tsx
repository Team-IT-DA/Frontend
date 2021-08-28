import { useRecoilState } from "recoil";
import { productPreviewImage } from "stores/AddProductAtoms";
import S from "./AddProductStyles";

const AddProductImageBox = () => {
  const [previewImg, setPreviewImg] = useRecoilState(productPreviewImage);

  const handlePreviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const reader = new FileReader();
    let file = e.target.files[0];

    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreviewImg({ file: file, previewURL: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <S.AddProductImageBlock>
      <S.AddProductImageHolder>
        {previewImg.previewURL && (
          <S.AddProductImg src={previewImg.previewURL} alt="상품 이미지" />
        )}
      </S.AddProductImageHolder>
      <input type="file" accept="image/*" onChange={handlePreviewChange} />
    </S.AddProductImageBlock>
  );
};

export default AddProductImageBox;
