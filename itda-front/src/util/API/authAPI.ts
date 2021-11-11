import { instanceWithoutAuth } from "./index";
import { ISignUp } from "types/SignUpTypes";
import { ILogin } from "types/LoginTypes";

const signUpAsUser = (userData: ISignUp) =>
  instanceWithoutAuth.post("/join", userData);

const LoginAsUser = (userData: ILogin) =>
  instanceWithoutAuth.post("/login", userData);

const verifyEmail = (email: string) =>
  instanceWithoutAuth.get(`/duplicateEmail?email=${email}`);

const auth = {
  signUp: {
    get: { verifyEmail },
    post: { signUpAsUser, LoginAsUser },
  },
};

export default auth;
