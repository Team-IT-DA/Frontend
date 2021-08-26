import styled from "styled-components";

const S = {
  MyPage: {
    Layout: styled.div`
      overflow-x: hidden;
    `,

    HeaderLayout: styled.div`
      width: 100%;
      top: 0;
      box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.colors.gray.extraLight};
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    MainLayout: styled.div``,

    SideTabLayout: styled.div``,

    ContentLayout: styled.div``,
  },
};

export default S;
