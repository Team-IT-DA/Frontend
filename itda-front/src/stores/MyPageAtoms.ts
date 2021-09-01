import { atom } from "recoil";

export const myPageCategories = atom({
  key: "myPageCategories",
  default: [
    { category: "주문 내역", component: "MyPageOrderList", isSelected: true },
    { category: "상품 후기", component: "MyReview", isSelected: false },
    { category: "잇다톡", component: "", isSelected: false },
    {
      category: "개인 정보 수정",
      component: "",
      isSelected: false,
    },
  ],
});
