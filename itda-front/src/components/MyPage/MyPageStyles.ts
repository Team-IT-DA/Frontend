import styled from "styled-components";

const S = {
  MyPage: {
    Layout: styled.div`
      overflow-x: hidden;
    `,

    HeaderLayout: styled.div`
      width: 100%;
      top: 0;
      box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.colors.gray.extraLight};
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    MainLayout: styled.div``,

    SideTabLayout: styled.div``,

    ContentLayout: styled.div``,
  },

  MyReview: {
    Layout: styled.div`
      width: 100%;
      height: 100%;
      border: 1px solid black;
    `,

    Layer: styled.div`
      width: 80%;
      height: fit-content;
      margin: 1.5rem auto;
    `,

    ReviewInfoBox: styled.div`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 1rem;
      font-weight: bold;
    `,

    ReviewProductDiv: styled.div`
      display: flex;
      width: 35%;
      align-items: center;
    `,

    ReviewContentBox: styled.div`
      display: flex;
      justify-content: space-between;
      width: 100%;
    `,

    ReviewImageHolder: styled.div`
      width: 33%;
      height: 300px;
    `,

    ReviewImage: styled.img`
      width: 100%;
      height: 100%;
    `,

    ReviewDescription: styled.div`
      width: 60%;
      padding: 2rem 0;
      border-top: 1px solid ${({ theme }) => theme.colors.gray.light};
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
    `,

    ProductImageHolder: styled.div`
      width: 25%;
      height: 60px;
      margin-right: 1rem;
    `,

    ProductImage: styled.img`
      width: 100%;
      height: 100%;
    `,

    ProductName: styled.span``,

    WrittenDateDiv: styled.span`
      display: flex;
      align-items: center;
    `,
  },
};

export default S;
