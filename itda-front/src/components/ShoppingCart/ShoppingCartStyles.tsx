import styled from "styled-components";
import { GrDeliver } from "react-icons/gr";
const S = {
  ShoppingCart: {
    CartHeaderLayout: styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 6rem;
      border: 1px solid ${({ theme }) => theme.colors.gray.extraLight};
      background: ${({ theme }) => theme.colors.white};
      box-shadow: 0px 1px 1px 0px ${({ theme }) => theme.colors.gray.extraLight};
      backdrop-filter: blur(4px);
      font-weight: bold;
      font-size: 1.7rem;
    `,
    HeaderLayout: styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(4px);
    `,

    MainLayout: styled.div`
      display: flex;
      justify-content: center;
    `,
    ContainerLayer: styled.div`
      display: grid;
      grid-template-columns: 2fr 1fr;
      justify-items: center;
      width: 80rem;
    `,
    ProductsLayer: styled.div`
      width: 100%;
    `,
    SummaryLayer: styled.div`
      border-left: 1px solid ${({ theme }) => theme.colors.gray.light};
      padding: 1rem 2rem;
    `,
    DivisionLine: styled.div`
      width: 100%;
      border-bottom: 2px dashed ${({ theme }) => theme.colors.gray.light};
    `,
  },
  AddressInfo: {
    Layout: styled.div`
      padding: 2rem 0;
    `,
    Title: styled.div`
      font-size: 1.3rem;
      font-weight: bold;
      padding-bottom: 1rem;
    `,
    Contents: styled.div`
      padding-bottom: 2rem;
    `,
  },
  ShoppingCartProduct: {
    HeaderLayout: styled.div`
      display: flex;
      align-items: center;
      padding: 1rem;
    `,
    HeaderTextLayer: styled.div`
      display: flex;
      align-items: center;
      padding-left: 0.5rem;
      font-weight: bold;
    `,
    ContentsLayout: styled.div`
      display: flex;
      align-items: center;
      width: 100%;
      border-top: 1px solid ${({ theme }) => theme.colors.gray.light};
      padding: 2rem;
    `,
    Image: styled.img`
      width: 100px;
      margin-left: 20px;
    `,
    ProductNameLayer: styled.div`
      width: 24rem;
      font-weight: bold;
      padding: 0 2rem;
      margin-right: 1rem;
    `,
    ProductPrice: styled.span`
      text-align: right;
      padding-right: 2rem;
      width: 10rem;
      font-weight: bold;
    `,
    SelectOption: styled.span``,
  },

  AddressFormModal: {},
  PaymentInfo: {
    Layout: styled.div`
      padding: 2rem 0;
    `,
    Title: styled.div`
      font-size: 1.3rem;
      font-weight: bold;
      padding-bottom: 1rem;
    `,
    SubTitle: styled.div`
      font-weight: bold;
      padding-bottom: 1rem;
    `,
    SubTitleBlock: styled.ul``,
    ContentsBlock: styled.div``,
    ContentsLayer: styled.div`
      display: flex;
      justify-content: space-between;
      padding: 0 0.3rem;
    `,
    Contents: styled.div`
      text-align: right;
      padding-bottom: 1rem;
    `,
    Button: styled.button`
      color: white;
      background-color: ${({ theme }) => theme.colors.mint.normal};
      height: 4rem;
      width: 18rem;
      border-radius: 0.4rem;
    `,
  },
};

export default S;
