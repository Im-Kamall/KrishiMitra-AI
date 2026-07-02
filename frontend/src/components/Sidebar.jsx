import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaCloudSun,
  FaLeaf,
  FaCamera,
  FaRobot,
  FaUserMd,
  FaSeedling,
} from "react-icons/fa";

function Sidebar() {
  const links = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/dashboard", label: "Analytics", icon: <FaChartLine /> },
    { path: "/register", label: "Farmers", icon: <FaSeedling /> },
    { path: "/crop", label: "Crop AI", icon: <FaLeaf /> },
    { path: "/weather", label: "Weather", icon: <FaCloudSun /> },
    { path: "/disease", label: "Image AI", icon: <FaCamera /> },
    { path: "/chatbot", label: "AI Chatbot", icon: <FaRobot /> },
    { path: "/expert", label: "Experts", icon: <FaUserMd /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">🌾 KrishiMitra</div>

      <div className="sidebar-links">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <span>{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;