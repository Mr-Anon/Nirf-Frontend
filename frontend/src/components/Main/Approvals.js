import React, { useEffect, useState } from "react";
import Approvals_pg from "./Approvals_pg";
import "../../styles/Main/Approvals.css";
import Header from "./Header";

const Approvals = () => {
  const [req, setReq] = useState([]);

  useEffect(() => {
    async function approve() {
      try {
        const response = await fetch("http://localhost:8000/api/getAllPendingCutoffs");
        const data = await response.json();
        console.log("->>>>>>>", data.pendingCutoffs);
        setReq(data.pendingCutoffs);
      } catch (error) {
        console.error("Error fetching toggle data:", error);
      }
    }
    approve();
  }, []);

  return (
    <div>
      <Header />
      {req.length === 0 ? (
        <div className="admin">No Pending Requests</div>
      ) : (
        req.map((person) => (
          <div className="col" key={person._id}>
            <Approvals_pg req={req} person={person} />
          </div>
        ))
      )}
    </div>
  );
};

export default Approvals;
