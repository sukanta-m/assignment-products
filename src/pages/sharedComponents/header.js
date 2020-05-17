import React from "react";
import { NavLink } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styled from "styled-components";

const Header = () => {
  const rightMenu = (
    <Menu>
      <Menu.Item key="0">
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <StyledHeader>
      <div>
        <img src="/" alt="Logo"/>
      </div>
      <div className="menu">
        <div className="topnav" id="myTopnav">
          <NavLink to="/">Dashboard</NavLink>
        </div>
        <Dropdown overlay={rightMenu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Profile <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
display: flex;
justify-content: space-between;
padding: 10px 50px;
background-color: #333;
align-items: center;
.menu {
  display: flex;
  align-items: center;
}
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #4CAF50;
  color: white;
}

.topnav .icon {
  display: none;
}

.ant-dropdown-link {
  color: white;
    margin-left: 50px;
}
@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
`;

export default Header;