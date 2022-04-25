import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)``;

const animation = {
  initial: { x: 1000, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -1000, opacity: 0 },
};

const AnimatePage = ({ children }) => {
  return (
    <Container
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={animation}
      transition={{ duration: 1, type: "tween" }}
    >
      {children}
    </Container>
  );
};

export default AnimatePage;
