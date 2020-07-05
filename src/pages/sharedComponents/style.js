import styled from "styled-components";

export const StyledHeader = styled.div`
display: flex;
justify-content: space-between;
padding: ${({isMobile}) => isMobile ? "10px 5px" : "10px 50px"};
background-color: #333;
align-items: center;
.menu {
  display: flex;
  align-items: center;
  width: ${({isMobile}) => isMobile ? "auto" : "80%"};
  display: flex;
  justify-content: ${({isMobile}) => isMobile ? "flex-end" : "space-between"};
}
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a.active {
  text-decoration: underline;
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