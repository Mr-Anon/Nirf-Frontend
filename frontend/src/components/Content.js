import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import "../styles/Content.css";
import { IoOptionsOutline } from "react-icons/io5";
import { BsToggles } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import PresetContent from "./PresetContent";
import FilterContent from "./FilterContent";
import ToggleContent from "./ToggleContent";
import SkylineContent from "./SkylineContent";
import { fetchColleges } from "./Api";
import DataTable from 'react-data-table-component';
import { fetchToggle } from "./Api";

const Content = (props) => {
    const navigate = useNavigate();
    const [togglePreset, setTogglePreset] = useState(false);
    const [toggleFilter, setToggleFilter] = useState(false);
    const [toggleToggle, setToggleToggle] = useState(false);
    const [toggleSkyline, setToggleSkyline] = useState(false);
    const [colleges, setColleges] = useState([]);
    const [pending, setPending] = useState(true);
    const [toggleData, setToggleData] = useState([]);
    const [toggleStates, setToggleStates] = useState([]);

    const handleApply = async () => {
        try {
          const toggleStateData = toggleData.reduce((acc, toggle, index) => {
            acc[toggle] = toggleStates[index];
            // console.log(acc);
            return acc;
          }, {});
          // console.log(toggleStateData)
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
            const data = await response.json();
            console.log(data);
            setColleges(data)
    
            // Redirect or perform any other action upon successful posting
          } else {
            console.error("Failed to post toggle data");
          }
        } catch (error) {
          console.error("Error posting toggle data:", error);
        }
      };

    const fetchData = async () => {
        const data = await fetchColleges();
        // setToggleData(data)
        setColleges(data);
        setPending(false);
    };


    const fetchToggles = async () => {
        const data = await fetchToggle();
        console.log("ppp",data);
        setToggleData(data.toggles);
        setToggleStates(data.toggles.map(() => false));
        // console.log(toggleStates)
    }


    useEffect(() => {
        fetchData();
        fetchToggles();
    }, []);



    const Preset = () => {
        if (toggleFilter) {
            setToggleFilter(!toggleFilter)
        }
        else if (toggleToggle) {
            setToggleToggle(!toggleToggle)
        }
        else if (toggleSkyline) {
            setToggleSkyline(!toggleSkyline)
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
        else if (toggleSkyline) {
            setToggleSkyline(!toggleSkyline)
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
        else if (toggleSkyline) {
            setToggleSkyline(!toggleSkyline)
        }
        setToggleToggle(!toggleToggle);
    }

    const Skyline = () => {
        if (togglePreset) {
            setTogglePreset(!togglePreset);
        }
        else if (toggleFilter) {
            setToggleFilter(!toggleFilter)
        }
        else if (toggleToggle) {
            setToggleToggle(!toggleToggle)
        }
        setToggleSkyline(!toggleSkyline);
    }
    const columns = () => [
        {
            name: 'Index',
            selector: (row, index) => index + 1,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: "Location",
            selector: row => row.city,
            sortable: true,
        },
        {
            name: "Rank",
            sortable: true,
            selector: row => row.weightedScore,
        },
    ];
    return (
        <div className="college-list-container">
            <div className="sidebar">
                {togglePreset ?
                    (<IoOptionsOutline
                        className="after-click-icon"
                        role="button"
                        style={{ fontSize: '35px', marginTop: '15px' }}
                        onClick={() => { Preset() }}
                    />)
                    : (<IoOptionsOutline
                        className="icon"
                        role="button"
                        style={{ fontSize: '35px', marginTop: '15px' }}
                        onClick={() => { Preset() }}
                    />)
                }
                {toggleFilter ?
                    (<FaFilter
                        className="after-click-icon"
                        role="button"
                        style={{ fontSize: '35px', marginTop: '30px' }}
                        onClick={() => { Filter() }}
                    />)
                    : (<FaFilter
                        className="icon"
                        role="button"
                        style={{ fontSize: '35px', marginTop: '30px' }}
                        onClick={() => { Filter() }}
                    />)
                }
                {toggleToggle ?
                    (<BsToggles
                        className="after-click-icon"
                        role="button"
                        style={{ fontSize: '35px', marginTop: '30px' }}
                        onClick={() => { Toggle() }}
                    />)
                    : (<BsToggles
                        className="icon"
                        role="button"
                        style={{ fontSize: '35px', marginTop: '30px' }}
                        onClick={() => { Toggle() }}
                    />)
                }
                {toggleSkyline ?
                    (<FaChartLine
                        className="after-click-icon"
                        role="button"
                        style={{ fontSize: '35px', marginTop: '30px' }}
                        onClick={() => { Skyline() }}
                    />)
                    : (<FaChartLine
                        className="icon"
                        role="button"
                        style={{ fontSize: '35px', marginTop: '30px' }}
                        onClick={() => { Skyline() }}
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
                        <ToggleContent toggleData = {toggleData} toggleStates = {toggleStates} setToggleStates={setToggleStates} handleApply={handleApply} />
                    ) :
                        toggleSkyline ? (
                            <SkylineContent />
                        ) :
                            (<></>)
            }
            <div className="content">
                {/* Main content area */}
                <DataTable
                    title="List Of Colleges"
                    columns={columns()}
                    data={colleges}
                    progressPending={pending}
                    pagination
                    highlightOnHover
                    fixedHeader
                />
            </div>
        </div>
    );
};
export default Content;
