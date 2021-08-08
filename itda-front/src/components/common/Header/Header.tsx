import useToggle from "hooks/useToggle";
import S from "../CommonStyles";
import SideDrawer from "./SideDrawer";
import { useEffect, useState } from "react";
import throttle from "util/throttle";

type THeader = {
  color: string;
};

const Header = ({ color }: THeader) => {
  const [isClicked, setIsClicked] = useToggle(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollFlag, setScrollFlag] = useState(false);

  const updateScroll = () => {
    const { pageYOffset } = window;
    const hide = pageYOffset > 0 && pageYOffset - scrollPosition >= 0;
    setScrollFlag(hide);
    setScrollPosition(pageYOffset);
  };

  const handleScroll = throttle(updateScroll, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const toggleSideDrawer = () => setIsClicked(true);

  return scrollFlag ? (
    <></>
  ) : (
    <S.Header.HeaderLayout>
      <S.Header.HeaderLayer>
        <S.Header.LeftBlock color={color}>
          <S.Header.Navigation>홈</S.Header.Navigation>
          <S.Header.Navigation>제품 소개</S.Header.Navigation>
          <S.Header.Navigation>브랜드 이야기</S.Header.Navigation>
        </S.Header.LeftBlock>
        <S.Header.LogoBlock>
          <S.Header.ItdaLogo color={color} />
        </S.Header.LogoBlock>
        <S.Header.RightBlock>
          <S.Header.CartButton color={color} onClick={toggleSideDrawer} />
          <S.Header.LoginButton color={color} />
        </S.Header.RightBlock>
      </S.Header.HeaderLayer>
      {isClicked && <SideDrawer setIsClicked={setIsClicked} />}
    </S.Header.HeaderLayout>
  );
};

export default Header;
