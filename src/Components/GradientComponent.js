import { styled } from "@mui/material";
import React from "react";

const GradientBgDiv = styled("div", {
  shouldForwardProp: (prop) => prop !== "gradient" && prop !== "block",
})(({ theme, gradient, block }) => ({
  borderRadius: theme.shape.borderRadius,
  ...(gradient
    ? {
        background: theme?.palette?.[gradient].gradient,
        color: theme?.palette?.[gradient].contrastText,
      }
    : { background: theme.palette.primary.dark }),
  ...(block ? { display: "flex" } : { display: "inline-flex" }),
  //   background: variant
  //     ? theme?.palette?.[variant].gradient
  //     : theme.palette.primary.dark,
}));

export const GradientComponent = ({ children, ...props }) => {
  return (
    <GradientBgDiv {...props}>
      <React.Fragment>{children}</React.Fragment>
    </GradientBgDiv>
  );
};
// disableRipple disableElevation disableTouchRipple disableFocusRipple
