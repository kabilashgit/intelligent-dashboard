import React from "react";
import DropDownBtn from "../Components/DropDownBtn";
import Button from "@mui/material/Button";
import { Grid, Box } from "@mui/material";
const FilterGroups = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          rowSpacing={1}
          spacing={1}
          sx={{ mb: 1 }}
          justifyContent="space-between"
        >
          <Grid item>
            <Button variant={"outlined"} size="small" disableElevation>
              Dimensions
            </Button>
          </Grid>
          <Grid item>
            <DropDownBtn title={"Location"}  />
          </Grid>
          <Grid item>
            <DropDownBtn title={"Factory Id"}  />
          </Grid>
          <Grid item>
            <DropDownBtn title={"Material Id"}  />
          </Grid>
          <Grid item>
            <DropDownBtn title={"Cost"}  />
          </Grid>
          <Grid item>
            <DropDownBtn title={"Department"}  />
          </Grid>
          <Grid item>
            <DropDownBtn title={"Type of Inventory"}  />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FilterGroups;
