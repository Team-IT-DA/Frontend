import { MutableRefObject } from "react";
import { useRecoilState } from "recoil";
import { isLoggedIn } from "stores/LoginAtoms";
import S from "../CommonStyles";

type TLoginDropDownProp = {
  // ref?: React.MutableRefObject<null | HTMLDivElement>;
  ref: any;
  className: string;
};

const LoginDropDown = ({ ref, className }: TLoginDropDownProp) => {
  const loggedInByUser = useRecoilState(isLoggedIn);
  console.log(loggedInByUser);
  const loggedInMenu = ["마이페이지", "로그아웃"];
  const loggedOutMenu = ["로그인", "회원가입"];

  return (
    <S.LoginDropDown.DropDownLayout ref={ref}>
      <S.LoginDropDown.DropDownLayer className={className}>
        {loggedInByUser[0]
          ? loggedInMenu.map((menuName: string) => (
              <LoginDropDownMenu name={menuName} />
            ))
          : loggedOutMenu.map((menuName: string) => (
              <LoginDropDownMenu name={menuName} />
            ))}
      </S.LoginDropDown.DropDownLayer>
    </S.LoginDropDown.DropDownLayout>
  );
};

type TLoginDropDownMenuProp = {
  name: string;
};

const LoginDropDownMenu = ({ name }: TLoginDropDownMenuProp) => {
  return (
    <S.LoginDropDown.DropDownMenuLayout>
      {name === "마이페이지" && <a href="/myPage">{name}</a>}
      {name === "로그아웃" && <a href="/login">{name}</a>}
      {name === "로그인" && <a href="/login">{name}</a>}
      {name === "회원가입" && <a href="/signUp">{name}</a>}
    </S.LoginDropDown.DropDownMenuLayout>
  );
};

export default LoginDropDown;
