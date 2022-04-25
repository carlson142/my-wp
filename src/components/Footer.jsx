import React from "react";
import styled from "styled-components";

import { AiOutlineCopyright } from "react-icons/ai";
import { IoLogoGithub, IoLogoInstagram } from "react-icons/io5";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 3rem 10rem;

  box-shadow: var(--shadow);

  @media (max-width: 768px) {
    padding: 2rem 5rem;

    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  display: flex;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Text = styled.p`
  font-size: 1.6rem;
`;

const Mid = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Right = styled.div``;

const Socials = styled.ul`
  display: flex;
`;

const SocialCont = styled.a`
  text-decoration: none;
  :not(:last-child) {
    margin-right: 2rem;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <AiOutlineCopyright size={20} />
        <Text>2022 Ukraine. Stop War! </Text>
      </Left>

      <Mid>
        <Text>iseeyourface777@gmail.com</Text>
      </Mid>

      <Right>
        <Socials>
          <SocialCont
            href="https://instagram.com/d1mant4eg?utm_medium=copy_link"
            target="_blank"
          >
            <IoLogoInstagram className="icons ig" />
          </SocialCont>
          <SocialCont href="https://github.com/carlson142" target="_blank">
            <IoLogoGithub className="icons gh" />
          </SocialCont>
        </Socials>
      </Right>
    </Container>
  );
};

export default Footer;
