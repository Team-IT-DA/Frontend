import { IReview } from "types/ProductDetailTypes";
import { IProductDetail } from "types/ProductDetailTypes";

export const reviewMock: IReview[] = [
  {
    id: 1,
    writer: {
      name: "cro**",
      imgUrl: "https://ifh.cc/g/gFFnTG.jpg",
    },
    date: "2021-07-22",
    image: [],
    contents: "신선하고 맛있어요!",
  },
  {
    id: 2,
    writer: {
      name: "cro**",
      imgUrl: "https://ifh.cc/g/gFFnTG.jpg",
    },
    date: "2021-07-22",
    image: ["https://ifh.cc/g/gFFnTG.jpg"],
    contents: "신선하고 맛있어요!78463234",
  },
  {
    id: 3,
    writer: {
      name: "cro**",
      imgUrl: "https://ifh.cc/g/gFFnTG.jpg",
    },
    date: "2021-07-22",
    image: ["https://ifh.cc/g/gFFnTG.jpg", "https://ifh.cc/g/gFFnTG.jpg"],
    contents: "신선하고 맛있어요!444444444444444444",
  },
  {
    id: 4,
    writer: {
      name: "cro**",
      imgUrl: "https://ifh.cc/g/gFFnTG.jpg",
    },
    date: "2021-07-22",
    image: [],
    contents: "신선하고 맛있어요!765765",
  },
  {
    id: 5,
    writer: {
      name: "cro**",
      imgUrl: "https://ifh.cc/g/gFFnTG.jpg",
    },
    date: "2021-07-22",
    image: [],
    contents: "신선하고 맛있어요!7897",
  },
  {
    id: 6,
    writer: {
      name: "cro**",
      imgUrl: "https://ifh.cc/g/gFFnTG.jpg",
    },
    date: "2021-07-22",
    image: ["https://ifh.cc/g/gFFnTG.jpg", "https://ifh.cc/g/gFFnTG.jpg"],
    contents: "신선하고 맛있어요1212121212!",
  },
  {
    id: 7,
    writer: {
      name: "cro**",
      imgUrl: "https://ifh.cc/g/gFFnTG.jpg",
    },
    date: "2021-07-22",
    image: ["https://ifh.cc/g/gFFnTG.jpg", "https://ifh.cc/g/gFFnTG.jpg"],
    contents: "신선하고 맛있어요!23423423",
  },
  {
    id: 8,
    writer: {
      name: "cro**",
      imgUrl: "https://ifh.cc/g/gFFnTG.jpg",
    },
    date: "2021-07-22",
    image: ["https://ifh.cc/g/gFFnTG.jpg", "https://ifh.cc/g/gFFnTG.jpg"],
    contents: "신선하고 맛있어요!",
  },
  {
    id: 9,
    writer: {
      name: "cro**",
      imgUrl: "https://ifh.cc/g/gFFnTG.jpg",
    },
    date: "2021-07-22",
    image: [],
    contents: "신선하고 맛있어요22!",
  },
  {
    id: 10,
    writer: {
      name: "cro**",
      imgUrl: "https://ifh.cc/g/gFFnTG.jpg",
    },
    date: "2021-07-22",
    image: ["https://ifh.cc/g/gFFnTG.jpg", "https://ifh.cc/g/gFFnTG.jpg"],
    contents: "신선하고 맛있어요333!",
  },
  {
    id: 11,
    writer: {
      name: "cro**",
      imgUrl: "https://ifh.cc/g/gFFnTG.jpg",
    },
    date: "2021-07-22",
    image: ["https://ifh.cc/g/gFFnTG.jpg", "https://ifh.cc/g/gFFnTG.jpg"],
    contents: "신선하고 맛있어요4444!",
  },
  {
    id: 12,
    writer: {
      name: "cro**",
      imgUrl: "https://ifh.cc/g/gFFnTG.jpg",
    },
    date: "2021-07-22",
    image: [],
    contents: "신선하고 맛있어요!",
  },
  {
    id: 13,
    writer: {
      name: "cro**",
      imgUrl: "https://ifh.cc/g/gFFnTG.jpg",
    },
    date: "2021-07-22",
    image: [],
    contents: "신선하고 맛있어요5555!",
  },
];

export const mockProduct: IProductDetail = {
  id: 1,
  name: "흙당근",
  imageUrl:
    "https://freshleader.co.kr/data/item/1f8_1060_0008/thumb-1f8_1_450x520.jpg",
  description: "제주 바다 바람을 품은 친환경 흙당근",
  price: 19900,
  salesUnit: "1봉지",
  weight: "500g (2~4개입)",
  deliveryFee: 2500,
  deliveryFeeCondition: "30,000원 이상 무료 배송",
  origin: "제주",
  packagingType: "냉장/종이포장",
  detailDescription: "###제목<br><p>내용들어가고 어쩌고</p>",
  notice: "주의하세요",
  seller: {
    id: 1,
    name: "박크롱",
    imageUrl:
      "http://img.segye.com/content/image/2021/07/29/20210729513138.jpg",
    description: "신선한 제품을 재배합니다.",
  },
};
