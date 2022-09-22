import React from 'react';
import "./drugdetails.css";
import { Link } from 'react-router-dom';

export default function DrugDetails() {
    return (
      <div className="container">
      <div className="drugDetails">
          <span className="detailTitle">Add medicine</span>
          <form className="detailForm">
              <label>Brand Name</label>
              <input type="text" className="detailInput" placeholder=""/>
  
              <label>Drug Name With Dosage</label>
              <input type="text" className="detailInput" placeholder=""/>
  
              <label>Email</label>
              <input type="text" className="detailInput" placeholder=""/>
  
              <label>Contact No:</label>
              <input type="text" className="detailInput" placeholder=""/>
  
              <label>Add File</label>
              <input type="file" className="detailInput" placeholder=""/>
  
              <button className="saveButton1">
              <Link className="link" to="/PharmHome">Save</Link>
                </button>
          </form>
      </div>
      </div>
    );
  }
  









/*export const AddPrescription =(props) =>(
  <form>
  <label>Brand Name</label>
  <input name="name"  />
  <label>Drug Name With Dosage</label>
  <input name="address"  />
  <label>Email</label>
  <input name="date"  />
  <label>Contact No:</label>
  <input name="order"  />
  <label>Add File</label>
  <input type="file" name='file'/>
  <input type="submit" className="submitButton" />
  </form>
)*/

