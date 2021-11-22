import { instanceWithoutAuth } from "./index";
import { ISignUp } from "types/SignUpTypes";
import { ILogin } from "types/LoginTypes";

const signUpAsUser = (userData: ISignUp) =>
  instanceWithoutAuth.post("/join", userData);

const LoginAsUser = (userData: ILogin) =>
  instanceWithoutAuth.post("/login", userData).then((res) => {
    localStorage.setItem("token", JSON.stringify(res.data.token));
    localStorage.setItem("name", JSON.stringify(res.data.name));
  });

const verifyEmail = (email: string) =>
  instanceWithoutAuth.get(`/duplicateEmail?email=${email}`);

const auth = {
  signUp: {
    get: { verifyEmail },
    post: { signUpAsUser },
  },
  logIn: { post: { LoginAsUser } },
};

export default auth;
