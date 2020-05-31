import path from "./path";

import Home from "../home";
import ServicePurchase from "../servicePurchase";
import OrderAndPayment from "../orderAndPayment";
import CompanyInfo from "../companyInfo";
import RequestStatus from "../requestStatus";
import IssueDetail from "../issueDetail";

export default [
  {
    id: 1,
    route: path.home,
    component: Home,
  },
  {
    id: 2,
    route: path.purchase,
    component: ServicePurchase,
  },
  {
    id: 3,
    route: path.orderAndPayment,
    component: OrderAndPayment,
  },
  {
    id: 4,
    route: path.companyInfo,
    component: CompanyInfo,
  },
  {
    id: 5,
    route: path.requestStatus,
    component: RequestStatus,
  },
  {
    id: 5,
    route: path.issueDetail,
    component: IssueDetail,
  },
];
