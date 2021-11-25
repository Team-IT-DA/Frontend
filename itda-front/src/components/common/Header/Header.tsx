import { useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import S from "../CommonStyles";
import SideDrawer from "./SideDrawer";
import LoginDropDown from "./LoginDropDown";
import { isSideDrawerClicked } from "stores/SideDrawerAtoms";
import { isLoggedIn } from "stores/LoginAtoms";

interface MutableRefObject<T> {
  current: T;
}

const Header = () => {
  const dropDownRef = useRef<MutableRefObject<null | HTMLDivElement>>(null);
  const [isSideDrawerClickedState, setisSideDrawerClickedState] =
    useRecoilState<any>(isSideDrawerClicked);
  const [isDropDownActive, setIsDropDownActive] = useState<boolean>(false);
  const [logInState, setLoginState] = useRecoilState(isLoggedIn);

  const checkPageName = () => {
    const splitURL = window.location.href.split("/");
    return splitURL[splitURL.length - 1] === "" ? true : false;
  };

  const isHomePage = checkPageName();
  const color = isHomePage ? "#ffffff" : "#555555";

  const toggleSideDrawer = () => {
    setisSideDrawerClickedState(true);
  };

  const handleLoginButtonClick = () => {
    setIsDropDownActive(!isDropDownActive);
  };

  useEffect(() => {
    const pageClickEvent = (e: MouseEvent) => {
      if (dropDownRef.current !== null) {
        setIsDropDownActive(!isDropDownActive);
      }
    };

    const token = localStorage.getItem("token");
    if (token) setLoginState(true);
    else {
      setLoginState(false);
    }

    if (isDropDownActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isDropDownActive]);

  return (
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
          <S.Header.LoginButton
            color={color}
            onClick={handleLoginButtonClick}
          />
        </S.Header.RightBlock>
        <LoginDropDown
          ref={dropDownRef}
          className={`dropdown ${isDropDownActive ? "active" : "inactive"}`}
        />
      </S.Header.HeaderLayer>
      <SideDrawer
        isSideDrawerClicked={isSideDrawerClickedState}
        setIsSideDrawerClicked={setisSideDrawerClickedState}
      />
    </S.Header.HeaderLayout>
  );
};

export default Header;
