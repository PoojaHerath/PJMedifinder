import { Component } from "react";
import "./location.css";
import {Map, GoogleApiWrapper} from 'google-map-react';

class MapContainer extends Component{
    render() {
        return (
            <div className="location">
                <span className="Title">Add your location to the Google map</span>
                <div>
                 <Map
                  google = {this.props.google}
                  style = {{width:"60%", height:"60%"}}
                  zoom = {10}
                  initialCenter = { 
                    {
                    lat:6.927079,
                    lng:79.861244
                  } 
                }
                  />
                </div>
                <div>
                <button className="saveButton">Save</button>
            </div>
            </div>
          );
    }
  }
  export default GoogleApiWrapper ({
    apikey:"AIzaSyDuv_iEaChFCwP1ByamA9YFH6JTmKF1IPg"
  })(MapContainer)
