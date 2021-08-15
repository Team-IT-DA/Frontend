import styled from "styled-components";

const S = {
  AddProductLayout: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem auto;
    width: 1080px;
    border: 1px solid black;
  `,

  AddProductFormLayer: styled.div`
    display: flex;
    margin: 0 auto;
  `,
  AddProductImageBlock: styled.div``,

  AddProductImageHolder: styled.div`
    border: 1px solid green;
    width: 250px;
    height: 300px;
  `,
  AddProductImg: styled.img`
    width: 100%;
    height: 100%;
  `,

  AddProductFormBlock: styled.div`
    display: flex;
    flex-direction: column;
  `,

  AddProductGridBox: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    height: fit-content;
    grid-gap: 2rem;
    div {
      display: flex;
      flex-direction: column;
    }
    input {
      width: 300px;
    }
  `,
  AddProductSelectBox: styled.div`
    display: flex;
    margin-top: 1rem;
    gap: 3rem;
  `,

  AddProductEditorLayer: styled.div``,
};

export default S;
