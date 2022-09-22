import "./Pharm_acc.css";
import { Link } from 'react-router-dom';

export default function PharmAcc() {
  return (
    <><div className="logo">
      <span>My Account</span>
      <img
        className="Account"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSg1Zf3kAoGO-nuXvuKB_PntnvwMU7lDRFrA&usqp=CAU" alt="" />
    </div><div></div><div className="homeImg">
        <div>
          <img
            className="homeImg"
            src="https://miro.medium.com/max/1200/1*K9epZSTeca6HXSDrWiGmQA.png" alt="" />
        </div>
      </div><div className="container3">
        <div className="myAccount">
          <form className="accForm">
            <label>First Name</label>
            <input type="text" className="accInput" placeholder="" />

            <label1>Last Name</label1>
            <input type="text" className="accInput1" placeholder="" />

            <label>Agency/Pharmacy Name</label>
            <input type="text" className="accInput" placeholder="" />

            <label1>Register Number</label1>
            <input type="text" className="accInput1" placeholder="" />

            <label>Email Address</label>
            <input type="text" className="accInput" placeholder="" />

            <label1>Contact Number</label1>
            <input type="text" className="accInput1" placeholder="" />
            
            <label>Change Password</label>
            <input type="text" className="accInput" placeholder="" />

            <label1>Confirm Password</label1>
            <input type="text" className="accInput1" placeholder="" />

            <button className="saveButton3">
            <Link className="link" to="/PharmHome">Save Changes</Link>
              </button>
          </form>
        </div>
      </div></>
  );
}