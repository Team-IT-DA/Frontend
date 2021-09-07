import S from "../CommonStyles";

const LoginDropDown = () => {
  const loggedInMenu = ["마이페이지", "로그아웃"];
  const loggedOutMenu = ["로그인", "회원가입"];

  return (
    <S.LoginDropDown.DropDownLayout>
      {loggedInMenu.map((menuName: string) => (
        <LoginDropDownMenu name={menuName} />
      ))}
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
