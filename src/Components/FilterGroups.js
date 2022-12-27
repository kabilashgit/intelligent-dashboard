import React from "react";
import DropDownBtn from "../Components/DropDownBtn";
import Button from "@mui/material/Button";
import { Grid, Box } from "@mui/material";
const FilterGroups = ({dropDownData}) => {
  
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          rowSpacing={1}
          sx={(theme) => ({
            mt: 0.3,
            bgcolor: theme.palette.grey[700],
            p: 1,
            pt: 0,
          })}
          justifyContent="space-between"
        >
          {dropDownData.map((item, index) => {
            if (item.dropdown) {
              return (
                <Grid item key={index}>
                  <DropDownBtn
                    title={item.title}
                    dropDownItems={item.dropdown}
                  />
                </Grid>
              );
            }

            return (
              <Grid item key={index}>
                <Button variant={"outlined"} size="small" disableElevation>
                  {item.title}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default FilterGroups;
