import { instanceWithoutAuth } from "./index";
import { ISignUp } from "types/SignUpTypes";

const signUpAsUser = (userData: ISignUp) =>
  instanceWithoutAuth.post("/join", userData);

const verifyEmail = (email: string) =>
  instanceWithoutAuth.get(`/duplicateEmail?email=${email}`);

const auth = {
  signUp: {
    get: { verifyEmail },
    post: { signUpAsUser },
  },
};

export default auth;
