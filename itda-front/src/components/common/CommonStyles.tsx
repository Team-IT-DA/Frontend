import styled from "styled-components";

const S = {
  Header: {
    leftDiv: styled.div``,
  },
  ProductCard: {
    CardContainer: styled.div`
      display: flex;
      flex-direction: column;
      width: 150px;
      height: 170px;
      border: 1px solid black;
    `,

    ProductImageHolder: styled.div`
      width: 150px;
      height: 100px;
      overflow: hidden;
    `,

    ProductImage: styled.img`
      width: 100%;
      height: 100%;
      &:hover {
        transform: scale(1.05);
        transition: 0.2s ease-in-out;
      }
    `,

    ProductDescription: styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,

    ProductDescriptionTop: styled.div`
      font-size: 15px;
      height: 40px;
    `,
  },
};

export default S;

//layout => layer => block
