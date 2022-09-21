import "./addMedicine.css";
import { Link } from 'react-router-dom';

export default function AddMedicine() {
    return (
      <div className="container">
      <div className="addMedicine">
          <span className="Title">Add Medicine</span>
          <form className="addForm">
              <label>Enter Brand Name</label>
              <input type="text" className="addInput" placeholder=""/>
  
              <label1>Enter Drug Name</label1>
              <input type="text" className="addInput1" placeholder=""/>
  
              <label>Quantity</label>
              <input type="text" className="addInput" placeholder=""/>
  
              <label>Manufacture Date</label>
              <input type="text" className="addInput" placeholder=""/>
  
              <label1>Expiry date</label1>
              <input type="text" className="addInput1" placeholder=""/>
  
              <label>Details of the medicine</label>
              <input type="text" className="addInput" placeholder=""/>
  
              <label>Price</label>
              <input type="text" className="addInput" placeholder="Rs."/>
  
              <button className="saveButton">
              <Link className="link" to="/PharmHome">Save</Link>
              </button>
          </form>
      </div>
      </div>
    );
  }