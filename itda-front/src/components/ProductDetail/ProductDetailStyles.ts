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

    DetailBuyBlock: styled.div`
      display: flex;
      justify-content: space-between;
      margin: 1rem 0 0 0;
    `,

    DetailTotalPriceDiv: styled.div`
      font-size: 0.8rem;
      margin-top: 1.1rem;
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
      color: #666;
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
    `,

    TabToggleLayer: styled.div`
      display: flex;
      border: 1px solid #eee;
      width: 100%;
      font-size: 1.5rem;
      &:hover {
        cursor: pointer;
      }
    `,

    InformationTabBlock: styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 6rem;
      background: #e2e2e2;
    `,

    ReviewTabBlock: styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 6rem;
    `,
  },
};

export default S;
