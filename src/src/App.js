import React from "react";
import { Box, styled } from "@mui/material";
import Navigation from "./Components/Navigation/index";
import { Routes, Route } from "react-router-dom";
import InventoryManagement from "./Pages/InventoryManagement";
import OrderManagement from "./Pages/OrderManagement";
import SkuManagenent from "./Pages/SkuManagenent";
import AssetManagement from "./Pages/AssetManagement";
// import { drawerWidth } from ".";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


function App() {
// const boxWwidthCtrl = window.innerWidth > 750 ? `${drawerWidth}px` : '0px'
// maxWidth: `calc(100vw - ${boxWwidthCtrl})`,

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Navigation />
        <Box component="main" sx={{ flexGrow: 1, p: 3,  overflowX: 'hidden' }}>
          <DrawerHeader />
          <Routes>
            <Route exact path="/" element={<InventoryManagement />} />
            <Route path="/intelligent-order-management" element={<OrderManagement />} />
            <Route path="/intelligent-sku-management" element={<SkuManagenent />} />
            <Route path="intelligent-asset-management" element={<AssetManagement />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default App;
