import styled from "styled-components";
import { ReactComponent as hamburgerIcon } from "images/hamburger.svg";
import { ReactComponent as searchIcon } from "images/search.svg";

const S = {
  Products: {
    HeaderLayout: styled.div`
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 99;
      background: ${({ theme }) => theme.colors.white};
      box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.colors.gray.extraLight};
      backdrop-filter: blur(4px);
    `,
    HeaderLayer: styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(4px);
    `,
    MainLayout: styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 10rem;
    `,
  },
  ProductList: {
    Layout: styled.div``,
    Layer: styled.div`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
    `,
    Block: styled.div`
      margin: 20px;
    `,
    CountLayer: styled.div`
      display: flex;
      align-items: center;
      padding-left: 1rem;
      height: 4rem;
    `,
  },
  Navigator: {
    Layer: styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 0.5rem 0;
    `,
  },

  SearchBar: {
    Layer: styled.div`
      display: flex;
      align-items: center;
      margin-left: 32rem;
    `,
    InputLayer: styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      height: 2.5rem;
      width: 25rem;
      border: ${({ theme }) => theme.colors.gray.extraLight} 1px solid;
      border-radius: 10px;
      background: ${({ theme }) => theme.colors.gray.extraLight};
      color: ${({ theme }) => theme.colors.black};
      font-size: 14px;
      cursor: pointer;
    `,
    Input: styled.input`
      padding: 1rem;
      height: 100%;
      width: 100%;
      border: none;
      background: none;
    `,
    SearchButton: styled(searchIcon)`
      margin-left: 1rem;
    `,
    DropDownList: styled.li`
      padding: 10px 0;
      cursor: pointer;

      :hover {
        text-decoration: underline;
      }
    `,
  },
  CategoryList: {
    ButtonLayout: styled.div`
      display: flex;
      align-items: center;
    `,
    Layer: styled.div`
      position: relative;
    `,
    Text: styled.div`
      display: flex;
      align-items: center;
      padding: 10px;
    `,

    List: styled.li`
      padding: 10px 20px;
      cursor: pointer;

      :hover {
        background-color: ${({ theme }) => theme.colors.gray.extraLight};
        color: ${({ theme }) => theme.colors.mint.normal};
      }
    `,
    ListLayout: styled.ul`
      position: absolute;
      top: 3.2rem;
      padding: 0;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.colors.gray.extraLight};
    `,

    MenuButton: styled(hamburgerIcon)`
      cursor: pointer;
      margin-bottom: 4px;
    `,
  },
};

export default S;
