import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

//판매자 정보 수정 페이지와 등록상품조회 페이지의 스타일을 관리합니다.
const S = {
  SellerInfoEdit: {
    Layout: styled.div`
      min-width: 1024px;
      width: 90%;
      height: 100%;
      margin: 0 auto;
    `,

    HeaderLayer: styled.div`
      font-family: "Gowun Batang", sans-serif;
      color: ${({ theme }) => theme.colors.gray.normal};
      font-size: ${({ theme }) => theme.fontSizes.titleSize};
      font-weight: bold;
      margin-bottom: 1.5rem;
      height: 5rem;
    `,

    FormLayer: styled.div`
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    `,

    ProfileImageBlock: styled.div`
      width: 25%;
      height: 500px;
      display: flex;
      align-items: center;
    `,

    DescriptionBlock: styled.div`
      width: 60%;
      height: 500px;
      display: flex;
      align-items: center;
    `,
  },

  ProfileImageUploader: {
    Layout: styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    `,

    ImageHolder: styled.div`
      width: 250px;
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${({ theme }) => theme.colors.gray.normal};
      border-radius: 200px;
    `,

    PreviewImageText: styled.p`
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.gray.normal};
    `,

    PreviewImage: styled.img`
      width: 100%;
      height: 100%;
      border-radius: 200px;
    `,

    ImageUploadInput: styled.input`
      margin: 1rem;
    `,
  },

  ProfileTextForm: {
    Layout: styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    `,

    ProfileTextbox: styled(TextField)`
      width: 500px;
      margin: 0 auto;
    `,

    ButtonLayer: styled.div`
      padding: 1rem;
      & > button {
        font-weight: 350;
        margin: 0.5rem;
      }
    `,
  },
};

export default S;
