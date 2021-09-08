import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import S from "../CommonStyles";
import SideDrawer from "./SideDrawer";
import LoginDropDown from "./LoginDropDown";
import useScrollToggle from "hooks/useScrollToggle";

type THeader = {
  isSticky?: boolean;
};

interface MutableRefObject<T> {
  current: T;
}

const Header = ({ isSticky = false }: THeader) => {
  const dropDownRef = useRef<MutableRefObject<null | HTMLDivElement>>(null);
  const [isSideDrawerClicked, setIsSideDrawerClicked] = useState<
    undefined | boolean
  >(undefined);
  const [isDropDownActive, setIsDropDownActive] = useState<boolean>(false);
  const scrollFlag = useScrollToggle(false);

  const checkPageName = () => {
    const splitedURL = window.location.href.split("/");
    return splitedURL[splitedURL.length - 1] === "" ? true : false;
  };
  const isHomePage = checkPageName();
  const color = isHomePage ? "#ffffff" : "#555555";

  const toggleSideDrawer = () => {
    setIsSideDrawerClicked(true);
  };

  const handleLoginButtonClick = () => {
    setIsDropDownActive(!isDropDownActive);
  };

  useEffect(() => {
    console.log(dropDownRef.current);
  }, [dropDownRef]);

  useEffect(() => {
    const pageClickEvent = (e: MouseEvent) => {
      if (dropDownRef.current !== null) {
        setIsDropDownActive(!isDropDownActive);
      }
    };

    if (isDropDownActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isDropDownActive]);

  return isSticky ? (
    scrollFlag ? (
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
          isSideDrawerClicked={isSideDrawerClicked}
          setIsSideDrawerClicked={setIsSideDrawerClicked}
        />
      </S.Header.HeaderLayout>
    )
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
        isSideDrawerClicked={isSideDrawerClicked}
        setIsSideDrawerClicked={setIsSideDrawerClicked}
      />
    </S.Header.HeaderLayout>
  );
};

export default Header;
