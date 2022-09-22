import "./cus_reg.css";
import { Link } from 'react-router-dom';

export default function CusReg() {
  return (
    <div className="container">
    <div className="register">
        <span className="RegTitle">Create an account</span>
        <form className="regForm">
            <label>First Name</label>
            <input type="text" className="regInput" placeholder=""/>

            <label1>Last Name</label1>
            <input type="text" className="regInput1" placeholder=""/>

            <label>Mobile Number</label>
            <input type="text" className="regInput" placeholder=""/>

            <label>Address</label>
            <input type="text" className="regInput" placeholder=""/>

            <label>Email</label>
            <input type="text" className="regInput" placeholder=""/>

            <label>Password</label>
            <input type="text" className="regInput" placeholder=""/>

            <label1>Confirm Password</label1>
            <input type="text" className="regInput1" placeholder=""/>

            <button className="signupButton1">
            <Link className="link" to="/CusVerification">Sign up</Link>
              </button>
        </form>
    </div>
    </div>
  );
}