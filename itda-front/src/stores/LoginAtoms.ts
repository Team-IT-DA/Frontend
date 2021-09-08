import { atom } from "recoil";

export const isLoggedIn = atom({
  key: "isLoggedIn",
  default: false,
});
