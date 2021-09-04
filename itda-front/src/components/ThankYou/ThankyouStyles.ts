import styled from "styled-components";

const S = {
  ThankyouLayout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1050px;
    margin: 3rem auto;
    h3 {
      font-weight: normal;
      color: ${({ theme }) => theme.colors.gray.normal};
    }
  `,

  ThankyouMessageLayer: styled.div``,

  OrderLayer: styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.colors.gray.x_light};
    width: 100%;
    padding: 1rem;
    font-weight: bold;
  `,

  OrderLayerTitle: styled.div`
    margin: 0.8rem 0;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: bold;
  `,

  OrderItemBlock: styled.div`
    display: flex;
    margin-bottom: 1rem;
  `,

  OrderItemImg: styled.img`
    width: 200px;
    height: 150px;
    margin-right: 3rem;
  `,

  OrderItemDescription: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 0;
    span {
      display: block;
    }
  `,

  OrderItemTitle: styled.span`
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.l};
  `,

  OrderItemTotalPrice: styled.div`
    display: flex;
    justify-content: flex-end;
    font-weight: bold;
  `,

  PaymentLayer: styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.colors.gray.x_light};
    border-bottom: none;
    width: 100%;
    font-weight: bold;
    dl {
      margin: 0.3rem;
    }

    dt {
      width: 100px;
    }
  `,

  PaymentLayerTitle: styled.div`
    margin: 0.8rem 0;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: bold;
  `,

  PaymentItemBlock: styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray.x_light};
    padding: 1rem;
  `,
};

export default S;
