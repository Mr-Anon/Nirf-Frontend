import React, { useState } from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CloseIcon from "@mui/icons-material/Close";
import Header from "./Header";

const Approvals_pg = ({ req, person }) => {
    const [showDetails, setShowDetails] = useState(false);

    const acceptReq = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/addCutoff", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                institute_name: person.institute_name,
                Academic_Program_Name: person.Academic_Program_Name,
                Quota: person.Quota,
                Seat_Type: person.Seat_Type,
                Gender: person.Gender,
                Opening_Rank: person.Opening_Rank,
                Closing_Rank: person.Closing_Rank,
            })
        });
        const data = await response.json();
        console.log('helooooo', data);
        if (data.error === "Duplicate entry. This data already exists.") {
            rejectReq()
            alert('Duplicate entry. This data already exists');
        }

        window.location.reload(false);
    };
    const rejectReq = async (e) => {

        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/deletePendingCutoff", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id :person._id,
            })
        });
        const data = await response.json();
        console.log('helooooo', data);
        window.location.reload(false);
    };

    return (
        <div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden m-4">
                <div className="p-3">
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-gray-800 font-semibold">
                            {person.institute_name}
                            <button
                                className="text-blue-500 underline ml-2"
                                onClick={() => setShowDetails(!showDetails)}
                            >
                                {showDetails ? "Hide Details" : "More Details"}
                            </button>
                        </div>
                        <div className="flex items-center">
                            <DoneAllIcon
                                type="button"
                                fontSize="large"
                                className="text-green-500 ml-2 cursor-pointer"
                                onClick={acceptReq}
                            />
                            <CloseIcon
                                type="button"
                                fontSize="large"
                                className="text-red-500 ml-2 cursor-pointer"
                                onClick={rejectReq}
                            />
                        </div>
                    </div>
                    {showDetails && (
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Field</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(person).map(([key, value]) => (
                                    <tr key={key}>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                                            <div className="text-sm leading-5 text-gray-800">{key}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                                            <div className="text-sm leading-5 text-gray-800">{value}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Approvals_pg;
