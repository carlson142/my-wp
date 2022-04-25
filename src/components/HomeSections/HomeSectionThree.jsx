import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import pr1 from "../../img/projects/fyloLP.jpg";
import pr2 from "../../img/projects/photosnap.png";
import pr3 from "../../img/projects/galleria.png";
import { useNavigate } from "react-router-dom";

const Container = styled.section`
  padding: 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10rem 5rem;
  }

  @media (max-width: 450px) {
    padding: 10rem 2rem 5rem 2rem;
  }
`;

const Title = styled.h2`
  font-size: 4rem;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const ProjectsCont = styled.div`
  width: 70vw;

  display: flex;
  justify-content: space-between;

  margin-top: 8rem;

  @media (max-width: 1440px) {
    width: 100%;
  }

  @media (max-width: 1155px) {
    flex-direction: column;
  }
`;

const Project = styled.div`
  @media (max-width: 1155px) {
    :not(:last-child) {
      margin-bottom: 5rem;
    }
  }
`;

const ProjectLink = styled.a`
  text-decoration: none;
`;

const ProjectBox = styled(motion.div)`
  height: 30rem;
  width: 30rem;

  border: 8px solid var(--color-ui-base);
  margin-bottom: 3rem;

  cursor: pointer;

  @media (max-width: 1155px) {
    width: 100%;
    height: 50rem;
  }
`;

const ProjectImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ProjectType = styled.h4`
  font-size: 1.5rem;
  text-transform: capitalize;

  margin-bottom: 2rem;
`;

const ProjectName = styled.h3`
  font-size: 2rem;
  text-transform: capitalize;
`;

const BtnCont = styled.div`
  margin-top: 7rem;
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  cursor: pointer;

  font-size: 1.6rem;
  font-family: inherit;
  color: var(--color-text);
  text-transform: uppercase;

  background-color: transparent;
  border: 1px solid var(--color-text);
`;

const HomeSectionThree = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>my latest projects</Title>

      <ProjectsCont>
        <Project>
          <ProjectLink
            href="https://carlson142.github.io/photosnap/"
            target="_blank"
          >
            <ProjectBox
              whileHover={{ scale: 1.2 }}
              transition={{ type: "tween" }}
            >
              <ProjectImg src={pr2} alt="Photosnap LP" />
            </ProjectBox>
          </ProjectLink>

          <ProjectType>landing page</ProjectType>
          <ProjectName>Photosnap landing page</ProjectName>
        </Project>

        <Project>
          <ProjectLink
            href="https://carlson142.github.io/gallery/"
            target="_blank"
          >
            <ProjectBox
              whileHover={{ scale: 1.2 }}
              transition={{ type: "tween" }}
            >
              <ProjectImg src={pr3} alt="Galleria" />
            </ProjectBox>
          </ProjectLink>

          <ProjectType>component</ProjectType>
          <ProjectName>Galleria site</ProjectName>
        </Project>

        <Project>
          <ProjectLink
            href="https://carlson142.github.io/Fylo-landing-page-with-dark-theme/ "
            target="_blank"
          >
            <ProjectBox
              whileHover={{ scale: 1.2 }}
              transition={{ type: "tween" }}
            >
              <ProjectImg src={pr1} alt="Fylo LP" />
            </ProjectBox>
          </ProjectLink>

          <ProjectType>landing page</ProjectType>
          <ProjectName>fylo landing page</ProjectName>
        </Project>
      </ProjectsCont>

      <BtnCont>
        <Button
          whileHover={{ scale: 1.2 }}
          transition={{ type: "tween" }}
          onClick={() => {
            navigate("/works");
          }}
        >
          view all
        </Button>
      </BtnCont>
    </Container>
  );
};

export default HomeSectionThree;
