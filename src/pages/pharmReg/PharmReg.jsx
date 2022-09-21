//import * as React from 'react';
import "./pharmreg.css";
import { Link } from 'react-router-dom';

export default function PharmReg() {
  return (
    <div className="container1">
    <div className="register">
        <span className="RegTitle">Create an account</span>
        <form className="regForm">
            <label>First Name</label>
            <input type="text" className="regInput" placeholder=""/>

            <label1>Last Name</label1>
            <input type="text" className="regInput1" placeholder=""/>

            <label>Pharmacy Name</label>
            <input type="text" className="regInput" placeholder=""/>

            <label1>Register Number</label1>
            <input type="text" className="regInput1" placeholder=""/>

            <label>Mobile Number</label>
            <input type="text" className="regInput" placeholder=""/>
 
            <label>Location</label>
            <input type="text" className="regInput" placeholder=""/>

            <label>Email</label>
            <input type="text" className="regInput" placeholder=""/>

            <label>Password</label>
            <input type="text" className="regInput" placeholder=""/>

            <label1>Confirm Password</label1>
            <input type="text" className="regInput1" placeholder=""/>
        </form>
        <button className="signupButton1">
            <Link className="link" to="/Verification">Sign up</Link>
            </button>
        </div>
    </div>
  );
}