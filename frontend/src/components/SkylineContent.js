import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import "../styles/Content.css";


const SkylineContent = (props) => {
  return (
    <div className="sidebar_toggle">
        <h5 style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          Skyline Content
        </h5>
        <div>
          
        </div>
        <button type="button"
        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        style={{fontFamily:"LOGO"}}
        >
        Apply
      </button>
    </div>
  );
};
export default SkylineContent;
