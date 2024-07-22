import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Sales",
        path: "/dashboard/sales",
        icon: <MdAttachMoney />,
      },
      {
        title: "About",
        path: "/dashboard/about",
        icon: <MdPeople />,
      },
    ],
  },
  // {
  //   title: "Analytics",
  //   list: [
  //     {
  //       title: "Revenue",
  //       path: "/dashboard/revenue",
  //       icon: <MdWork />,
  //     },
  //     {
  //       title: "Reports",
  //       path: "/dashboard/reports",
  //       icon: <MdAnalytics />,
  //     },
      
  //   ],
  // },
  // {
  //   title: "User",
  //   list: [
  //     {
  //       title: "Settings",
  //       path: "/dashboard/settings",
  //       icon: <MdOutlineSettings />,
  //     },
  //     {
  //       title: "Help",
  //       path: "/dashboard/help",
  //       icon: <MdHelpCenter />,
  //     },
  //   ],
  // },
];

export default menuItems;
