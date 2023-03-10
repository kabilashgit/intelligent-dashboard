import * as React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import InventoryIcon from '@mui/icons-material/Inventory';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import Person3Icon from '@mui/icons-material/Person3';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HandymanIcon from '@mui/icons-material/Handyman';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';


const Navigation = () => {
  const [open, setOpen] = React.useState(window.innerWidth > 750 ? true : false);

  const handleDrawerToggle = () => {
    setOpen(!open);
    // return null
  };
  const sideMenuItems = [
    {
      name: "Inventory Management",
      link: "/",
      icon: <InventoryIcon />,
      icon2: <ReportProblemIcon sx={{fontSize: '1rem', color: '#ea5545'}} />
    },
    {
      name: "Order Management",
      link: "intelligent-order-management",
      icon: <LocalMallIcon />
    },
    {
      name: "SKU's Management",
      link: "intelligent-sku-management",
      icon: <LoyaltyIcon />,
      icon2: <ReportProblemIcon sx={{fontSize: '1rem', color: '#ea5545'}} />
    },
    {
      name: "Asset Management",
      link: "intelligent-asset-management",
      icon: <RequestPageIcon />
    },
    {
      name: "Supplier/Vendor Management",
      link: "/1",
      icon: <AirportShuttleIcon />
    },
    {
      name: "Customer Management",
      link: "/2",
      icon: <Person3Icon />
    },
    {
      name: "Accounts Payable Management & Leakage Monitoring",
      link: "/3",
      icon: <AccountBalanceIcon />
    },
    {
      name: "Incident Management",
      link: "/4",
      icon: <HandymanIcon />
    },
  ];
  return (
    <div>
      <Topbar toggleDrawer={handleDrawerToggle} menuState={open} />
      <Sidebar
        toggleDrawer={handleDrawerToggle}
        menuState={open}
        menuItems={sideMenuItems}
      />
    </div>
  );
};
export default Navigation;
