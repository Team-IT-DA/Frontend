import { useRecoilState } from "recoil";
import { sellerProfileText } from "stores/SellerInfoAtoms";
import React, { useState, useEffect } from "react";
import S from "./SellerInfoStyles";
import theme from "styles/theme";
import ColorButton from "components/common/Atoms/ColorButton";

const ProfileTextForm = () => {
  // 서버에서 유저정보 가져올 때 가져올 것!
  const [profileText, setProfileText] = useRecoilState(sellerProfileText);
  const [isEditMode, setIsEditMode] = useState(false);

  const updateProfileText = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.value);
    const inputText = e.target.value;
    setProfileText({ text: inputText });
  };

  const handleConfirmButtonClick = () => {
    setIsEditMode(false);
  };

  const handleCancelButtonClick = () => {
    setIsEditMode(false);
  };

  const handleReviseButtonClick = () => {
    setIsEditMode(true);
  };

  useEffect(() => {}, [isEditMode]);

  return (
    <S.ProfileTextForm.Layout>
      {isEditMode ? (
        <>
          <S.ProfileTextForm.ProfileTextbox
            id="outlined-multiline-static"
            value={profileText.text}
            multiline
            rows={10}
            placeholder="판매자님을 소개하는 한마디를 적어주세요."
            variant="outlined"
            onChange={(e) => updateProfileText(e)}
          />
          <S.ProfileTextForm.ButtonLayer>
            <ColorButton
              width="200px"
              height="40px"
              baseColor={theme.colors.gray.light}
              onClickButton={handleCancelButtonClick}
            >
              취소
            </ColorButton>
            <ColorButton
              width="200px"
              height="40px"
              baseColor={theme.colors.navy.normal}
              onClickButton={handleConfirmButtonClick}
            >
              확인
            </ColorButton>
          </S.ProfileTextForm.ButtonLayer>
        </>
      ) : (
        <>
          <S.ProfileTextForm.ProfileText>
            {`"${profileText.text}"`}
          </S.ProfileTextForm.ProfileText>
          <S.ProfileTextForm.ButtonLayer>
            <ColorButton
              width="200px"
              height="40px"
              baseColor={theme.colors.navy.normal}
              onClickButton={handleReviseButtonClick}
            >
              수정
            </ColorButton>
          </S.ProfileTextForm.ButtonLayer>
        </>
      )}
    </S.ProfileTextForm.Layout>
  );
};

export default ProfileTextForm;
