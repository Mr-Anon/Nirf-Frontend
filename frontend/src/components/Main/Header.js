import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import "../../styles/Main/Header.css";
import { FaConnectdevelop } from "react-icons/fa6"
// import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from '@mui/icons-material/Login';
import AddchartIcon from '@mui/icons-material/Addchart';


const Header = ({ onOpenModal }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate()
  const fetchData = async () => {
    // const data = await fetchColleges();
    // setColleges(data);
    // setPending(false);
  };

  useEffect(() => {
    fetchData();
    // console.log("hello i am here");
    console.log(localStorage.getItem("isAdmin"));
    setIsAdmin(localStorage.getItem("isAdmin"));
    console.log(isAdmin);

  }, []);

  const handleLogin = () => {
    navigate("/form");
  };

  const handleLogout = () => {
    localStorage.removeItem("isloggedin");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("token");
    window.location.reload();
  };
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin"));
  const [isloggedin, setIsloggedin] = useState(localStorage.getItem("isloggedin"));
  return (
    <header className="header">
      <div className="logo-container">
        <FaConnectdevelop style={{ fontSize: '35px' }} />
        <div className="logo-text">
          <span>Find</span>
          <span>My College</span>
        </div>
      </div>
      {
        !isloggedin ? (
          <div className="login_header">
            <button className="login"
              onClick={handleLogin}
            >
              <LoginIcon />
              Login
            </button>
          </div>
        ) : (
          isAdmin ? (
            // if user is admin
            <div className="login_header">
              <button className="login"
                onClick={handleLogout}
              >
                <LoginIcon />
                Logout
              </button>
            </div>
          ) : (
            // if user is not admin
            <div className="login_header">
              <div className="login_header_icon">
                <button
                  className="login"
                  // className="px-4 py-2 bg-blue-600 text-white rounded"
                  onClick={async () => await onOpenModal()}
                >
                  <AddchartIcon />
                  Add CutOffs
                </button>
              </div>

              < div className="login_header_after">
                <button className="login"
                  onClick={handleLogout}
                >
                  <LoginIcon />
                  Logout
                </button>
              </div>
            </div>

          )
        )}
    </header >
  );
};
export default Header;
