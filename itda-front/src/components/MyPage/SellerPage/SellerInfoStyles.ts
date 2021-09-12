import styled from "styled-components";

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
      width: 50%;
      border: 1px solid red;
    `,

    DescriptionBlock: styled.div`
      width: 50%;
      border: 1px solid green;
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
      border: 1px solid ${({ theme }) => theme.colors.gray.normal};
      width: 300px;
      height: 350px;
      display: flex;
      align-items: center;
      justify-content: center;
    `,

    PreviewImageText: styled.p`
      font-size: 1rem;
    `,

    PreviewImage: styled.img`
      width: 100%;
      height: 100%;
    `,

    ImageUploadInput: styled.input`
      margin: 1rem;
    `,
  },
};

export default S;
