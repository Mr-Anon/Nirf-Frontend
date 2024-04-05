import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import "../styles/Content.css";
import { IoOptionsOutline } from "react-icons/io5";
import { BsToggles } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import PresetContent from "./PresetContent";
import FilterContent from "./FilterContent";
import ToggleContent from "./ToggleContent";
import { fetchColleges } from "./Api";

const Content = (props) => {
    const navigate = useNavigate();
    const [togglePreset, setTogglePreset] = useState(false);
    const [toggleFilter, setToggleFilter] = useState(false);
    const [toggleToggle, setToggleToggle] = useState(false);
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

    const Preset = () => {
        if (toggleFilter) {
            setToggleFilter(!toggleFilter)
        }
        else if (toggleToggle) {
            setToggleToggle(!toggleToggle)
        }
        setTogglePreset(!togglePreset);
    }

    const Filter = () => {
        if (togglePreset) {
            setTogglePreset(!togglePreset);
        }
        else if (toggleToggle) {
            setToggleToggle(!toggleToggle)
        }
        setToggleFilter(!toggleFilter);
    }
    const Toggle = () => {
        if (togglePreset) {
            setTogglePreset(!togglePreset);
        }
        else if (toggleFilter) {
            setToggleFilter(!toggleFilter);
        }
        setToggleToggle(!toggleToggle);
    }

    return (
        <div className="college-list-container">
            <div className="sidebar">
                {togglePreset? 
                (<IoOptionsOutline
                    className="after-click-icon"
                    role="button"
                    style={{ fontSize: '35px', marginTop: '15px' }}
                    onClick={() => { Preset() }}
                />)
                :(<IoOptionsOutline
                    className="icon"
                    role="button"
                    style={{ fontSize: '35px', marginTop: '15px' }}
                    onClick={() => { Preset() }}
                    />)
                }
                {toggleFilter? 
                (<FaFilter
                    className="after-click-icon"
                    role="button"
                    style={{ fontSize: '35px', marginTop: '30px' }}
                    onClick={() => { Filter() }}
                />)
                :(<FaFilter
                    className="icon"
                    role="button"
                    style={{ fontSize: '35px', marginTop: '30px' }}
                    onClick={() => { Filter() }}
                    />)
                }
                {toggleToggle? 
                (<BsToggles
                    className="after-click-icon"
                    role="button"
                    style={{ fontSize: '35px', marginTop: '30px' }}
                    onClick={() => { Toggle() }}
                />)
                :(<BsToggles
                    className="icon"
                    role="button"
                    style={{ fontSize: '35px', marginTop: '30px' }}
                    onClick={() => { Toggle() }}
                    />)
                }

            </div>
            {togglePreset ? (
                <PresetContent />
            ) :
                toggleFilter ? (
                    <FilterContent />
                ) :
                    toggleToggle ? (
                        <ToggleContent />) :
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
                                <td>{college.weightedScore}</td>/
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Content;
