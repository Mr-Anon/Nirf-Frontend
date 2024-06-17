import React, { useState } from "react";
import "../../styles/Main/Header.css";

const Modal = ({ show, onClose }) => {

    const [formData, setFormData] = useState({
        instituteName: '',
        academicProgramName: '',
        quota: '',
        seatType: '',
        gender: '',
        openingRank: '',
        closingRank: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };
    const inputClass = "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm";

    if (!show) return null;
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto modal-bg">
            <div className="flex items-center justify-center min-h-screen px-4">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full modal-content">
                    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className=" text-center sm:mt-0 sm:text-left w-full">
                                <h2 className=" leading-1 font-medium text-gray-700" style={{ fontFamily: "LOGO" }}>
                                    Add Cutoffs
                                </h2>
                                <div className="mt-2">
                                    <form >
                                        <input
                                            type="text"
                                            placeholder="Institute Name"
                                            id="instituteName"
                                            name="instituteName"
                                            value={formData.instituteName}
                                            onChange={handleChange}
                                            className={inputClass}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Academic Program Name"
                                            id="academicProgramName"
                                            name="academicProgramName"
                                            value={formData.academicProgramName}
                                            onChange={handleChange}
                                            className={inputClass}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Quota"
                                            id="quota"
                                            name="quota"
                                            value={formData.quota}
                                            onChange={handleChange}
                                            className={inputClass}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Seat Type"
                                            id="seatType"
                                            name="seatType"
                                            value={formData.seatType}
                                            onChange={handleChange}
                                            className={inputClass}
                                        />
                                        <select
                                            id="gender"
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            className={inputClass}
                                        >
                                            <option value="" disabled>Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <input
                                            type="number"
                                            placeholder="Opening Rank"
                                            id="openingRank"
                                            name="openingRank"
                                            value={formData.openingRank}
                                            onChange={handleChange}
                                            className={inputClass}
                                        />
                                        <input
                                            type="number"
                                            placeholder="Closing Rank"
                                            id="closingRank"
                                            name="closingRank"
                                            value={formData.closingRank}
                                            onChange={handleChange}
                                            className={inputClass}
                                        />
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            type="button"
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={onClose}
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={handleSubmit}
                        >
                            Send for Approval
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
