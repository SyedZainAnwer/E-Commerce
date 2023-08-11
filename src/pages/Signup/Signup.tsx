import { TextField } from "@mui/material";
import "./Signup.css";
import Btn from "../../components/shared/Button";
import GoogleIcon from "@mui/icons-material/Google";

const Signup = () => {
  return (
    <div className="signup_main">
      <div className="signup_container">
        <h2>Create your account</h2>

        <div className="username">
          <div className="first_name">
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              required
              style={{ width: "40%%" }}
            />
          </div>
          <div className="last_name">
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              required
              style={{ width: "50%%" }}
            />
          </div>
        </div>

        <div>
          <TextField
            id="outlined-basic"
            label="Email Address"
            type="email"
            variant="outlined"
            required
            style={{ width: "80%" }}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            required
            style={{ width: "80%" }}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            type="password"
            required
            style={{ width: "80%" }}
          />
        </div>
        <div className="continue_btn">
          <Btn
            variant="contained"
            text="Sign up"
            style={{
              width: "80%",
              padding: "10px 125px",
              borderRadius: "5px",
              backgroundColor: "#10a37f",
            }}
            iconStyle={{ display: "none" }}
          />
        </div>
        <p>
          Already have an accouunt? <span>Log in</span>
        </p>

        <div className="text-between-lines">
          <span className="line" ></span>
          <span className="text_for_login">OR</span>
          <span className="line" ></span>
        </div>
        <div>
          <div className="google_btn">
            <Btn
              variant="contained"
              text="Continue With Google"
              style={{
                width: "80%",
                padding: "5px 80px 5px 30px",
                backgroundColor: "white",
                color: "rgba(0, 0, 0, 0.87)",
              }}
              icon={<GoogleIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
