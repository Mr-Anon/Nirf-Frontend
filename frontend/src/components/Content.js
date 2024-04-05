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
import DataTable from 'react-data-table-component';

const Content = (props) => {
    const navigate = useNavigate();
    const [togglePreset, setTogglePreset] = useState(false);
    const [toggleFilter, setToggleFilter] = useState(false);
    const [toggleToggle, setToggleToggle] = useState(false);
    const [colleges, setColleges] = useState([
        {
            name: "D",
            location: "Dsia",
            weightedScore: "1",
        },
        {
            name: "G",
            location: "Gsia",
            weightedScore: "2",
        },
        {
            name: "C",
            location: "Csia",
            weightedScore: "3",
        },
        {
            name: "A",
            location: "Asia",
            weightedScore: "4",
        },
    ]);
    const [pending, setPending] = useState(true);

    const fetchData = async () => {
        // const data = await fetchColleges();
        // setColleges(data);
        setPending(false);
    };

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
          selector: row => row.location,
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
