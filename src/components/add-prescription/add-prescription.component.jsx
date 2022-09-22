import React from 'react';

import './add-prescription.css';


export const AddPrescription =(props) =>(
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
)