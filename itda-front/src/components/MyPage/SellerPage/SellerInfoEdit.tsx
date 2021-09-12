import S from "./SellerInfoStyles";
import ProfileImageUploader from "./ProfileImageUploader";
import ProfileTextForm from "./ProfileTextForm";

const SellerInfoEdit = () => {
  return (
    <S.SellerInfoEdit.Layout>
      <S.SellerInfoEdit.HeaderLayer>
        판매자 정보 수정
      </S.SellerInfoEdit.HeaderLayer>
      <S.SellerInfoEdit.FormLayer>
        <S.SellerInfoEdit.ProfileImageBlock>
          <ProfileImageUploader />
        </S.SellerInfoEdit.ProfileImageBlock>
        <S.SellerInfoEdit.DescriptionBlock>
          <ProfileTextForm />
        </S.SellerInfoEdit.DescriptionBlock>
      </S.SellerInfoEdit.FormLayer>
    </S.SellerInfoEdit.Layout>
  );
};

export default SellerInfoEdit;
