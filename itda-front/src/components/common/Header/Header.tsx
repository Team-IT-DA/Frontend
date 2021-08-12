import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useToggle from "hooks/useToggle";
import S from "../CommonStyles";
import SideDrawer from "./SideDrawer";
import useScrollToggle from "hooks/useScrollToggle";

type THeader = {
  color: string;
};

const Header = ({ color }: THeader) => {
  const [isClicked, setIsClicked] = useToggle(false);
  const scrollFlag = useScrollToggle(false);

  const toggleSideDrawer = () => setIsClicked(true);

  return scrollFlag ? (
    <></>
  ) : (
    <S.Header.HeaderLayout>
      <S.Header.HeaderLayer>
        <S.Header.LeftBlock color={color}>
          <S.Header.Navigation>
            <Link to="/">홈</Link>
          </S.Header.Navigation>
          <S.Header.Navigation>
            <Link to="/products">제품 소개</Link>
          </S.Header.Navigation>
          <S.Header.Navigation>
            <Link to="/brandstory">브랜드 이야기</Link>
          </S.Header.Navigation>
        </S.Header.LeftBlock>
        <S.Header.LogoBlock>
          <S.Header.ItdaLogo color={color} />
        </S.Header.LogoBlock>
        <S.Header.RightBlock>
          <S.Header.CartButton color={color} onClick={toggleSideDrawer} />
          <S.Header.LoginButton color={color} />
        </S.Header.RightBlock>
      </S.Header.HeaderLayer>
      {isClicked && (
        <SideDrawer isClicked={isClicked} setIsClicked={setIsClicked} />
      )}
    </S.Header.HeaderLayout>
  );
};

export default Header;
