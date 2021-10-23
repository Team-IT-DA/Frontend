import { atom } from "recoil";
import { ISignUp, IValidation } from "types/SignUpTypes";

export const signUpData = atom<IValidation>({
  key: "firstSignUpData",
  default: {
    name: "",
    email: "",
    telephone: 0,
    password: "",
    password2: "",
    authCode: "",
  },
});

export const signUpErrorData = atom<IValidation>({
  key: "firstSignUpErrorData",
  default: { name: "", email: "", telephone: 0, password: "", password2: "" },
});

export const realSignUp = atom<ISignUp>({
  key: "signUpAsUser",
  default: {
    name: "",
    email: "",
    telephone: 0,
    password: "",
    authCode: "",
  },
});
