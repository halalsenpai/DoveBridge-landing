import { TextField } from "@material-ui/core";
import React from "react";
import CButton from "../shared/CButton/CButton";

const LoginForm = () => {
  return (
    <div className="c-card shadow">
      <div className="form">
        <div className="form-title">Login</div>
        <form noValidate autoComplete="off">
          <TextField fullWidth margin="dense" id="email" label="Email" variant="outlined" />
          <TextField type="password" fullWidth margin="dense" id="password" label="Password" variant="outlined" />
          <CButton themeColor="primary" className="hard-edge">
            Login
          </CButton>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
