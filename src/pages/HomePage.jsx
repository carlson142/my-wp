import React from "react";
import styled from "styled-components";
import AnimatePage from "../components/AnimatePage";
import HomeSectionOne from "../components/HomeSections/HomeSectionOne";
import HomeSectionThree from "../components/HomeSections/HomeSectionThree";
import HomeSectionTwo from "../components/HomeSections/HomeSectionTwo";

const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

const HomePage = () => {
  return (
    <AnimatePage>
      <Container>
        <HomeSectionOne />
        <HomeSectionTwo />
        <HomeSectionThree />
      </Container>
    </AnimatePage>
  );
};

export default HomePage;
