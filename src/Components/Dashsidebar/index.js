import React from "react";
import './idx.css'
import img90 from './logo.jpg';
import { FaSignOutAlt } from 'react-icons/fa';
export default function Dashsidebar(){
    return(
        <div className="Dashsidebar">
        <div className="sidebarWrapper">
         <div className="sidebarMenu">
          <div className='dashlogo'>
            <img src={img90} alt='' />
          </div>
          <h1 className="sidebarTitle">User Name</h1>
          <ul className="sidebarList">
            {/* <Link to="/" className="link"> */}
            <li className="sidebarListItem">
              
              User ID
            </li>
            {/* </Link> */}
            <li className="sidebarListItem">
              
              Details
            </li>
            <li className="sidebarListItem">
            <FaSignOutAlt />
              Logout
            </li>
          </ul>
        </div>
        </div>
      </div>
    );
}