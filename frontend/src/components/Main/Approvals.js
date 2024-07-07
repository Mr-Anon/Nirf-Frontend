import React, { useEffect, useState } from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CloseIcon from "@mui/icons-material/Close";
import Header from "./Header";

const Approvals = () => {
    // const [req, setReq] = useState({});
    // useEffect(() => {
    //     function fetch() {
    //         try {
    //             // Fetch data from API
    //             const response = fetch("http://localhost:8000/api/addUserCutoff");
    //             // const data = response.json();
    //             console.log("->>>>>>>", response);
    //             // return data;
    //         } catch (error) {
    //             console.error("Error fetching toggle data:", error);
    //             return [];
    //         }
    //     }
    //     fetch();

    // }, []);

    const fetchh = async () => {
        // try {
        const response = await fetch("http://localhost:8000/api/getAllPendingCutoffs");
        const data = await response.json();
        console.log("->>>>>>>",data.pendingCutoffs);
        // return data;
        // } catch (error) {
        //     console.error("Error fetching toggle data:", error);
        //     // return [];
        // }
    }

    // const acceptReq = async (e) => {
    //     e.preventDefault();
    //     await axios.put(`http://localhost:5000/mySubGreddiit/acceptReq/${person}`, subG)
    //     console.log('helooooo')
    //     window.location.reload(false);
    // };
    // const rejectReq = async (e) => {
    //     e.preventDefault();
    //     await axios.put(`http://localhost:5000/mySubGreddiit/rejectReq/${person}`, subG)
    //     window.location.reload(false);
    // };
    return (
        <div>
            <Header />
            <button onClick={fetchh}>
                hello world
            </button>
            {/* <div class="card ">
                <div class="card-body">
                    <div className="requests">
                        {req.username}
                        <div>
                            <DoneAllIcon
                                type="button"
                                fontSize="large"
                                style={{ color: "green", marginRight: "10px" }}
                                onClick={acceptReq}
                            />
                            <CloseIcon
                                type="button"
                                fontSize="large"
                                style={{ color: "#973a2c" }}
                                onClick={rejectReq}
                            />
                        </div>
                    </div>
                </div>
            </div> */}
        </div >
    );
};

export default Approvals;