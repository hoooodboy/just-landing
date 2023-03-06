import React from "react";
import styled from "styled-components";

import { ReactComponent as Logo } from "../../assets/logo.svg";

const Index = () => {
  return (
    <PageBlock>
      <HeaderBlock>
        <Logo />
        <NavBlock>
          <Nav isActive={window.location.pathname === "/"}>Home</Nav>
          <Nav isActive={window.location.pathname === "portfolio"}>
            PORTFOLIO
          </Nav>
          <Nav isActive={window.location.pathname === "member"}>MEMBER</Nav>
          <Nav isActive={window.location.pathname === "2023"}>2023</Nav>
          <Nav isActive={window.location.pathname === "faq"}>FAQ</Nav>
        </NavBlock>
      </HeaderBlock>
    </PageBlock>
  );
};

const PageBlock = styled.div`
  width: 100%;
  height: 100%;
`;

const HeaderBlock = styled.div`
  background: #111;
  padding: 0 300px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBlock = styled.div`
  display: flex;
  gap: 67px;
`;

const Nav = styled.div`
  color: ${(props) => (props.isActive ? "#FAA71B" : "#fff")};
`;

export default Index;
