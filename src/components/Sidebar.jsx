import { Link } from "react-router-dom";

import {
  FaHome,
  FaRobot,
  FaFolder,
  FaFileAlt,
  FaEnvelope,
  FaFlask,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>E.A.R.L OS</h2>
        <div className="version-tag">Version 1.0 // Developer Dashboard</div>
      </div>

      <nav>
        <Link to="/">
          <FaHome /> System Overview
        </Link>

        <Link to="/assistant">
          <FaRobot /> Command Center
        </Link>

        <Link to="/projects">
          <FaFolder /> Project Database
        </Link>

        <Link to="/research">
          <FaFlask /> Research & Dev
        </Link>

        <Link to="/cv">
          <FaFileAlt /> Personnel File
        </Link>

        <Link to="/contact">
          <FaEnvelope /> Contact
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;