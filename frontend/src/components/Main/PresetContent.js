import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import "../../styles/Main/Content.css";



const PresetContent = (props) => {
  return (
    <div className="sidebar_toggle">
      <h5>
        Presets
      </h5>
      <div className="Presets">
        <div className="Preset">
          Option 1
        </div>
        <div className="Preset">
          Option 2
        </div>
        <div className="Preset">
          Option 3
        </div>
        <div className="Preset">
          Option 4
        </div>
        {/* <div className="Preset">
          Option 1
        </div>
        <div className="Preset">
          Option 2
        </div>
        <div className="Preset">
          Option 3
        </div>
        <div className="Preset">
          Option 4
        </div>
        <div className="Preset">
          Option 1
        </div>
        <div className="Preset">
          Option 2
        </div>
        <div className="Preset">
          Option 3
        </div>
        <div className="Preset">
          Option 4
        </div>
        <div className="Preset">
          Option 1
        </div>
        <div className="Preset">
          Option 2
        </div>
        <div className="Preset">
          Option 3
        </div>
        <div className="Preset">
          Option 4
        </div>
        <div className="Preset">
          Option 1
        </div>
        <div className="Preset">
          Option 2
        </div>
        <div className="Preset">
          Option 3
        </div>
        <div className="Preset">
          Option 4
        </div> */}
      </div>
      <button type="button" class="text-white bg-gray-800 mt-auto hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mb-4 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        style={{fontFamily:"LOGO"}}
        >
        Apply
      </button>
    </div>
  );
};
export default PresetContent;
