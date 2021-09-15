import React from "react";
import { useRecoilState } from "recoil";
import { sellerProfilePreviewImage } from "stores/SellerInfoAtoms";
import S from "./SellerInfoStyles";

const ProfileImageUploader = () => {
  const [previewImage, setPreviewImage] = useRecoilState(
    sellerProfilePreviewImage
  );

  const handlePreviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const reader = new FileReader();
    let file = e.target.files[0];

    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreviewImage({ file: file, previewURL: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <S.ProfileImageUploader.Layout>
      <S.ProfileImageUploader.ImageHolder>
        {!previewImage.previewURL ? (
          <S.ProfileImageUploader.PreviewImageText>
            프로필 이미지를 설정해주세요.
          </S.ProfileImageUploader.PreviewImageText>
        ) : (
          <S.ProfileImageUploader.PreviewImage
            src={previewImage.previewURL}
            alt="프로필 이미지"
          />
        )}
      </S.ProfileImageUploader.ImageHolder>
      <S.ProfileImageUploader.ImageUploadInput
        type="file"
        accept="image/*"
        onChange={handlePreviewChange}
      />
    </S.ProfileImageUploader.Layout>
  );
};

export default ProfileImageUploader;
