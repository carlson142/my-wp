import React from "react";
import styled from "styled-components";

import html from "../../img/skills/html-5.svg";
import css from "../../img/skills/css3-svgrepo-com.svg";
import js from "../../img/skills/js.svg";
import react from "../../img/skills/react-svgrepo-com.svg";
import sc from "../../img/skills/styled-svgrepo-com.svg";
import redux from "../../img/skills/redux-svgrepo-com.svg";
import fm from "../../img/skills/fm.png";

const Container = styled.section`
  padding: 5rem 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-top: 1px solid var(--color-text);
  border-bottom: 1px solid var(--color-text);

  @media (max-width: 1155px) {
    padding: 5rem;
  }

  @media (max-width: 450px) {
    padding: 5rem 3rem;
  }
`;

const Title = styled.h2`
  font-size: 4rem;
  text-transform: capitalize;
`;

const SkillsCont = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 5rem;

  @media (max-width: 1155px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-gap: 2rem;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, auto);
    grid-gap: 2rem;
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  :not(:last-child) {
    margin-right: 5rem;
  }

  @media (max-width: 1155px) {
    :not(:last-child) {
      margin-right: 0rem;
    }
  }

  @media (max-width: 768px) {
    :not(:last-child) {
      margin-bottom: 3rem;
    }
  }
`;

const SkillBox = styled.div`
  width: 12rem;
  height: 17rem;

  background-color: var(--color-ui-base);
  border-radius: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillImg = styled.img`
  height: 70%;
  width: 70%;
  object-fit: contain;
`;

const SkillName = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;

  margin-top: 2rem;

  text-align: center;
`;

const HomeSectionTwo = () => {
  return (
    <Container>
      <Title>my skills</Title>

      <SkillsCont>
        <Skill>
          <SkillBox>
            <SkillImg src={html} />
          </SkillBox>

          <SkillName>html</SkillName>
        </Skill>

        <Skill>
          <SkillBox>
            <SkillImg src={css} />
          </SkillBox>

          <SkillName>css</SkillName>
        </Skill>

        <Skill>
          <SkillBox>
            <SkillImg src={js} />
          </SkillBox>

          <SkillName>javascript</SkillName>
        </Skill>

        <Skill>
          <SkillBox>
            <SkillImg src={react} />
          </SkillBox>

          <SkillName>react</SkillName>
        </Skill>

        <Skill>
          <SkillBox>
            <SkillImg src={sc} />
          </SkillBox>

          <SkillName>styled components</SkillName>
        </Skill>

        <Skill>
          <SkillBox>
            <SkillImg src={redux} />
          </SkillBox>

          <SkillName>redux</SkillName>
        </Skill>

        <Skill>
          <SkillBox>
            <SkillImg src={fm} />
          </SkillBox>

          <SkillName>framer motion</SkillName>
        </Skill>
      </SkillsCont>
    </Container>
  );
};

export default HomeSectionTwo;
