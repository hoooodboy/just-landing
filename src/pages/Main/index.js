import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as FooterLogo } from "../../assets/footer-logo.svg";
import { ReactComponent as YoutubeLogo } from "../../assets/youtube.svg";
import { ReactComponent as InstaLogo } from "../../assets/insta.svg";
import { ReactComponent as GithubLogo } from "../../assets/github.svg";
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
          src={require("../../assets/firstSectionBg.png")}
        />
        <MainBgOpacity />
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
      <Section>
        <SecondBg
          alt="main-flight"
          src={require("../../assets/secondSectionBg.png")}
        />
        <SecondCaptionBlock>
          그리고 2023년,
          <SubTitle>
            <p>JUST</p>는 새로운 여정을 떠나려 합니다.
            <br />
            여러분과 함께요.
          </SubTitle>
        </SecondCaptionBlock>
      </Section>
      <PriseSection>
        <PriseTitle>
          <p>JUST</p>의 1년
        </PriseTitle>
        <ProjectList>
          <ProjectBlock>
            <ProjectTn src={require("../../assets/prise1.png")} />
            <ProjectTitle>
              JUST는 2022년에 만들어졌지만
              <br /> 카로로, 엄랭, 이루, ZEPING 등<br /> 무려 43개의 프로젝트를
              이뤄냈어요.
            </ProjectTitle>
            <ProjectLink>view more {">"}</ProjectLink>
          </ProjectBlock>
          <ProjectBlock>
            <ProjectTn src={require("../../assets/prise2.png")} />
            <ProjectTitle>
              JUST는 많은 프로젝트 개수만큼
              <br />
              상도 많이 받았어요!!
              <br />
              정말 단지, JUST 했을 뿐인데!
              <br />
            </ProjectTitle>
            <ProjectLink>view more {">"}</ProjectLink>
          </ProjectBlock>
          <ProjectBlock>
            <ProjectTn src={require("../../assets/prise3.png")} />
            <ProjectTitle>
              이렇게 다양한
              <br />
              대회와 프로젝트들로
              <br />
              JUST는 언론에 많이 노출되었어요.
              <br />
            </ProjectTitle>
            <ProjectLink>view more {">"}</ProjectLink>
          </ProjectBlock>
        </ProjectList>
      </PriseSection>
      <FooterBlock>
        <FooterWrapper>
          <FooterLogo />
          <Links>
            <YoutubeLogo />
            <InstaLogo />
            <GithubLogo />
          </Links>
        </FooterWrapper>
      </FooterBlock>
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
  z-index: 10;
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

  position: relative;
  background: #111;
`;

const MainFlight = styled.img`
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  /* position: absolute; */
  right: 0;
`;

const MainBgOpacity = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50px;
  box-shadow: inset 0 -200px 250px #111 !important;
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

const SecondBg = styled.img`
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  filter: blur(15px);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const SecondCaptionBlock = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #111;
  opacity: 0.7;
  color: #fff;
  /* padding: 100px 0 200px 0; */

  position: absolute;
  top: 0;

  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: -0.02em;

  color: #ffffff;

  /* text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
`;

const SubTitle = styled.div`
  display: flex;
  text-align: center;

  margin-top: 40px;
  line-height: 29px;

  & > p {
    margin: 0;

    color: #faa71b;
  }
`;

const PriseSection = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: #222;
  padding: 120px 0;
`;

const PriseTitle = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;

  letter-spacing: -0.02em;

  color: #fff;

  & > p {
    margin: 0;
    color: #faa71b;
  }
`;

const ProjectList = styled.div`
  width: 1360px;
  display: flex;
  justify-content: space-between;
`;

const ProjectBlock = styled.div``;

const ProjectTn = styled.img`
  width: 180px;
  height: 180px;
`;

const ProjectTitle = styled.div`
  margin-top: 40px;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.02em;

  color: #ffffff;

  & > p {
    margin: 0;
    font-weight: 700;
    color: #faa71b;
  }
`;

const ProjectLink = styled.div`
  margin-top: 12px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  letter-spacing: -0.02em;

  color: #aaaaaa;
`;

const FooterBlock = styled.div`
  width: 100%;
`;

const FooterWrapper = styled.div`
  padding: 120px 320px;
  display: flex;
  justify-content: space-between;
`;

const Links = styled.div`
  width: 180px;
  display: flex;

  justify-content: space-between;
`;

export default Index;
