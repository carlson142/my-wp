import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { IoLogoInstagram, IoLogoGithub, IoMenuSharp } from "react-icons/io5";
import "./Header.scss";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

const Container = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 3rem 10rem;

  box-shadow: var(--shadow);

  @media (max-width: 768px) {
    padding: 3rem 5rem;
  }

  @media (max-width: 450px) {
    padding: 3rem;
  }
`;

const List = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled(Link)`
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 700;

  color: var(--color-text);
  position: relative;

  :not(:last-child) {
    margin-right: 2rem;
  }

  ::after {
    content: "";
    display: block;

    position: absolute;
    bottom: -1rem;

    height: 1px;
    width: 100%;
    background-color: var(--color-ui-base);

    opacity: 0;
    transition: var(--tr);
  }

  :hover::after {
    opacity: 1;
  }
`;

const ToggleCont = styled.div`
  display: flex;
  align-items: center;
`;

const Theme = styled.span`
  font-size: 1.6rem;
`;

const Input = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  height: 3rem;
  width: 6rem;

  margin-right: 2rem;
  margin-left: 2rem;
`;

const Toggle = styled.span`
  position: absolute;
  cursor: pointer;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  border-radius: 2rem;
  background-color: var(--color-ui-base);

  ::after {
    content: "";
    display: block;

    position: absolute;
    left: ${(props) => (props.toggle === false ? "0.5rem" : "3.3rem")};
    top: 50%;
    transform: translate(0, -50%);

    height: 2.2rem;
    width: 2.2rem;
    background-color: var(--color-text);
    border-radius: 50%;

    transition: var(--tr);
  }
`;

const Socials = styled.ul`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialCont = styled.a`
  text-decoration: none;
  :not(:last-child) {
    margin-right: 2rem;
  }
`;

const HambCont = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = ({ toggleTheme }) => {
  const [toggle, setToggle] = useState(false);

  const [mobile, setMobile] = useState(false);

  const toggleMenu = () => {
    setMobile(!mobile);
  };

  return (
    <Container>
      <List>
        <Item to="/my-wp">Home</Item> {/* ЗАМЕНИТЬ ПРИ ДЕПЛОЕ! */}
        <Item to="/works">Works</Item>
      </List>

      <ToggleCont>
        <Theme>Light</Theme>

        <Label>
          <Input type="checkbox" />
          <Toggle
            toggle={toggle}
            onClick={() => {
              toggleTheme();
              setToggle(!toggle);
            }}
          />
        </Label>

        <Theme>Dark</Theme>
      </ToggleCont>

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

      <HambCont>
        <IoMenuSharp size={25} onClick={toggleMenu} />
      </HambCont>

      <AnimatePresence>
        {mobile && <MobileMenu toggleMenu={toggleMenu} />}
      </AnimatePresence>
    </Container>
  );
};

export default Header;
