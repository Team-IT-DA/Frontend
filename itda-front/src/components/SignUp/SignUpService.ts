import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import { signUpData, signUpErrorData } from "stores/SignupAtoms";
import { IValidation, ISignUp } from "types/SignUpTypes";
import { useMutation } from "react-query";
import auth from "util/API/authAPI";

const SignUpService = (validate: (args: IValidation) => IValidation) => {
  const [signUpInfo, setSignUpInfo] = useRecoilState<IValidation>(signUpData);
  const [signUpError, setError] = useRecoilState<IValidation>(signUpErrorData);

  const history = useHistory();

  const signUpMutation = useMutation(
    async (userData: ISignUp) => {
      auth.signUp.post.signUpAsUser(userData);
    },
    {
      onSuccess: () => {
        alert("회원가입이 완료되었습니다. 서비스 사용을 위해 로그인해주세요");
        history.push("/login");
      },
    }
  );

  const checkEmail = async () => {
    if (signUpError.email) return;

    const isEmailValid = await auth.signUp.get.verifyEmail(
      signUpInfo.email as string
    );
    console.log(isEmailValid);
  };

  const handleSignUpFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSignUpInfo({ ...signUpInfo, [name]: value });
  };

  const handleSignUpButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const validateError = validate(signUpInfo);
    setError(validateError);

    if (Object.keys(validateError).length !== 0) {
      return;
    }

    const userSignUpData = {
      name: signUpInfo.name as string,
      email: signUpInfo.email as string,
      password: signUpInfo.password as string,
      telephone: signUpInfo.telephone as number,
      authCode: signUpInfo.authCode as string | undefined,
    };

    signUpMutation.mutate(userSignUpData);
  };

  return {
    handleSignUpFormChange,
    signUpInfo,
    signUpError,
    handleSignUpButtonClick,
    checkEmail,
  };
};

export default SignUpService;
