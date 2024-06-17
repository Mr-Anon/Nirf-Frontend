// import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom'
// import "../styles/Content.css";
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';


// const FilterContent = (props) => {
//   const [sliderValue1, setSliderValue1] = useState([0, 100]);
//   const [sliderValue2, setSliderValue2] = useState([0, 100]);
//   const [sliderValue3, setSliderValue3] = useState([0, 100]);
//   const [sliderValue4, setSliderValue4] = useState([0, 100]);

//   const handleSliderChange1 = (value) => {
//     setSliderValue1(value);
//   };
//   const handleSliderChange2 = (value) => {
//     setSliderValue2(value);
//   };
//   const handleSliderChange3 = (value) => {
//     setSliderValue3(value);
//   };
//   const handleSliderChange4 = (value) => {
//     setSliderValue4(value);
//   };
//   return (
//     <div className="sidebar_toggle">
//       <h5 style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//         Filter Content
//       </h5>
//       <div className="Presets">
//         <div className="Filter">
//           <div style={{display:"flex", justifyContent:"center", padding:"10px"}}>Option 1</div>
//           <Slider
//             range
//             min={0}
//             max={100}
//             value={sliderValue1}
//             onChange={handleSliderChange1}
//           />
//           <span style={{display:"flex",justifyContent:"center"}}>
//             Range: {sliderValue1[0]} - {sliderValue1[1]}
//           </span>
//         </div>
//         <div className="Filter">
//           <div style={{display:"flex", justifyContent:"center", padding:"10px"}}>Option 2</div>
//           <Slider
//             range
//             min={0}
//             max={100}
//             value={sliderValue2}
//             onChange={handleSliderChange2}
//           />
//           <span style={{display:"flex",justifyContent:"center"}}>
//             Range: {sliderValue2[0]} - {sliderValue2[1]}
//           </span>
//         </div>
//         <div className="Filter">
//           <div style={{display:"flex", justifyContent:"center", padding:"10px"}}>Option 3</div>
//           <Slider
//             range
//             min={0}
//             max={100}
//             value={sliderValue3}
//             onChange={handleSliderChange3}
//           />
//           <span style={{display:"flex",justifyContent:"center"}}>
//             Range: {sliderValue3[0]} - {sliderValue3[1]}
//           </span>
//         </div>
//         <div className="Filter">
//           <div style={{display:"flex", justifyContent:"center", padding:"10px"}}>Option 4</div>
//           <Slider
//             range
//             min={0}
//             max={100}
//             value={sliderValue4}
//             onChange={handleSliderChange4}
//           />
//           <span style={{display:"flex",justifyContent:"center"}}>
//             Range: {sliderValue4[0]} - {sliderValue4[1]}
//           </span>
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
// export default FilterContent;
import React, { useState } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const FilterContent = ({ filters, filterData, setFilterData, handleApply }) => {
  const handleSliderChange = (key, value) => {
    setFilterData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };
  // handleSliderChange("cutoff_rank", cutoff);
  console.log(filterData);
  

  return (
    <div className="sidebar_toggle">
      <h5 style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        Filter Content
      </h5>
      <div className="Presets">
        {Object.keys(filters).map(key => (
          <div className="Filter" key={key}>
            <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>{key.replace(/_/g, ' ')}</div>
            <Slider
              range
              min={filters[key][0]}
              max={filters[key][1]}
              value={filterData[key]}
              onChange={value => handleSliderChange(key, value)}
            />
            <span style={{ display: "flex", justifyContent: "center" }}>
              Range: {filterData[key][0]} - {filterData[key][1]}
            </span>
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

export default FilterContent;
