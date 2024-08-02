import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="images/cta-logo-one.svg" alt="" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  height: 100vh;
  overflow: hidden;
`;

const Content = styled.div`
  margin-bottom: 10vh;
  padding: 80px 40px;
  width: 100%;
  min-height: 100vh;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BgImage = styled.div`
  height: 100%;

  background: url("/images/login-background.jpg") no-repeat center center/cover;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;
const CTA = styled.div`
  margin-top: 0;
  margin-bottom: 2vw;
  margin-left: auto;
  margin-right: auto;
  max-width: 650px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-wrap: wrap;

  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

const CTALogoOne = styled.img`
  display: block;
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  letter-spacing: 1.5px;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 12px;
  margin: 0 0 30px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  display: inline-block;
  margin-bottom: 20px;
  max-width: 600px;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;
