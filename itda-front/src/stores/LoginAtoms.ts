import { atom } from "recoil";
import { ILogin } from "types/LoginTypes";

export const isLoggedIn = atom({
  key: "isLoggedIn",
  default: true,
});

export const userLoginData = atom<ILogin>({
  key: "userLoginData",
  default: {
    email: "",
    password: "",
  },
});

//지금은 임의로 판매자를 isSeller(MyPage.tsx)라는 상태로 구분하고 있는데, 로그인이 완료되면 유저 정보에서 role: seller(혹은 buyer) 를 백엔드에서 받아야 할 것 같아요.
