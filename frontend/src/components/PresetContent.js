import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import "../styles/Content.css";



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
      </div>
    </div>
  );
};
export default PresetContent;
