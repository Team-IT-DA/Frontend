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
