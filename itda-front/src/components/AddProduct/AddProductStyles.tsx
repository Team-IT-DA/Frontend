import styled from "styled-components";

const S = {
  AddProductLayout: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem auto;
    width: 1080px;
    h1 {
      color: ${({ theme }) => theme.colors.gray.normal};
      font-family: "Gowun Batang", sans-serif;
    }
  `,
  AddProductTitleFormLayout: styled.div`
    display: flex;
    flex-direction: column;
  `,

  AddProductFormLayer: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  AddProductImageBlock: styled.div``,

  AddProductImageHolder: styled.div`
    border: 1px solid green;
    width: 300px;
    height: 350px;
  `,
  AddProductImg: styled.img`
    width: 100%;
    height: 100%;
  `,

  AddProductFormBlock: styled.div`
    display: flex;
    flex-direction: column;
  `,

  AddProductTextFieldBox: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
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
  AddProductSelectBoxHolder: styled.div`
    display: flex;
    margin-top: 2rem;
    justify-content: space-between;
    input {
      width: 300px;
    }
  `,

  AddProductSelectBox: styled.div`
    display: flex;
    gap: 3rem;
  `,

  AddProductEditorLayer: styled.div``,

  AddProductButtonLayer: styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
  `,
};

export default S;
