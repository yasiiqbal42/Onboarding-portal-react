import React from "react";
import Grid from "@mui/material/Grid";

export default function Dummy() {
  return (
    <Grid container spacing={3} alignItems="stretch">
      <Grid item xs={12} sm={6}>
        Label
      </Grid>
      <Grid item xs={12} sm={6}>
        Input
      </Grid>
    </Grid>
  );
}
