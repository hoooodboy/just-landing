import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
// import { ReactComponent as MainFlight } from "../../assets/main-flight.svg";

const Index = () => {
  return (
    <PageBlock>
      <HeaderBlock>
        <HeaderWrapper>
          <Logo />
          <NavBlock>
            <Nav isActive={window.location.pathname === "/"} to="/">
              Home
            </Nav>
            <Nav
              isActive={window.location.pathname === "/portfolio"}
              to="/portfolio"
            >
              PORTFOLIO
            </Nav>
            <Nav isActive={window.location.pathname === "/member"} to="/member">
              MEMBER
            </Nav>
            <Nav isActive={window.location.pathname === "/2023"} to="/2023">
              2023
            </Nav>
            <Nav isActive={window.location.pathname === "/faq"} to="/faq">
              FAQ
            </Nav>
          </NavBlock>
        </HeaderWrapper>
      </HeaderBlock>
      <Section>
        <MainFlight
          alt="main-flight"
          src={require("../../assets/mainFlight.png")}
        />
        <CaptionWrapper>
          <MainCaptionWrapper>
            <MainCaption>
              <p>J</p>O<p>U</p>RNEY&nbsp;STARTS
            </MainCaption>
            <MainCaption>FROM ME</MainCaption>
          </MainCaptionWrapper>
          <SubCaption>
            Journey starts from here from you.
            <br />
            Use and develop your ability with us,
            <br />
            Solve problems to create value.
            <br />
            Travel will just begin now.
            <br />
          </SubCaption>
        </CaptionWrapper>
      </Section>
    </PageBlock>
  );
};

const PageBlock = styled.div`
  width: 100%;
  height: 100%;
  background: #111;
`;

const HeaderBlock = styled.div`
  width: 100%;
  background: #111;

  position: fixed;
  top: 0px;
`;

const HeaderWrapper = styled.div`
  padding: 0 300px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBlock = styled.div`
  display: flex;
  gap: 67px;
`;

const Nav = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.isActive ? "#FAA71B" : "#fff")};
  font-weight: ${(props) => (props.isActive ? "700" : "400")};
`;

const Section = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const MainFlight = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CaptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 144px;
  top: calc(50% - 100px);
`;

const MainCaptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainCaption = styled.div`
  margin: 0;
  display: flex;
  font-size: 96px;
  line-height: 115px;
  /* letter-spacing: -0.02em; */
  text-align: start;

  color: #fff;

  & > p {
    margin: 0;

    color: #faa71b;
  }
`;

const SubCaption = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.02em;

  color: #aaaaaa;
`;

export default Index;
