import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import pr1 from "../img/projects/photosnap.png";
import pr2 from "../img/projects/galleria.png";
import pr3 from "../img/projects/fyloLP.jpg";
import pr4 from "../img/projects/apple-w.png";
import pr5 from "../img/projects/bookmark.png";
import pr6 from "../img/projects/room.png";
import pr7 from "../img/projects/my team-1.png";
import AnimatePage from "../components/AnimatePage";

const Container = styled.section`
  width: 100vw;

  padding: 5rem 10rem;

  @media (max-width: 768px) {
    padding: 5rem;
  }

  @media (max-width: 450px) {
    padding: 5rem 3rem;
  }
`;

const Component = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 5rem;

  @media (max-width: 1155px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Project = styled.div`
  height: 100%;
  width: 100%;
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

  @media (max-width: 1440px) {
    height: 25rem;
    width: 100%;
  }

  @media (max-width: 768px) {
    height: 35rem;
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

const WorksPage = () => {
  return (
    <AnimatePage>
      <Container>
        <Component>
          <Project>
            <ProjectLink
              href="https://carlson142.github.io/my-team-wp/"
              target="_blank"
            >
              <ProjectBox
                whileHover={{ scale: 1.2 }}
                transition={{ type: "tween" }}
              >
                <ProjectImg src={pr7} alt="My team" />
              </ProjectBox>
            </ProjectLink>

            <ProjectType>multi-page website</ProjectType>
            <ProjectName>My Team</ProjectName>
          </Project>

          <Project>
            <ProjectLink
              href="https://carlson142.github.io/photosnap/"
              target="_blank"
            >
              <ProjectBox
                whileHover={{ scale: 1.2 }}
                transition={{ type: "tween" }}
              >
                <ProjectImg src={pr1} alt="Photosnap LP" />
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
                <ProjectImg src={pr2} alt="Galleria" />
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
                <ProjectImg src={pr3} alt="Fylo LP" />
              </ProjectBox>
            </ProjectLink>

            <ProjectType>landing page</ProjectType>
            <ProjectName>fylo landing page</ProjectName>
          </Project>

          <Project>
            <ProjectLink
              href=" https://carlson142.github.io/apple-watch-lp/"
              target="_blank"
            >
              <ProjectBox
                whileHover={{ scale: 1.2 }}
                transition={{ type: "tween" }}
              >
                <ProjectImg src={pr4} alt="Fylo LP" />
              </ProjectBox>
            </ProjectLink>

            <ProjectType>landing page</ProjectType>
            <ProjectName>apple watch landing page</ProjectName>
          </Project>

          <Project>
            <ProjectLink
              href=" https://carlson142.github.io/bookmark/"
              target="_blank"
            >
              <ProjectBox
                whileHover={{ scale: 1.2 }}
                transition={{ type: "tween" }}
              >
                <ProjectImg src={pr5} alt="Fylo LP" />
              </ProjectBox>
            </ProjectLink>

            <ProjectType>landing page</ProjectType>
            <ProjectName>bookmark landing page</ProjectName>
          </Project>

          <Project>
            <ProjectLink
              href=" https://carlson142.github.io/room-hp/"
              target="_blank"
            >
              <ProjectBox
                whileHover={{ scale: 1.2 }}
                transition={{ type: "tween" }}
              >
                <ProjectImg src={pr6} alt="Fylo LP" />
              </ProjectBox>
            </ProjectLink>

            <ProjectType>homepage</ProjectType>
            <ProjectName>room homepage</ProjectName>
          </Project>
        </Component>
      </Container>
    </AnimatePage>
  );
};

export default WorksPage;
