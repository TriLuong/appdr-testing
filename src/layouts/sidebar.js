import React, { useState, useEffect } from "react";
import { icons } from "assets";
import { menus } from "../constants";
import { NavLink, withRouter } from "react-router-dom";

const Sidebar = (props) => {
  const [menuActive, setMenuActive] = useState(props.location.pathname);

  useEffect(() => {
    if (props.location.pathname !== menuActive) {
      setMenuActive(props.location.pathname);
    }
  }, [props.location.pathname, menuActive]);

  const onChangeMenu = (event) => {
    const { to } = event.target;
    setMenuActive(to);
  };

  return (
    <nav
      id="sidebar"
      className="container-sidebar position-fixed h-100 overflow-auto"
    >
      <div className="sidebar-header">
        <img src={icons.logo} alt="logo" />
      </div>

      <div className="container-account">
        <div className="account-top">
          <div className="avatar">
            <img src={icons.noAvatar} alt="account" className="w-100 h-100" />
          </div>
          <span className="text-sidebar">홍길동님</span>
        </div>
        <div className="account-bottom">
          <p>HTML 퍼블리싱</p>
          <p>빠른 견적 시스템</p>
        </div>
      </div>

      <ul className="list-unstyled menu ">
        {menus.map((menu) => (
          <li
            className={menuActive === menu.route ? "active" : ""}
            key={`menu-${menu.route}`}
          >
            <NavLink to={menu.route} onClick={onChangeMenu}>
              <div className="menu-icon">
                {menu.icon && <img src={menu.icon} alt="logo" />}
              </div>

              <span className="text-sidebar">{menu.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default withRouter(Sidebar);
