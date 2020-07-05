import React from "react";
import { NavLink } from 'react-router-dom';
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader isMobile={window.isMobile}>
      <div className="menu">
        <div className="topnav" id="myTopnav">
          <NavLink to="/">Products</NavLink>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header;