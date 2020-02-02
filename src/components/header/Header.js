import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
// import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrap>
      <Logo />
      <NavWrap>
        <NavItem href="/">Catalog</NavItem>
        <NavItem href="https://fonts.google.com/featured" target="blank">
          Featured
        </NavItem>
        <NavItem
          href="https://design.google/library/google-fonts/?utm_source=Google&utm_medium=Fonts&utm_campaign=Article%20Tab"
          target="blank"
        >
          Articles
        </NavItem>
        <NavItem href="https://fonts.google.com/about" target="blank">
          About
        </NavItem>
      </NavWrap>
    </HeaderWrap>
  );
};

//* styled-component < 💅>

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  border-bottom: 1px solid #000;
  border-color: rgba(0, 0, 0, 0.14);
`;

const NavWrap = styled.nav`
  display: flex;
`;
const NavItem = styled.a`
  /* When active --> color: #ff5252; */
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-left: 32px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
`;

export default Header;
