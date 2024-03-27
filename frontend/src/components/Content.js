// import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom'
// import "../styles/Content.css";
// import { FaFilter } from "react-icons/fa";
// import { IoFilterSharp } from "react-icons/io5";
// import SortContent from "./Sort";
// import FilterConent from "./Filter";
// import { fetchColleges } from "./Api";

// const Content = (props) => {
//     const navigate = useNavigate();
//     const [toggleFilter, setToggleFilter] = useState(false);
//     const [toggleSort, setToggleSort] = useState(false);
//     const [colleges, setColleges] = useState([]);
//     const Sort = () => {
//         if (toggleFilter) {
//             setToggleFilter(!toggleFilter)
//         }
//         setToggleSort(!toggleSort);
//     }
//     const Filter = () => {
//         if (toggleSort) {
//             setToggleSort(!toggleSort)
//         }
//         setToggleFilter(!toggleFilter);
//     }
//     const fetchData = async () => {
//         const data = await fetchColleges();
//         setColleges(data);
//     };
//     return (
//         <div className="college-list-container">
//             <div className="sidebar">
//                 <FaFilter
//                     role="button"
//                     style={{ fontSize: '35px', marginTop: '15px' }}
//                     onClick={() => { Sort() }}
//                 />
//                 <IoFilterSharp
//                     role="button"
//                     style={{ fontSize: '35px', marginTop: '30px' }}
//                     onClick={() => { Filter() }}
//                 />
//             </div>
//             {toggleFilter ? (
//                 <FilterConent />
//             ) :
//                 toggleSort ? (
//                     <SortContent />
//                 ) :
//                     (<></>)}
//             <div className="content">
//                 {/* Main content area */}
//                 <h2>List of Colleges</h2>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Location</th>
//                             <th>Ranking</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {/* Render college list items dynamically */}
//                         {/* Example: */}
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>

//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>

//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>

//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         <tr>
//                             <td>College 1</td>
//                             <td>City, State</td>
//                             <td>1</td>
//                         </tr>
//                         {/* Add more college list items as needed */}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };
// export default Content;
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import "../styles/Content.css";
import { FaFilter } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import SortContent from "./Sort";
import FilterConent from "./Filter";
import { fetchColleges } from "./Api";

const Content = (props) => {
    const navigate = useNavigate();
    const [toggleFilter, setToggleFilter] = useState(false);
    const [toggleSort, setToggleSort] = useState(false);
    const [colleges, setColleges] = useState([]);

    // Function to fetch data from API
    const fetchData = async () => {
        const data = await fetchColleges();
        setColleges(data);
    };

    // useEffect hook to fetch data when component mounts
    useEffect(() => {
        fetchData();
    }, []);

    const Sort = () => {
        if (toggleFilter) {
            setToggleFilter(!toggleFilter)
        }
        setToggleSort(!toggleSort);
    }

    const Filter = () => {
        if (toggleSort) {
            setToggleSort(!toggleSort)
        }
        setToggleFilter(!toggleFilter);
    }

    return (
        <div className="college-list-container">
            <div className="sidebar">
                <FaFilter
                    role="button"
                    style={{ fontSize: '35px', marginTop: '15px' }}
                    onClick={() => { Sort() }}
                />
                <IoFilterSharp
                    role="button"
                    style={{ fontSize: '35px', marginTop: '30px' }}
                    onClick={() => { Filter() }}
                />
            </div>
            {toggleFilter ? (
                <FilterConent />
            ) :
                toggleSort ? (
                    <SortContent />
                ) :
                    (<></>)}
            <div className="content">
                {/* Main content area */}
                <h2>List of Colleges</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Ranking</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Render college list items dynamically */}
                        {colleges.map(college => (
                            <tr key={college.id}>
                                <td>{college.name}</td>
                                <td>{college.city}</td>
                                <td>{college.weightedScore}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Content;
