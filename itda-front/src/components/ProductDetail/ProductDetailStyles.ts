import styled from "styled-components";

const S = {
  ProductDetailWall: styled.div`
    width: 100%;
    height: fit-content;
  `,

  ProductInfo: {
    InfoLayout: styled.div`
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      padding: 1.3rem 0 0 0;
      width: 1050px;
      height: fit-content;
    `,

    ProductDetailLayer: styled.div`
      width: 100%;
      display: flex;
      justify-content: space-between;
    `,

    ImageBlock: styled.img`
      width: 27rem;
      height: 34.5rem;
    `,

    DetailBlock: styled.div`
      display: flex;
      flex-direction: column;
      /* width: 35rem; */
      justify-content: space-between;
    `,

    DetailName: styled.span`
      font-weight: bold;
      font-size: 1.5rem;
      margin: 0.6rem 0;
    `,
    DetailShortInfo: styled.span`
      color: #999999;
      font-size: 0.8rem;
    `,
    DetailPrice: styled.span`
      font-weight: bold;
      font-size: 1.75rem;
      padding: 1.8rem 0 1.5rem 0;
      border-bottom: 1px solid #f4f4f4;
    `,

    DetailProductInfo: styled.ul`
      padding: 0;
      color: #666;
      font-size: 0.87rem;
      li {
        padding: 1.1rem 0;
        border-bottom: 1px solid #f4f4f4;
        &:nth-child(1) {
          dl {
            &:first-child {
              margin-bottom: 1rem;
            }
          }
        }
      }
      dl {
        margin: 0;
        display: flex;

        dt {
          width: 9rem;
        }
        dd {
          margin: 0;
          width: 25rem;
        }
      }
    `,
    DetailCountDiv: styled.div`
      display: flex;
      width: 6rem;
      height: 2rem;
      border: 1px solid #dddfe1;
      border-radius: 4px;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
      }
      button {
        width: 3rem;
        color: #333;
        background: none;
        font-weight: bold;
      }
    `,
    DetailBuyBlock: styled.div`
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      margin: 2.1rem 0 0 0;
      font-size: 0.8rem;
    `,

    DetailPriceDiv: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 11.8rem;
    `,

    DetailTotalPrice: styled.span`
      font-weight: bold;
      font-size: 1.5rem;
      margin-left: 0.2rem;
    `,

    ProductPaymentLayer: styled.div`
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: fit-content;
      margin-top: 1.5rem;
    `,

    SellerBlock: styled.div`
      display: flex;
      width: 27rem;
    `,

    SellerImageWrapper: styled.div`
      width: 7rem;
      height: 7rem;
      border: 1px solid #999999;
      border-radius: 70%;
      overflow: hidden;
    `,

    SellerImage: styled.img`
      width: 7rem;
      height: 7rem;
      padding: 0.4rem;
    `,

    SellerInfo: styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 1rem;
    `,

    SellerName: styled.span`
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      font-weight: bold;
    `,

    SellerDetail: styled.span`
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.gray.dark};
    `,

    PaymentBlock: styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `,

    AddToCartButton: styled.button`
      width: 20rem;
      height: 3rem;
      color: white;
      font-weight: bold;
      border-radius: 4px;
      background: ${({ theme }) => theme.colors.skyBlue.normal};
    `,
    BuyButton: styled.button`
      width: 20rem;
      height: 3rem;
      color: white;
      font-weight: bold;
      border-radius: 4px;
      background: ${({ theme }) => theme.colors.navy.light};
    `,
  },
  ProductTab: {
    TabLayout: styled.div`
      display: flex;
      flex-direction: column;
      width: 1050px;
      margin: 5rem auto;
      position: relative;
    `,

    TabToggleLayer: styled.div<{ isSticky: boolean }>`
      display: flex;
      ${({ isSticky }) =>
        isSticky
          ? `
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
      `
          : ""};
      border-top: 1px solid ${({ theme }) => theme.colors.gray.x_light};
      width: 100%;
      font-size: 1.5rem;
      &:hover {
        cursor: pointer;
      }
    `,

    InformationTabBlock: styled.div<{ isInfo: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 6rem;
      border-left: 1px solid ${({ theme }) => theme.colors.gray.x_light};
      ${({ isInfo, theme }) =>
        isInfo ? `background:${theme.colors.white}` : `background: #e2e2e2;`}
    `,

    ReviewTabBlock: styled.div<{ isInfo: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 6rem;
      border-right: 1px solid ${({ theme }) => theme.colors.gray.x_light};
      ${({ isInfo, theme }) =>
        isInfo
          ? `background: #e2e2e2;`
          : `background: ${theme.colors.white};
      `}
    `,
  },

  ReviewTab: {
    ReviewTabLayout: styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,

    ReviewTitleLayer: styled.div`
      font-size: ${({ theme }) => theme.fontSizes.titleSize};
      font-weight: bold;
      margin-bottom: 1.5rem;
    `,

    ReviewCountLayer: styled.div`
      font-weight: bold;
      font-size: ${({ theme }) => theme.fontSizes.xl};
    `,

    ReviewPhotoTabLayer: styled.div<{ isPhoto: boolean }>`
      display: flex;
      align-items: center;

      font-size: ${({ theme }) => theme.fontSizes.l};
      margin: 1.5rem 0 1rem 0;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10rem;
        height: 4rem;
        border: 1px solid #cccccc;
        &:hover {
          cursor: pointer;
        }
        &:nth-child(1) {
          color: ${({ isPhoto, theme }) =>
            isPhoto ? `1px solid ${theme.colors.gray.x_light}` : "black"};
          border-bottom: ${({ isPhoto, theme }) =>
            isPhoto ? `1px solid ${theme.colors.gray.x_light}` : "none"};
        }
        &:nth-child(2) {
          color: ${({ isPhoto, theme }) =>
            isPhoto ? "black" : `1px solid ${theme.colors.gray.x_light}`};
          border-bottom: ${({ isPhoto, theme }) =>
            isPhoto ? "none" : `1px solid ${theme.colors.gray.x_light}`};
        }
      }
    `,

    ReviewListLayer: styled.div``,

    ReviewListBlock: styled.ul``,

    SingleReviewLayout: styled.ul`
      display: flex;
      flex-direction: column;
      padding: 1rem 0;
      border-bottom: 1px solid #eee;
    `,

    ReviewerLayer: styled.div`
      display: flex;
      align-items: center;
    `,

    ReviewerImageBlock: styled.img`
      width: 4rem;
      height: 4rem;
      border-radius: 70%;
      border: 1px solid ${({ theme }) => theme.colors.gray.dark};
      margin-right: 1rem;
    `,
    ReviewerNameBlock: styled.div`
      font-weight: bold;
      margin-bottom: 0.1rem;
    `,

    ReviewDateBlock: styled.div`
      color: ${({ theme }) => theme.colors.gray.light};
    `,
    ReviewImageLayer: styled.div`
      display: flex;
      width: 12rem;
      height: 8rem;
      margin: 1.5rem 0 0.5rem 0;
    `,
    ReviewImage: styled.img`
      width: 100%;
      height: 100%;
    `,
    ReviewContentLayer: styled.div`
      margin-bottom: 1rem;
    `,

    PaginationLayer: styled.ul`
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
    `,

    PaginationNumber: styled.li<{ isClicked: boolean }>`
      margin-right: 0.5rem;
      color: ${({ theme, isClicked }) =>
        isClicked ? theme.colors.black : "#e2e2e2"};
      &:hover {
        color: ${({ theme }) => theme.colors.navy.normal};
        cursor: pointer;
      }
    `,
  },

  PhotoModal: {
    ModalWrapper: styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 99;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.6);
    `,
  },
};

export default S;
