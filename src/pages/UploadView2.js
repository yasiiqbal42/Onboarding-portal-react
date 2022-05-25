import { MoneyOffOutlined } from "@mui/icons-material";
import axios from "axios";
import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";

class UploadView extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      this.props.fileName,
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    console.log(formData, " formData ", this.props.fileName);
    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("http://127.0.0.1:8000/upload/aadhar", formData);
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <Grid item xs={12} md={10} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 500,
          }}
        >
          <div>
            <div>
              <InputLabel>Aadhaar Card</InputLabel>
              <Input type="file" onChange={this.onFileChange} />
              <Button
                style={{ backgroundColor: "lightblue", width: 80 }}
                component="span"
                onClick={this.onFileUpload}
              >
                Upload!
              </Button>
            </div>
            <br />
            <InputLabel>Pan Card</InputLabel>
            <div>
              <Input type="file" onChange={this.onFileChange} />
              <Button
                style={{ backgroundColor: "lightblue", width: 80 }}
                component="span"
                onClick={this.onFileUpload}
              >
                Upload!
              </Button>
            </div>
            <br />
            <InputLabel>Relieving Letter</InputLabel>
            <div>
              <Input type="file" onChange={this.onFileChange} />
              <Button
                style={{ backgroundColor: "lightblue", width: 80 }}
                component="span"
                onClick={this.onFileUpload}
              >
                Upload!
              </Button>
            </div>
            <br />
            <InputLabel>Service Letter</InputLabel>
            <div>
              <Input type="file" onChange={this.onFileChange} />
              <Button
                style={{ backgroundColor: "lightblue", width: 80 }}
                component="span"
                onClick={this.onFileUpload}
              >
                Upload!
              </Button>
            </div>
            <br />
            <InputLabel>Degree Certificate</InputLabel>
            <div>
              <Input type="file" onChange={this.onFileChange} />
              <Button
                style={{ backgroundColor: "lightblue", width: 80 }}
                component="span"
                onClick={this.onFileUpload}
              >
                Upload!
              </Button>
            </div>

            {/* {this.fileData()} */}
          </div>
        </Paper>
      </Grid>
    );
  }
}

export default UploadView;
