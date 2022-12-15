import * as React from "react";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CurrencyUsd from "mdi-material-ui/CurrencyUsd";
import Poll from "mdi-material-ui/Poll";
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
        <Grid container rowSpacing={1} spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={12} md={3}>
            <CardStatsVertical
              icon={<Poll />}
              color="success"
              title="COST OF INVESTMENT"
              stats="$4000K"
              trendNumber="10%"
              trend="positive"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <StatisticsCard />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardStatsVertical
              icon={<CurrencyUsd />}
              color="primary"
              title="INV. WITH HIGH CARRYING COST"
              stats="200"
              // trendNumber="10%"
              // trend="positive"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardStatsVertical
              icon={<CurrencyUsd />}
              color="warning"
              title="INVENTORY TURN OVER"
              stats="45.65%"
              // trendNumber="10%"
              // trend="positive"
            />
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ mb: 1 }} />
      <FilterGroups />
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
        <Grid container rowSpacing={1} spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 1 }}>
              <Grid
                container
                rowSpacing={1}
                spacing={[0, 4]}
                sx={{ mb: 2 }}
                alignItems={"center"}
              >
                <Grid item xs={12} sx={{ height: "100%" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: "1.125rem !important",
                      textAlign: "center",
                      color: 'primary.main'
                    }}
                  >
                    INVENTORY AT RISK - 1500
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" sx={{ textAlign: "center", p: 1, fontSize: '1rem !important' }}>
                    NUMBER OF INVENTORY<br/>ITEMS AT RISK BY:
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <SimplePieChart />
                  <Typography
                    component={"div"}
                    sx={{ fontWeight: 600, textAlign: "center" }}
                  >
                    PRODUCT WISE
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <SimplePieChart />
                  <Typography
                    component={"div"}
                    sx={{ fontWeight: 600, textAlign: "center" }}
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
