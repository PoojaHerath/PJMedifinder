import "./cus_verification.css";
import { Link } from 'react-router-dom';

export default function cus_Verification() {
    return (
      <div className="emailVerification">
           <text className="title">Verify Your Email</text>
           <div>
           <text className="title2">Check your Email to verify your Email Address...</text>
           </div>
            <div className="button">
           <button className="verifyButton">
           <Link className="link" to="/PharmHome">Verify</Link>
           </button>
           </div>
          </div>
    )
  }
  
