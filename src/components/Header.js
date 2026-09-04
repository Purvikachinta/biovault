import React from "react";
import { Search, Bell } from "lucide-react";

function Header() {
  return (
    <header className="top-header">

      <div className="header-search">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search your health records..."
        />
      </div>

      <div className="header-right">

        <button className="notification-button">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <div className="header-profile">
          <div className="avatar small">
            PS
          </div>

          <div>
            <strong>Purvika</strong>
            <span>My BioVault</span>
          </div>
        </div>

      </div>

    </header>
  );
}

export default Header;