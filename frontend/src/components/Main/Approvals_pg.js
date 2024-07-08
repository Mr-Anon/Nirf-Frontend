import React from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CloseIcon from "@mui/icons-material/Close";
import Header from "./Header";

const Approvals_pg = ({req, person}) => {
    // console.log(subG.requests)
    

    // const acceptReq = async (e) => {
    //     e.preventDefault();
    //     await // api call
    //     console.log('helooooo')
    //     window.location.reload(false);
    // };
    // const rejectReq = async (e) => {
    //     e.preventDefault();
    //     await //api call
    //     window.location.reload(false);
    // };
    return (
        <div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-3">
                    <div className="flex justify-between items-center">
                        <div className="text-gray-800 font-semibold">{person.institute_name}</div>
                        <div className="flex items-center">
                            <DoneAllIcon
                                type="button"
                                fontSize="large"
                                className="text-green-500 mr-2 cursor-pointer"
                            // onClick={acceptReq}
                            />
                            <CloseIcon
                                type="button"
                                fontSize="large"
                                className="text-red-500 cursor-pointer"
                            // onClick={rejectReq}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
    
};

export default Approvals_pg;