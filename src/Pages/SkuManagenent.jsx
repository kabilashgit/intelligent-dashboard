import * as React from "react";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CurrencyUsd from "mdi-material-ui/CurrencyUsd";
import CardStatsVertical from "../Components/Cards/CardStatsVertical";
import StatisticsCard from "../Components/Cards/StatisticsCard";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import FilterGroups from "../Components/FilterGroups";
import CustomTable from "../Components/CustomTable";
import Typography from "@mui/material/Typography";
import { SimplePieChart } from "../Components/SimplePieChart";
import { randomGen } from "../HelperUtils";
import SimpleMixedBarChart from "../Components/Charts/SimpleMixedBarChart";

const SkuManagenent = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const dropDownData = [
    {
      title: "Dimensions",
    },
    {
      title: "Location",
      dropdown: ["All", "one", "two"],
    },
    {
      title: "Factory Id",
      dropdown: ["All", "one", "two"],
    },
    {
      title: "Material Id",
      dropdown: ["All", "one", "two"],
    },
    {
      title: "Cost",
      dropdown: ["All", "one", "two"],
    },
    {
      title: "Department",
      dropdown: ["All", "one", "two"],
    },
    {
      title: "Type of Inventory",
      dropdown: ["All", "one", "two"],
    },
  ];
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} sx={{ mb: 1 }}>
          <FilterGroups dropDownData={dropDownData} />
        </Grid>
        <Divider sx={{ mb: 1 }} />
        <Grid container rowSpacing={1} spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={12} md={3}>
            <CardStatsVertical
              color="success"
              title="COST OF SKU's"
              stats="$4000K"
              trendNumber="4.1%"
              trend="positive"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <StatisticsCard title={"Wasteful SKU’s"} barData={[60, 30, 10]} />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardStatsVertical
              icon={<CurrencyUsd />}
              color="primary"
              title="Unprofitable SKU's"
              stats="250"
              // trendNumber="10%"
              // trend="positive"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardStatsVertical
              icon={<CurrencyUsd />}
              color="warning"
              title="OVER FORECASTED THAN 10% ABOVE"
              stats="400"
              // trendNumber="10%"
              // trend="positive"
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ width: "100%", p: 1 }}>
              <SimpleMixedBarChart chartTitle={""} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTable />
          </Grid>
        </Grid>
        <Divider sx={{ mb: 1 }} />
        <Grid
          container
          rowSpacing={1}
          spacing={2}
          sx={{ minHeight: "20vh", mb: "0 !important" }}
        >
          <Grid item xs={12} sx={{ mb: "0 !important" }}>
            <Paper sx={{ p: 1 }}>
              <Grid
                container
                rowSpacing={1}
                spacing={[0, 4]}
                sx={{ mb: 0 }}
                alignItems={"center"}
              >
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: "1rem !important",
                      textAlign: "left",
                      color: "primary.main",
                      ml: 1,
                    }}
                  >
                    INVENTORY AT RISK
                  </Typography>
                  <FormControl
                    sx={{ m: 1, width: "100%", maxWidth: 300, mt: 3 }}
                    size="small"
                  >
                    <InputLabel id="demo-select-small">
                      Inventery Type
                    </InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={age}
                      label="Inventery Type"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Product Wise</MenuItem>
                      <MenuItem value={20}>Inventory Wise</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "left",
                      p: 1,
                      fontSize: ".9rem !important",
                    }}
                  >
                    NUMBER OF INVENTORY -{" "}
                    <Typography
                      component={"span"}
                      sx={(theme) => ({
                        fontWeight: 600,
                        color: theme.palette.primary.dark,
                      })}
                    >
                      {randomGen(1000, 2000)}
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <SimplePieChart />
                  <Typography
                    component={"div"}
                    sx={{
                      fontWeight: 600,
                      textAlign: "center",
                      pt: "5px",
                      fontSize: ".8rem",
                    }}
                  >
                    PRODUCT WISE
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <SimplePieChart />
                  <Typography
                    component={"div"}
                    sx={{
                      fontWeight: 600,
                      textAlign: "center",
                      pt: "5px",
                      fontSize: ".8rem",
                    }}
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

export default SkuManagenent;
