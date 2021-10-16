import { atom } from "recoil";
import { ISignUp, IValidation } from "types/SignUpTypes";

export const signUpData = atom<ISignUp>({
  key: "firstSignUpData",
  default: { name: "", email: "", telephone: 0, password: "", password2: "" },
});

export const signUpErrorData = atom<IValidation>({
  key: "firstSignUpErrorData",
  default: { name: "", email: "", telephone: "", password: "", password2: "" },
});
