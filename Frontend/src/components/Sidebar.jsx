import "./Sidebar.css";

import { NavLink } from "react-router-dom";

import {
    FaHome,
    FaBoxes,
    FaExclamationTriangle,
    FaChartBar,
    FaBell,
    FaCog
} from "react-icons/fa";

function Sidebar(){

    return(

        <aside className="sidebar">

            <div className="logo">

                NA<span>O</span>

            </div>

            <nav className="sidebar-menu">

                <NavLink to="/">

                    <FaHome/>

                    Dashboard

                </NavLink>

                <NavLink to="/materials">

                    <FaBoxes/>

                    Materials

                </NavLink>

                <NavLink to="/risks">

                    <FaExclamationTriangle/>

                    Risks

                </NavLink>

                <NavLink to="/reports" className="sidebar-item">

                   <FaChartBar />
                   
                   <span>Reports</span>

                </NavLink>

                <div className="disabled-link">

                    <FaBell/>

                    Alerts

                </div>

                <div className="disabled-link">

                    <FaCog/>

                    Settings

                </div>

            </nav>

        </aside>

    )

}

export default Sidebar;