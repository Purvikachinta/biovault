import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  UserRound,
  FileText,
  Pill,
  CalendarDays,
  MessageCircle,
  Brain,
  Share2,
  ShieldAlert,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Health Profile",
    path: "/profile",
    icon: UserRound,
  },
  {
    name: "Medical Records",
    path: "/records",
    icon: FileText,
  },
  {
    name: "Medications",
    path: "/medications",
    icon: Pill,
  },
  {
    name: "Appointments",
    path: "/appointments",
    icon: CalendarDays,
  },
  {
    name: "AI Assistant",
    path: "/ai-assistant",
    icon: MessageCircle,
  },
  {
    name: "Health Insights",
    path: "/insights",
    icon: Brain,
  },
  {
    name: "Secure Sharing",
    path: "/sharing",
    icon: Share2,
  },
  {
    name: "Emergency Card",
    path: "/emergency",
    icon: ShieldAlert,
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="brand">
        <div className="brand-icon">
          +
        </div>

        <div>
          <h2>BioVault</h2>
          <span>Health Companion</span>
        </div>
      </div>

      <nav className="sidebar-nav">

        <p className="nav-label">MAIN MENU</p>

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}

        <p className="nav-label settings-label">SYSTEM</p>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <Settings size={19} />
          <span>Settings</span>
        </NavLink>

      </nav>

      <div className="sidebar-bottom">

        <div className="security-box">
          <ShieldAlert size={20} />

          <div>
            <strong>Vault Protected</strong>
            <span>Your data is private</span>
          </div>
        </div>

        <div className="user-mini">

          <div className="avatar">
            PS
          </div>

          <div>
            <strong>Purvika</strong>
            <span>My Account</span>
          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;