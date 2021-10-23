import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import { signUpData, signUpErrorData } from "stores/SignupAtoms";
import { IValidation, ISignUp } from "types/SignUpTypes";

const SignUpService = (validate: (args: IValidation) => IValidation) => {
  const [signUpInfo, setSignUpInfo] = useRecoilState<IValidation>(signUpData);
  const [signUpError, setError] = useRecoilState<IValidation>(signUpErrorData);

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

    console.log("리턴되나?");
  };

  return {
    handleSignUpFormChange,
    signUpInfo,
    signUpError,
    handleSignUpButtonClick,
  };
};

export default SignUpService;
