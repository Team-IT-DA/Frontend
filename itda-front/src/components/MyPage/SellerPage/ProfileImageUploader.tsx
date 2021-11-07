import React, {useState} from "react";
import { useSetRecoilState } from "recoil";
import { sellerProfileImage } from "stores/SellerInfoAtoms";
import { addPhoto } from "util/API/awsStorageAPI";
import S from "./SellerInfoStyles";

const ProfileImageUploader = () => {
  const setSellerProfileImage = useSetRecoilState(sellerProfileImage)
  const [previewImage, setPreviewImage] = useState({file:''});

  const uploadS3 = (e: any) => {
    const { isSuccess, fileName} = addPhoto(e.target.files);
    if(isSuccess) {
      setSellerProfileImage({file:`${process.env.REACT_APP_S3_URL}/${fileName}`})
      setPreviewImage({file:`${process.env.REACT_APP_S3_URL}/${fileName}`})
    }
  }

  return (
    <S.ProfileImageUploader.Layout>
      <S.ProfileImageUploader.ImageHolder>
        {!previewImage.file ? (
          <S.ProfileImageUploader.PreviewImageText>
            프로필 이미지를 설정해주세요.
          </S.ProfileImageUploader.PreviewImageText>
        ) : (
          <S.ProfileImageUploader.PreviewImage
            src={previewImage.file}
            alt="프로필 이미지"
          />
        )}
      </S.ProfileImageUploader.ImageHolder>
      <S.ProfileImageUploader.ImageUploadInput
        type="file"
        accept="image/*"
        onChange={uploadS3}
      />
    </S.ProfileImageUploader.Layout>
  );
};

export default ProfileImageUploader;
