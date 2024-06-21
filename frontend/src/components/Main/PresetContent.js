import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import "../../styles/Main/Content.css";



const PresetContent = ({weights, setWeights, handleApply}) => {
  return (
    <div className="sidebar_toggle">
      <h5>
        Weights
      </h5>
      <div className="Presets">
        {Object.keys(weights).map((key) => (
          <div className="Preset" key={key}>
            {key} <input
              min = "0"
              max = "1"
              step = "0.1"
              type="number"
              className="w-20 h-8 rounded-md border border-gray-300 dark:border-gray-700 text-black dark:text-white"
              value={weights[key]}
              onChange={(e) => setWeights({ ...weights, [key]: e.target.value })}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="text-white bg-gray-800 mt-auto hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mb-4 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        style={{ fontFamily: "LOGO" }}
        onClick={handleApply}
      >
        Apply
      </button>
    </div>
  );
};
export default PresetContent;
