import { icons } from "../assets";

export const menus = [
  {
    id: 1,
    icon: icons.home,
    label: "대시보드",
    route: "/",
  },
  {
    id: 2,
    icon: icons.messages,
    label: "문의/요청",
    route: "/messages",
  },
  {
    id: 3,
    icon: icons.cart,
    label: "서비스 구매",
    route: "/purchase",
  },
  {
    id: 4,
    icon: icons.checkList,
    label: "승인하기",
    route: "/checkList",
  },
  {
    id: 5,
    icon: icons.notes,
    label: "요청현황",
    route: "/notes",
  },
  {
    id: 6,
    icon: icons.download,
    label: "주문내역 조회",
    route: "/order-history",
  },
  {
    id: 7,
    icon: "",
    label: "결제내역 조회",
    route: "/payment-history",
  },
  {
    id: 8,
    icon: icons.account,
    label: "정보 수정",
    route: "/account",
  },
  {
    id: 9,
    icon: icons.logout,
    label: "로그아웃",
    route: "/logout",
  },
];
