import { TextField } from "@mui/material";
import "./Login.css";
import Btn from "../../components/shared/Button";
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';

const Login = () => {
  return (
    <div className="login_main">
      <div className="login_container">
        <h1>Welcome back</h1>
        <div>
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          required
          style={{ width: "100%" }}
        />
        </div>
        <div className="continue_btn">
          <Btn text="Continue" />
        </div>
        <p>
          Don't have an accouunt? <span>Sign up</span>
        </p>

        <div className="text-between-lines">
          <span className="line"></span>
          <span className="text">OR</span>
          <span className="line"></span>
        </div>
<div>
        <div className="google_btn">
          <Button variant="contained">
            <span><GoogleIcon/></span>
            Continue with Google
            </Button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
