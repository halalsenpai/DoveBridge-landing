import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Checkbox } from "@material-ui/core";

import CButton from "../shared/CButton/CButton";
import { Link } from "react-router-dom";
import Cmodal from "../../uiComponents/shared/CModal/CModal";
// import { service } from "..//../services/service";
import Axios from "axios";
import { baseurl } from "../../services/constant";
import ModalText from "./ModalText";
import swal from "sweetalert";
import { Spinner } from "react-bootstrap";

const SignUpForm = (props) => {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsDoNotMatch, setPasswordsDoNotMatch] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(true);

  // loading button states
  const [pending, setpending] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handlePassword = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setPasswordsDoNotMatch(true);
    } else setPasswordsDoNotMatch(false);
  };

  const [bool, setBool] = useState(false);

  const handleShow = () => {
    setBool(!bool);
  };

  const onFinish = (e) => {
    setpending(true);
    e.preventDefault();
    if (password === confirmPassword) {
      let payload = {
        email: email,
        password: password,
        name: name,
      };

      Axios.post(`${baseurl}api/auth/signup`, payload)
        .then((res) => {
          setpending(false);
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setName("");
          setChecked("");

          swal("congratulations!", "You have successfully registered", "success", {
            button: "Download the App!",
          }).then((value) => {
            let element = document.getElementById("sec-1");
            element.scrollIntoView();
          });
        })
        .catch((err) => {
          setpending(false);
          console.log(err.response.data);

          swal({
            title: "Error",
            text: err.response.data.message,
            icon: "warning",
            button: "Ok",

            dangerMode: true,
          });
        });
    } else console.log("passwords donot match");
  };

  return (
    <div className="c-card shadow">
      <div className="form">
        <div className="form-title">Sign Up</div>
        <form onSubmit={onFinish} autoComplete="off">
          <TextField
            disabled={pending}
            fullWidth
            margin="dense"
            type="text"
            id="name"
            label="Name"
            value={name}
            variant="outlined"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            disabled={pending}
            fullWidth
            margin="dense"
            id="email"
            type="email"
            label="Email"
            variant="outlined"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            disabled={pending}
            type="password"
            value={password}
            fullWidth
            margin="dense"
            id="password"
            label="Password"
            variant="outlined"
            required
            onChange={(e) => {
              var reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
              setPassword(e.target.value);
              var test = reg.test(password);
              if (test) {
                setPasswordStrength(true);
              } else {
                console.log("password weak");
                setPasswordStrength(false);
              }
            }}
          />
          <TextField
            disabled={pending}
            type="password"
            value={confirmPassword}
            fullWidth
            margin="dense"
            id="confirmPassword"
            label="Confirm Password"
            variant="outlined"
            required
            onChange={(e) => {
              handlePassword(e);
            }}
          />
          {passwordsDoNotMatch ? <div className="warning-text">passwords do not match</div> : null}
          {!passwordStrength ? (
            <div className="warning-text">
              Password must contain minimum eight characters, at least one letter and one number:
            </div>
          ) : null}

          <div className="d-flex align-items-center justify-content-start mb-2">
            <Checkbox
              disabled={pending}
              checked={checked}
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
              onChange={handleChange}
              required
            />
            <div className="terms">
              I have read and agreed with{" "}
              <button className="show-modal-butn" type="button" onClick={handleShow}>
                Terms of Services
              </button>
              .
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <CButton disabled={pending} htmlType="submit" themeColor="primary" className="hard-edge">
              {pending ? (
                <div>
                  <Spinner
                    className="btn-loader"
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />{" "}
                  Signing Up
                </div>
              ) : (
                <div>Get Your Free Account</div>
              )}
            </CButton>

            <div className="text-sm-light mt-2">(30 Day Free Trial)</div>
          </div>
        </form>
      </div>
      <Cmodal show={bool} onHide={handleShow}>
        <div style={{ position: "relative", fontSize: "12px", height: "65vh" }}>
          <div className="terms-heading">*Terms of Service* </div>
          <div class="modal-inner-div">
            <ModalText />
          </div>
        </div>
      </Cmodal>
    </div>
  );
};

export default SignUpForm;
