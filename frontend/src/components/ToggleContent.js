import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import "../styles/Content.css";

const ToggleContent = () => {
  const [toggleData, setToggleData] = useState([]);
  const [toggleStates, setToggleStates] = useState([]);

  // Fetch data from API when component mounts
  useEffect(() => {
    fetchToggleData();
  }, []);

  const fetchToggleData = async () => {
    try {
      // Fetch data from API
      const response = await fetch("http://localhost:8000/api/getToggles");
      const data = await response.json();
      console.log(data);
      // Set the toggle data
      setToggleData(data.toggles);
      // Set initial toggle states
      await setToggleStates(data.toggles.map(() => false));
      await console.log(toggleStates)
    } catch (error) {
      console.error("Error fetching toggle data:", error);
    }
  };

  const toggleSwitchHandler = async (index) => {
    const newToggleStates = [...toggleStates];
    newToggleStates[index] = !toggleStates[index];
    await setToggleStates(newToggleStates);
    await console.log(newToggleStates[index])
  };

  const handleApply = async () => {
    try {
      const toggleStateData = toggleData.reduce((acc, toggle, index) => {
        acc[toggle] = toggleStates[index];
        return acc;
      }, {});
      console.log(toggleStateData)
      // Send POST request to API
      const response = await fetch("http://localhost:8000/api/getToggled", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(toggleStateData)
      });

      if (response.ok) {
        console.log("Toggle data posted successfully");
        // setColleges()

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
      <h5>Toggle Content</h5>
      <div className="Presets">
        {toggleData.map((toggle, index) => (
          <div className="Toggle" key={index}>
            <div>{toggle}</div>
            <div
              className="ToggleSwitch"
              
            >
              {/* {!toggleStates[index] ? ( */}
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                  onClick={() => toggleSwitchHandler(index)}></div>
                </label>
              {/* ) : (
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              )} */}
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

export default ToggleContent;
