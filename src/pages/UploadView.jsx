import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default class UploadView extends React.Component {
  // export default function UploadView({ fileName }) {
  state = {
    // Initially, no file is selected
    selectedFile: null,
  };

  // const [file, setFile] = useState([]);
  // const fileUploadRef = React.createRef();
  // const access_token =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUzMzk1Njc1LCJpYXQiOjE2NTMzOTI2NzUsImp0aSI6IjhhZmZjNTZlZDg3ZjRlYmY4N2I5ZWUxYjZkYWZlNmQ1IiwidXNlcl9pZCI6MX0.r9o4hOZcamYAib15EQpo-E_EZbYRDQ4AhvXGMI5dXzw";

  // onFileUpload = (fileData) => {
  onFileUpload = () => {
    // const bodyFormData = new FormData();
    // bodyFormData.append("myFile", fileName, fileData);
    // console.log("body form", bodyFormData.getAll);
    formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    // console.log("file", bodyFormData, "file1", fileName, "file2", fileData);
    axios
      .post(`http://127.0.0.1:8000/upload/aadhar`, formData)
      // })
      // await axios.get(`https://627cb0f4bf2deb7174df0cf5.mockapi.io/api/v1/car/2`)
      .then((response) => {
        setFile(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onFileChange = (event) => {
    // debugger;
    this.setState({ selectedFile: event.target.files[0] });
  };

  render() {
    return (
      <Grid item xs={12} md={10} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 200,
          }}
        >
          {/* <InputLabel>
          {"Document to be uploaded by a User is " + fileName}
        </InputLabel> */}
          <br />
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={(e) => this.onFileChange(e)}
            />
          </label>
          <Button
            style={{ backgroundColor: "lightblue", width: 80 }}
            component="span"
            onClick={this.onFileUpload()}
          >
            Upload
          </Button>

          {/*  <InputLabel htmlFor="aadhaar">Aadhaar Card</InputLabel>
        <Button
          style={{ width: 140 }}
          variant="contained"
          component="label"
          color="primary"
        >
          Upload a file
          <input id="aadhaar" type="file" hidden />
        </Button>
        <InputLabel htmlFor="pan">Pan Card</InputLabel>
        <Button
          style={{ width: 140 }}
          variant="contained"
          component="label"
          color="primary"
        >
          {" "}
          Upload a file
          <input id="pan" type="file" hidden />
        </Button>
        <InputLabel htmlFor="release">Relieving Letter</InputLabel>
        <Button
          style={{ width: 140 }}
          variant="contained"
          component="label"
          color="primary"
        >
          {" "}
          Upload a file
          <input id="release" type="file" hidden />
        </Button>
        <InputLabel htmlFor="service">Service Letter</InputLabel>
        <Button
          style={{ width: 140 }}
          variant="contained"
          component="label"
          color="primary"
        >
          {" "}
          Upload a file
          <input id="service" type="file" hidden />
        </Button>
        <InputLabel htmlFor="degree">Degree Certificate</InputLabel>
        <Button
          style={{ width: 140 }}
          variant="contained"
          component="label"
          color="primary"
        >
          {" "}
          Upload a file
          <input id="degree" type="file" hidden />
        </Button> */}
        </Paper>
      </Grid>
    );
  }
}
