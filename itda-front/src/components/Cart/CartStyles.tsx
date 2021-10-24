import styled from "styled-components";
import { GrDeliver } from "react-icons/gr";
const S = {
  Cart: {
    Layout: styled.div`
      overflow-x: hidden;
    `,
    ModalLayout: styled.div`
      display: flex;
      justify-content: center;
    `,
    CartHeaderLayout: styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 6rem;
      border: 1px solid ${({ theme }) => theme.colors.gray.xx_light};
      background: ${({ theme }) => theme.colors.white};
      box-shadow: 0px 1px 1px 0px ${({ theme }) => theme.colors.gray.xx_light};
      // backdrop-filter: blur(4px); //SideDrawer 위로 겹쳐지는 문제 해결을 위해서 주석처리.
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
      z-index: -1;
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
      padding-bottom: 1rem;
    `,
  },
  CartProduct: {
    HeaderLayout: styled.div`
      display: flex;
      align-items: center;
      padding: 1rem;
    `,
    HeaderTextLayer: styled.button`
      display: flex;
      align-items: center;
      padding: 0.5rem;
      font-weight: bold;
      background-color: white;
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
  },

  AddressFormModal: {
    Wrapper: styled.div`
      display: flex;
      z-index: 1;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100%;
      height: 100vh;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
    `,
    Layout: styled.div`
      z-index: 2;
      width: 800px;
      height: 600px;
      background-color: ${({ theme }) => theme.colors.blue.xx_light};
      border: 1px solid ${({ theme }) => theme.colors.gray.light};
      border-radius: 10px;
      position: absolute;
    `,
    Layer: styled.div`
      display: flex;
      align-items: center;
      padding: 10px 0;
    `,
    CancelLayer: styled.div`
      position: absolute;
      right: 10px;
    `,
    Header: styled.header``,
    Main: styled.main`
      padding: 20px 100px;
    `,
    Title: styled.div`
      display: flex;
      position: relative;
      justify-content: center;
      padding: 10px 0px;
      font-size: 1.7rem;
      font-weight: bold;
      background-color: ${({ theme }) => theme.colors.navy.normal};
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      color: ${({ theme }) => theme.colors.white};
    `,

    SubTitle: styled.div`
      display: flex;
      align-items: center;
      padding-right: 20px;
      width: 10rem;
    `,
  },

  AddressSelection: {
    Layout: styled.div`
      display: flex;
    `,
  },
  LastAddressSelection: {
    Layout: styled.div`
      display: flex;
    `,
  },

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
  AddressSearchForm: {
    LineLayer: styled.div`
      display: flex;
      align-items: center;
      padding-bottom: 10px;
    `,

    SearchButton: styled.button`
      height: 2.5rem;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.colors.mint.normal};
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.mint.normal};
      font-size: ${({ theme }) => theme.fontSizes.small};
    `,

    BottomLayer: styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 50px 0px;
    `,
  },
};

export default S;
