import * as React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import InventoryIcon from '@mui/icons-material/Inventory';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import AddIcon from '@mui/icons-material/Add';

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
      icon: <InventoryIcon />
    },
    {
      name: "Order Management",
      link: "intelligent-order-management",
      icon: <LocalMallIcon />
    },
    {
      name: "SKU's Management",
      link: "intelligent-sku-management",
      icon: <LoyaltyIcon />
    },
    {
      name: "Asset Management",
      link: "intelligent-asset-management",
      icon: <RequestPageIcon />
    },
    {
      name: "Navigation 1",
      link: "/1",
      icon: <AddIcon />
    },
    {
      name: "Navigation 2",
      link: "/2",
      icon: <AddIcon />
    },
    {
      name: "Navigation 3",
      link: "/3",
      icon: <AddIcon />
    },
    {
      name: "Navigation 4",
      link: "/4",
      icon: <AddIcon />
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
