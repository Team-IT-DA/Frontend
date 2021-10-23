import { instanceWithoutAuth } from "./index";
import { ISignUp } from "types/SignUpTypes";

const signUpAsUser = (userData: ISignUp) =>
  instanceWithoutAuth.post("/join", userData);

const varifyEmail = () => instanceWithoutAuth.get("/duplicateEmail");

const auth = {
  signUp: {
    get: { varifyEmail },
    post: { signUpAsUser },
  },
};

export default auth;
