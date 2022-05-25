import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getDocument } from "../redux/dashboard/actions";

export default function DocumentCard() {
  const { documents } = useSelector((state) => state.dashboard);
  console.log("Store-Document", documents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDocument());
  }, []);

  return (
    <Grid item xs={12} md={8} lg={9} onClick={() => dispatch(getDocument())}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 240,
        }}
      >
        DOCUMENT CARD
      </Paper>
    </Grid>
  );
}
