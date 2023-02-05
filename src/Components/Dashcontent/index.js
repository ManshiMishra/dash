import React from "react";
import './idx.css';
import PieChart from "../PieChart";


export default function Dashcontent(){
  
    return(
        <div className="Dashcontent">
          <div className='cards'>
            <div className='dash-card'>
              <div className="cardheader">Total Blood request Receive</div>
              <div className="cardbody">25</div>
            </div>
            <div className='dash-card'>
            <div className="cardheader2">Registered Blood Groups</div>
              <div className="cardbody2">8</div>
            </div>
            <div className='dash-card'>
              <div className="cardheader3">Total Quries</div>
              <div className="cardbody3">177</div>
            </div>
          </div>
          <div className="availability">
          <h3>Availability</h3>
          {/* <PieChart/> */}
          </div>
      </div>
    );
}