import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import "../styles/Content.css";
import { FaFilter } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";


const Content = (props) => {
    const navigate = useNavigate();
    const [toggleFilter, setToggleFilter] = useState(false);
    const [toggleSort, setToggleSort] = useState(false);
    const Sort = () => {
        setToggleSort(!toggleSort);
    }
    const Filter = () => {
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
                <div className="sidebar_toggle">
                    Filter
                </div>
            ): 
            toggleSort?(
                <div className="sidebar_toggle">
                    Sort
                </div>
            ):
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
                        {/* Example: */}
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>College 1</td>
                            <td>City, State</td>
                            <td>1</td>
                        </tr>
                        {/* Add more college list items as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Content;
