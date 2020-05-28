import React, { useState } from "react";
import { icons } from "assets";
import { menus } from "../constants";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [menuActive, setMenuActive] = useState(menus[0].id);

  return (
    <nav id="sidebar" className="container-sidebar">
      <div className="sidebar-header">
        <img src={icons.logo} alt="logo" />
      </div>

      <div className="container-account">
        <div className="account-top">
          <div className="avatar">
            <img src={icons.noAvatar} alt="account" className="w-100 h-100" />
          </div>
          <span>Name</span>
        </div>
        <div className="account-bottom">
          <p>HTML 퍼블리싱</p>
          <p>빠른 견적 시스템</p>
        </div>
      </div>

      <ul className="list-unstyled menu ">
        {menus.map((menu) => (
          <li
            className={menuActive === menu.id ? "active" : ""}
            key={`menu-${menu.id}`}
          >
            <NavLink to={menu.route} onClick={() => setMenuActive(menu.id)}>
              <div className="menu-icon">
                {menu.icon && <img src={menu.icon} alt="logo" />}
              </div>

              <span>{menu.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
