import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import "../styles/Content.css";
import {fetchSkylineData} from "./Api";

const SkylineContent = () => {
  const [skylineData, setSkylineData] = useState([]);
  const [skylineStates, setSkylineStates] = useState([]);

  const fetchSkyline = async () => {
    const data = await fetchSkylineData();
    // console.log(data);
    setSkylineData(data.skyline);
    setSkylineStates(data.skyline.map(() => false));
    // console.log(skylineStates)
  }
  useEffect(() => {
    fetchSkyline();
  }, []);

  

  const skylineSwitchHandler =(index) => {
    const newskylineStates = [...skylineStates];
    newskylineStates[index] = !skylineStates[index];
    setSkylineStates(newskylineStates);
    console.log(newskylineStates[index])
  };

  const handleApply = async () => {
    try {
      const skylineStateData = skylineData.reduce((acc, toggle, index) => {
        acc[toggle] = skylineStates[index];
        return acc;
      }, {});
      console.log(skylineStateData)
      // Send POST request to API
      const response = await fetch("http://localhost:8000/api/getToggled", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(skylineStateData)
      });

      if (response.ok) {
        console.log("Toggle data posted successfully");
        // const data = response.json();
        // console.log(data);
        // Redirect or perform any other action upon successful posting
      } else {
        console.error("Failed to post toggle data");
      }
    } catch (error) {
      console.error("Error posting toggle data:", error);
    }
  };

  return (
    <div className="sidebar_toggle">
      <h5>Skyline</h5>
      <div className="Presets">
        {skylineData.map((toggle, index) => (
          <div className="Toggle" key={index}>
            <div>{toggle}</div>
            <div
              class="transform hover:scale-105" onClick={() => { skylineSwitchHandler(index) }} style={{ cursor: "pointer" }}
            >
              {skylineStates[index] === false ? (
                <div className="d-flex" >
                  <div>
                    <div className="box bg-[#B0BEC5] h-8 w-14 rounded-full"></div>
                    <div class="dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full !bg-white"></div>
                  </div>
                </div>
              ) : (
                <div className="d-flex">
                  <div className="box bg-[#1A237E] block h-8 w-14 rounded-full"></div>
                  <div
                    class="dot absolute top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white "
                    style={{ right: 3 }}
                  ></div>
                </div>
              )}
            </div>
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

export default SkylineContent;

