import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/dashboard/actions";

export default function ProfileCard() {
  const { profile } = useSelector((state) => state.dashboard);
  console.log("Profile" , profile);

  const dispatch = useDispatch();

  const handleClick = () => {};
  return (
    <Grid item xs={12} md={10} lg={9} onClick={() => dispatch(getProfile())}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 240,
        }}
      >
        PROFILE CARD
      </Paper>
    </Grid>
  );
}
