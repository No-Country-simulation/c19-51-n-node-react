import {
  MdSupervisedUserCircle,
  MdAttachMoney,
  MdTrendingUp,
  MdTrendingDown,
} from "react-icons/md";

  const cardsData = [
    {
      icon: MdSupervisedUserCircle,
      title: "Total Sells",
      number: "10.275",
      detail: "more than previous week",
      change: "12%",
    },
    {
      icon: MdAttachMoney,
      title: "Total Revenue",
      number: "$58,000",
      detail: "more than previous month",
      change: "8%",
    },
    {
      icon: MdTrendingUp,
      title: "Active Users",
      number: "1.200",
      detail: "more than previous week",
      change: "5%",
    },
    {
      icon: MdTrendingDown,
      title: "New Orders",
      number: "350",
      detail: "less than previous week",
      change: "-3%",
    },
  ];


export default cardsData;
