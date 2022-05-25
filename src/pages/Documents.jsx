import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { Box } from "@mui/system";
import { FormControl } from "@mui/material";
import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import UploadView from "./UploadView2";

export default function Documents() {
  const [key, setKey] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setKey(event.target.value);
    // if (key) {
    //   navigate("")
    // }
  };

  const getFileUploader = () => {
    if (key) {
      var fileName = key.replace("_", " ");
      return <UploadView fileName={key} />;
    } else {
      return null;
    }
  };

  return (
    <React.Fragment>
      <InputLabel>{"Document to be uploaded by a User: "}</InputLabel>
      <br />
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">File Upload</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={key}
            onChange={(e) => handleChange(e)}
            label="File Name"
          >
            <MenuItem value={"aadhar_card"}>Aadhaar Card</MenuItem>
            <MenuItem value={"pan_card"}>Pan Card</MenuItem>
            <MenuItem value={"relieving_letter"}>Relieving Letter</MenuItem>
            <MenuItem value={"service_letter"}>Service Letter</MenuItem>
            <MenuItem value={"degree_certificate"}>Degree Certificate</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {getFileUploader()}
    </React.Fragment>
  );
}
