import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import CButton from "../shared/CButton/CButton";

const SignUpForm = (props) => {
  let { type = "" } = props;
  const [checked, setChecked] = useState(true);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="c-card shadow">
      <div className="form">
        <div className="form-title">Sign Up</div>
        <form noValidate autoComplete="off">
          <TextField fullWidth margin="dense" id="name" label="Name" variant="outlined" />
          <TextField fullWidth margin="dense" id="email" label="Email" variant="outlined" />
          <TextField type="password" fullWidth margin="dense" id="password" label="Password" variant="outlined" />
          <TextField
            type="password"
            fullWidth
            margin="dense"
            id="confirmPassword"
            label="Confirm Password"
            variant="outlined"
          />
          <div className="d-flex align-items-center">
            <Checkbox
              checked={checked}
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
              onChange={handleChange}
            />
            <div className="terms">
              I have read and agreed with <a href="#">Terms of Services</a>.
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <CButton themeColor="primary" className="hard-edge">
              Get Your Free Account
            </CButton>
            <div className="text-sm-light mt-2">(30 Day Free Trial)</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
