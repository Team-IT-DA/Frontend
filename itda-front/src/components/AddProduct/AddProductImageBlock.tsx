import { useRecoilState, useSetRecoilState } from "recoil";
import { AiFillCamera } from "react-icons/ai";
import { productPreviewImage, productImage } from "stores/AddProductAtoms";
import { addPhoto } from "util/API/awsStorageAPI";
import S from "./AddProductStyles";

const AddProductImageBox = () => {
  const [previewImg, setPreviewImg] = useRecoilState(productPreviewImage);

  const setProductImage = useSetRecoilState(productImage);

  const uploadS3 = (e: any) => {
    const { isSuccess, fileName } = addPhoto(e.target.files);
    if (isSuccess) {
      setProductImage(`${process.env.REACT_APP_S3_URL}/${fileName}`);
    }

    handlePreviewChange(e);
  };

  const handlePreviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const reader = new FileReader();
    let file = e.target.files[0];

    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreviewImg({ ...previewImg, previewURL: reader.result });
      }
    };

    if (file) reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <S.AddProductImageBlock>
      <S.AddProductImageHolder>
        {previewImg.previewURL && (
          <S.AddProductImg src={previewImg.previewURL} alt="상품 이미지" />
        )}
      </S.AddProductImageHolder>
      <input type="file" accept="image/*" id="add-file" onChange={uploadS3} />
      <S.AddProductInputButton color="primary" aria-label="upload picture">
        <label htmlFor="add-file">
          <AiFillCamera />
        </label>
      </S.AddProductInputButton>
    </S.AddProductImageBlock>
  );
};

export default AddProductImageBox;
