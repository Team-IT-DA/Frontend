import { atom } from "recoil";
import { ISignUp, IValidation } from "types/SignUpTypes";

export const signUpData = atom<ISignUp>({
  key: "",
  default: {},
});

export const signUpErrorData = atom<IValidation>({
  key: "",
  default: {},
});
