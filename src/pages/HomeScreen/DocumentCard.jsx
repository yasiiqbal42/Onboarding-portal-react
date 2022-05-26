import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getDocument } from "../../redux/dashboard/actions";
import Typography from "../../components/modules/components/Typography";
import { Alert } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorIcon from "@mui/icons-material/Error";
import CheckIcon from "@mui/icons-material/Check";
import FileStatus from "./FileStatus";
import { fontSize } from "@mui/system";

export default function DocumentCard() {
  const { documents, userId } = useSelector((state) => state.dashboard);
  console.log("Store-Document", documents);
  console.log("user Id-", userId);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getDocument(userId));
  // }, []);

  const documentData = {
    aadhar_status: 1,
    pan_status: 1,
    relieving_letter: 1,
    degree_certificate: 1,
    service_letter: 1,
  };

  const getCompletionStatus = () => {
    return documentData.aadhar_status &&
      documentData.pan_status &&
      documentData.relieving_letter &&
      documentData.degree_certificate &&
      documentData.service_letter ? (
      <CheckIcon style={{ color: "green", fontSize: "30px" }} />
    ) : (
      <ErrorIcon style={{ color: "red", fontSize: "30px" }} />
    );
  };

  return (
    <Grid
      item
      xs="auto"
      md={10}
      lg={12}
      style={{ cursor: "pointer" }}
      onClick={() => dispatch(getDocument(userId))}
    >
      <Paper sx={{ boxShadow: "none" }}>
        <Typography
          component="h2"
          variant="h6"
          color="inherit"
          display="flex"
          justifyContent="space-between"
          noWrap
          sx={{ flexGrow: 1, pt: 1 }}
          align="center"
        >
          <span style={{ marginLeft: 510 }} className="customFontHeading">
            DOCUMENT
          </span>
          <Typography sx={{ mr: 2 }} align="center">
            {getCompletionStatus()}
          </Typography>
        </Typography>

        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "row",
            height: 150,
            boxShadow: "none",
          }}
        >
          <FileStatus
            fileStatus={documentData.aadhar_status}
            fileName="Aadhar Card"
          />
          <FileStatus
            fileStatus={documentData.pan_status}
            fileName="Pan Card"
          />
          <FileStatus
            fileStatus={documentData.relieving_letter}
            fileName="Relieving Letter"
          />
          <FileStatus
            fileStatus={documentData.degree_certificate}
            fileName="Degree Certificate"
          />
          <FileStatus
            fileStatus={documentData.service_letter}
            fileName="Service Letter"
          />
        </Paper>
      </Paper>
    </Grid>
  );
}
