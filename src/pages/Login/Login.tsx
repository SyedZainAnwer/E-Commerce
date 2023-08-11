import { TextField } from "@mui/material";
import "./Login.css";
import Btn from "../../components/shared/Button";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  return (
    <div className="login_main">
      <div className="login_container">
        <h1>Welcome back</h1>
        <div>
          <TextField
            id="outlined-basic"
            label="Email Address"
            type="email"
            variant="outlined"
            required
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            required
            style={{ width: "100%" }}
          />
        </div>
        <div className="continue_btn">
          <Btn variant="contained" text="log in" style={{width:"100%", padding:"10px 125px", borderRadius:"5px", backgroundColor:"#10a37f"}} iconStyle={{display:"none"}}/>
        </div>
        <p>
          Don't have an accouunt? <span>Sign up</span>
        </p>

        <div className="text-between-lines">
          <span className="line"></span>
          <span className="text_for_login">OR</span>
          <span className="line"></span>
        </div>
        <div>
          <div className="google_btn">
            <Btn variant="contained" text='Continue With Google' style={{width:"100%", padding: "5px 80px 5px 30px", backgroundColor:"white", color:"rgba(0, 0, 0, 0.87)", }} icon={<GoogleIcon />}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
