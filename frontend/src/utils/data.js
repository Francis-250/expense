import {
  FaHome,
  FaMoneyBillWave,
  FaRoute,
  FaCheckCircle,
  FaCog,
  FaQuestionCircle,
  FaMoneyBillWaveAlt,
  FaRegCheckCircle,
} from "react-icons/fa";

export const webLinks = [
  // {
  //   name: "Home",
  //   path: "/",
  //   icon: FaHome,
  // },
  {
    name: "Expenses",
    path: "/expenses",
    icon: FaMoneyBillWave,
  },
  // {
  //   name: "Trips",
  //   path: "/trips",
  //   icon: FaRoute,
  // },
  // {
  //   name: "Approvals",
  //   path: "/approvals",
  //   icon: FaCheckCircle,
  // },
  // {
  //   name: "Settings",
  //   path: "/settings",
  //   icon: FaCog,
  // },
  // {
  //   name: "Support",
  //   path: "/support",
  //   icon: FaQuestionCircle,
  // },
];

export const quickActions = [
  {
    name: "New Expense",
    icon: FaMoneyBillWaveAlt,
  },
  {
    name: "Add Receipt",
    icon: FaRegCheckCircle,
  },
  {
    name: "Create Report",
    icon: FaMoneyBillWaveAlt,
  },
  {
    name: "create Trip",
    icon: FaRoute,
  },
];

export const expenseheader = [
  "ID",
  "Amount",
  "Category",
  "date",
  "description",
  "Actions",
];
