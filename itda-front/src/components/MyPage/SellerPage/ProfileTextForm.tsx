import S from "./SellerInfoStyles";
import theme from "styles/theme";
import ColorButton from "components/common/Atoms/ColorButton";

const ProfileTextForm = () => {
  return (
    <S.ProfileTextForm.Layout>
      <S.ProfileTextForm.ProfileTextbox
        id="outlined-multiline-static"
        multiline
        rows={10}
        placeholder="판매자님을 소개하는 한마디를 적어주세요."
        variant="outlined"
      />
      <S.ProfileTextForm.ButtonLayer>
        <ColorButton
          width="200px"
          height="40px"
          baseColor={theme.colors.gray.light}
        >
          취소
        </ColorButton>
        <ColorButton
          width="200px"
          height="40px"
          baseColor={theme.colors.navy.normal}
        >
          확인
        </ColorButton>
      </S.ProfileTextForm.ButtonLayer>
    </S.ProfileTextForm.Layout>
  );
};

export default ProfileTextForm;
