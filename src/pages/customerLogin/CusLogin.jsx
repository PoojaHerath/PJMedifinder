import "./cuslogin.css";
import { Link } from 'react-router-dom';

export default function CusLogin() {
  return (
    <div className="Container">
    <div className="login">
        <span className="LoginTitle1">Login</span>
        <form className="loginForm">
            <label>Email/Phone Number</label>
            <input type="text" className="loginInput" placeholder="Enter your email or phone number..."/>

            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter your password..."/>

            <button className="signinButton1">Sign in</button>
        </form>
        <button className="signupButton2">
        <Link className="link" to="/CusReg">Sign up</Link>
        </button>
    </div>
    </div>
  );
}
