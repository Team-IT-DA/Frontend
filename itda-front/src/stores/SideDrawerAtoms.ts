import { atom } from "recoil";

export const isSideDrawerClicked = atom<undefined | boolean>({
    key: "isSideDrawerClicked",
    default: undefined,
})