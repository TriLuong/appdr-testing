import { icons } from "../assets";
import path from "../pages/app/path";

export const menus = [
  {
    id: 1,
    icon: icons.home,
    label: "대시보드",
    route: path.home,
  },
  {
    id: 2,
    icon: icons.messages,
    label: "문의/요청",
    route: path.request,
  },
  {
    id: 3,
    icon: icons.cart,
    label: "서비스 구매",
    route: path.purchase,
  },
  {
    id: 4,
    icon: icons.checkList,
    label: "승인하기",
    route: path.approve,
  },
  {
    id: 5,
    icon: icons.notes,
    label: "요청현황",
    route: path.requestStatus,
  },
  {
    id: 6,
    icon: icons.download,
    label: "주문내역 조회",
    route: path.orderHistory,
  },
  {
    id: 7,
    icon: "",
    label: "결제내역 조회",
    route: path.paymentHistory,
  },
  {
    id: 8,
    icon: icons.account,
    label: "정보 수정",
    route: path.account,
  },
  {
    id: 9,
    icon: icons.logout,
    label: "로그아웃",
    route: path.logout,
  },
];
