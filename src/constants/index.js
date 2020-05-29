import { icons } from "../assets";
import Home from "../pages/home";
import ServicePurchase from "../pages/servicePurchase";

export const menus = [
  {
    id: 1,
    icon: icons.home,
    label: "대시보드",
    route: "/",
    component: Home,
  },
  {
    id: 2,
    icon: icons.messages,
    label: "문의/요청",
    route: "/messages",
    component: Home,
  },
  {
    id: 3,
    icon: icons.cart,
    label: "서비스 구매",
    route: "/cart",
    component: ServicePurchase,
  },
  {
    id: 4,
    icon: icons.checkList,
    label: "승인하기",
    route: "/checkList",
    component: Home,
  },
  {
    id: 5,
    icon: icons.notes,
    label: "요청현황",
    route: "/notes",
    component: Home,
  },
  {
    id: 6,
    icon: icons.download,
    label: "주문내역 조회",
    route: "/download",
    component: Home,
  },
  {
    id: 7,
    icon: "",
    label: "결제내역 조회",
    route: "/blank",
    component: Home,
  },
  {
    id: 8,
    icon: icons.account,
    label: "정보 수정",
    route: "/account",
    component: Home,
  },
  {
    id: 9,
    icon: icons.logout,
    label: "로그아웃",
    route: "/logout",
    component: Home,
  },
];
