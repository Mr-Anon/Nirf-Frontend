// import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom'
// import "../styles/Content.css";


// const SkylineContent = (props) => {
//   const [toggle1, setToggle1] = useState(false);
//   const [toggle2, setToggle2] = useState(false);
//   const [toggle3, setToggle3] = useState(false);
//   const [toggle4, setToggle4] = useState(false);
//   const [toggle5, setToggle5] = useState(false);

//   return (
//     <div className="sidebar_toggle">
//       <h5 style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//         Skyline Content
//       </h5>
//       <div className="Presets">
//         <div className="Toggle">
//           <div>Option 1</div>
//           <div
//             className="ToggleSwitch"
//             onClick={
//               () => {
//                 setToggle1(!toggle1);
//               }
//             }>
//             {!toggle1 ? (
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//               </label>
//             ) : (
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//               </label>
//             )
//             }
//           </div>
//         </div>
//         <div className="Toggle">
//           <div>Option 2</div>
//           <div
//             className="ToggleSwitch"
//             onClick={
//               () => {
//                 setToggle2(!toggle2);
//               }
//             }>
//             {!toggle2 ? (
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//               </label>
//             ) : (
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//               </label>
//             )
//             }
//           </div>
//         </div>
//         <div className="Toggle">
//           <div>Option 3</div>
//           <div
//             className="ToggleSwitch"
//             onClick={
//               () => {
//                 setToggle3(!toggle3);
//               }
//             }>
//             {!toggle3 ? (
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//               </label>
//             ) : (
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//               </label>
//             )
//             }
//           </div>
//         </div>
//         <div className="Toggle">
//           <div>Option 4</div>
//           <div
//             className="ToggleSwitch"
//             onClick={
//               () => {
//                 setToggle4(!toggle4);
//               }
//             }>
//             {!toggle4 ? (
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//               </label>
//             ) : (
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//               </label>
//             )
//             }
//           </div>
//         </div>
//         <div className="Toggle">
//           <div>Option 5</div>
//           <div
//             className="ToggleSwitch"
//             onClick={
//               () => {
//                 setToggle5(!toggle5);
//               }
//             }>
//             {!toggle5 ? (
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//               </label>
//             ) : (
//               <label class="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" value="" class="sr-only peer" />
//                 <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//               </label>
//             )
//             }
//           </div>
//         </div>
//       </div>
//       <button type="button"
//         class="text-white bg-gray-800 mt-auto hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mb-4 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
//         style={{ fontFamily: "LOGO" }}
//       >
//         Apply
//       </button>
//     </div>
//   );
// };
// export default SkylineContent;


import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import "../styles/Content.css";

const SkylineContent = () => {
  const [skylineData, setSkylineData] = useState([]);
  const [skylineStates, setSkylineStates] = useState([]);

  // Fetch data from API when component mounts
  useEffect(() => {
    fetchSkylineData();
  }, []);

  const fetchSkylineData = async () => {
    try {
      // Fetch data from API
      const response = await fetch("http://localhost:8000/api/getSkylineValues");
      const data = await response.json();
      console.log(data);
      // Set the toggle data
      setSkylineData(data.skyline);
      // Set initial toggle states
      await setSkylineStates(data.skyline.map(() => false));
      await console.log(skylineStates)
    } catch (error) {
      console.error("Error fetching skyline data:", error);
    }
  };

  const skylineSwitchHandler = async (index) => {
    const newskylineStates = [...skylineStates];
    newskylineStates[index] = !skylineStates[index];
    await setSkylineStates(newskylineStates);
    await console.log(newskylineStates[index])
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
              className="ToggleSwitch"
              
            >
              {/* {!skylineStates[index] ? ( */}
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                  onClick={() => skylineSwitchHandler(index)}></div>
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

export default SkylineContent;

