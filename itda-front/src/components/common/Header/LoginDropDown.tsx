import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isLoggedIn } from "stores/LoginAtoms";
import S from "../CommonStyles";
import { useHistory } from "react-router";

type TLoginDropDownProp = {
  // ref?: React.MutableRefObject<null | HTMLDivElement>;
  ref: any;
  className: string;
};

const LoginDropDown = React.forwardRef(
  ({ className }: TLoginDropDownProp, ref) => {
    const [loggedInByUser, setLoggedInByUser] = useRecoilState(isLoggedIn);
    const loggedInMenu = ["마이페이지", "로그아웃"];
    const loggedOutMenu = ["로그인", "회원가입"];

    const history = useHistory();

    const handleLogoutButtonClick = () => {
      setLoggedInByUser(false);
      localStorage.clear();
      history.push("/login");
    };

    return (
      <S.LoginDropDown.DropDownLayout ref={ref}>
        <S.LoginDropDown.DropDownLayer className={className}>
          {loggedInByUser
            ? loggedInMenu.map((menuName: string, index: number) => (
                <LoginDropDownMenu
                  handleLogoutButtonClick={handleLogoutButtonClick}
                  key={`menuName-${index}`}
                  name={menuName}
                />
              ))
            : loggedOutMenu.map((menuName: string, index: number) => (
                <LoginDropDownMenu key={`menuName-${index}`} name={menuName} />
              ))}
        </S.LoginDropDown.DropDownLayer>
      </S.LoginDropDown.DropDownLayout>
    );
  }
);

type TLoginDropDownMenuProp = {
  name: string;
  handleLogoutButtonClick?: () => void;
};

const LoginDropDownMenu = ({
  name,
  handleLogoutButtonClick,
}: TLoginDropDownMenuProp) => {
  return (
    <S.LoginDropDown.DropDownMenuLayout>
      {name === "마이페이지" && <a href="/myPage">{name}</a>}
      {name === "로그아웃" && (
        <span onClick={handleLogoutButtonClick}>{name}</span>
      )}
      {name === "로그인" && <a href="/login">{name}</a>}
      {name === "회원가입" && <a href="/signUp">{name}</a>}
    </S.LoginDropDown.DropDownMenuLayout>
  );
};

export default LoginDropDown;
