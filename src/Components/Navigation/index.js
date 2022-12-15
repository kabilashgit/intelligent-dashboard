import * as React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import InventoryIcon from '@mui/icons-material/Inventory';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import RequestPageIcon from '@mui/icons-material/RequestPage';

const Navigation = () => {
  const [open, setOpen] = React.useState(true);

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
