import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.8);

  height: 100vh;
  width: 100vw;

  z-index: 1000;
`;

const Block = styled(motion.div)`
  /* height: 50vh; */
  width: 100vw;

  margin: 0 auto;
  background-color: white;

  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 5rem;
  border-bottom: 1px solid var(--color-light-gray);
`;

const LogoCont = styled(Link).attrs({ to: "/photosnap/" })``;

const Logo = styled.img``;

const Mid = styled.div`
  padding: 5rem 0;

  border-bottom: 1px solid var(--color-light-gray);
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Item = styled(Link)`
  text-decoration: none;
  color: black;

  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  :not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const ContianerVariants = {
  initial: {
    x: 770,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: 770,
    opacity: 0,
    transition: {
      delay: 0.5,
    },
  },
};

const BlockVariants = {
  initial: {
    y: -500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -500,
    transition: {
      duration: 0.5,
    },
  },
};

const MobileMenu = ({ toggleMenu }) => {
  const [block, setBlock] = useState(true);

  const close = () => {
    setBlock((prev) => !prev);
    toggleMenu();
  };

  return (
    <Container
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={ContianerVariants}
      transition={{ duration: 0.5, type: "tween" }}
    >
      <AnimatePresence>
        {block && (
          <Block
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            variants={BlockVariants}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* TOP */}
            <Top>
              <LogoCont>{/* <Logo src={logo} onClick={close} /> */}</LogoCont>

              <IoCloseOutline size={25} onClick={close} />
            </Top>

            {/* MID */}
            <Mid>
              <List>
                <Item to="/my-wp" onClick={close}>
                  Home
                </Item>
                <Item to="/works" onClick={close}>
                  Works
                </Item>
              </List>
            </Mid>
          </Block>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default MobileMenu;
