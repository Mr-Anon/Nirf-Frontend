import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import "../styles/Header.css";
import { FaConnectdevelop } from "react-icons/fa6"


const Header = (props) => {
  return (
    <header className="header">
      <div className="logo-container">
        <FaConnectdevelop style={{ fontSize: '35px' }}/>
        <div className="logo-text">
        <span>Find</span>
        <span>My College</span>
        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search Colleges"  />
      </div>
    </header>
  );
};
export default Header;
