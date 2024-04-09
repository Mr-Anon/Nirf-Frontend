import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import "../styles/Header.css";
import { FaConnectdevelop } from "react-icons/fa6"


const Header = (props) => {
  const fetchData = async () => {
    // const data = await fetchColleges();
    // setColleges(data);
    // setPending(false);
};

useEffect(() => {
    fetchData();
}, []);
  return (
    <header className="header">
      <div className="logo-container">
        <FaConnectdevelop style={{ fontSize: '35px' }}/>
        <div className="logo-text">
        <span>Find</span>
        <span>My College</span>
        </div>
      </div>
    </header>
  );
};
export default Header;
