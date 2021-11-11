import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import { userLoginData } from "stores/LoginAtoms";
import { useMutation } from "react-query";
import auth from "util/API/authAPI";
import { ILogin } from "types/LoginTypes";

const LoginService = () => {
  const [loginData, setLoginData] = useRecoilState(userLoginData);

  const history = useHistory();

  const logInMutation = useMutation(
    async (userData: ILogin) => {
      auth.logIn.post.LoginAsUser(userData);
    },
    {
      onSuccess: () => {
        history.push("/");
      },
      onError: () => {
        alert("잘못된 이메일 또는 패스워드를 입력하셨습니다!");
      },
    }
  );

  const handleLogInFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogInButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const userLogInData = {
      email: loginData.email,
      password: loginData.password,
    };

    logInMutation.mutate(userLogInData);
  };

  return { handleLogInFormChange, handleLogInButtonClick };
};

export default LoginService;
