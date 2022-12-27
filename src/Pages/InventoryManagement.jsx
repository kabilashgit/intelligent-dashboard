import * as React from "react";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CurrencyUsd from "mdi-material-ui/CurrencyUsd";
import CardStatsVertical from "../Components/Cards/CardStatsVertical";
import StatisticsCard from "../Components/Cards/StatisticsCard";

import FilterGroups from "../Components/FilterGroups";
import CustomWorldMap from "../Components/CustomWorldMap";
import CustomTable from "../Components/CustomTable";
import Typography from "@mui/material/Typography";
import { SimplePieChart } from "../Components/SimplePieChart";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   color: theme.palette.text.secondary,
// }));

const InventoryManagement = () => {
  
  return (
    <>
      <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} sx={{ mb: 1 }}>

      <FilterGroups />
        </Grid>
      <Divider sx={{ mb: 1 }} />
        <Grid container rowSpacing={1} spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={12} md={3}>
            <CardStatsVertical
              color="success"
              title="INVENTORY"
              stats="$6.1M"
              trendNumber="4.1%"
              trend="positive"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <StatisticsCard title={'SUPPLIER PERFORMANCE'} />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardStatsVertical
              icon={<CurrencyUsd />}
              color="primary"
              title="CARRYING RATE"
              stats="31%"
              // trendNumber="10%"
              // trend="positive"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardStatsVertical
              icon={<CurrencyUsd />}
              color="warning"
              title="INVENTORY TURNOVER"
              stats="45.65%"
              // trendNumber="10%"
              // trend="positive"
            />
          </Grid>
        </Grid>
      </Box>
      
      <Box sx={{ width: "100%"  }}>
        <Grid container spacing={2} sx={{mb: 1}}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ width: "100%", p: 1 }}>
              <CustomWorldMap />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTable />
          </Grid>
        </Grid>
        <Divider sx={{ mb: 1 }} />
        <Grid container rowSpacing={1} spacing={2} sx={{minHeight: '20vh', mb: '0 !important'}}>
          <Grid item xs={12} sx={{mb: '0 !important'}}>
            <Paper sx={{ p: 1 }}>
              <Grid
                container
                rowSpacing={1}
                spacing={[0, 4]}
                sx={{ mb: 0 }}
                alignItems={"center"}
              >
                <Grid item xs={12} md={4}>
                <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: "1rem !important",
                      textAlign: "center",
                      color: 'primary.main'
                    }}
                  >
                    INVENTORY AT RISK - 1500
                  </Typography>
                  <Typography variant="h6" sx={{ textAlign: "center", p: 1, fontSize: '.8rem !important' }}>
                    NUMBER OF INVENTORY<br/>ITEMS AT RISK BY:
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <SimplePieChart />
                  <Typography
                    component={"div"}
                    sx={{ fontWeight: 600, textAlign: "center", pt: '5px', fontSize: '.8rem' }}
                  >
                    PRODUCT WISE
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <SimplePieChart />
                  <Typography
                    component={"div"}
                    sx={{ fontWeight: 600, textAlign: "center", pt: '5px', fontSize: '.8rem' }}
                  >
                    INVENTORY TYPE WISE
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default InventoryManagement;
