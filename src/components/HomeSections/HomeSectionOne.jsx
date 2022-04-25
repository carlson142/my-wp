import React from "react";
import styled from "styled-components";

import hero from "../../img/mariah-hewines-wbVgvKAqCnY-unsplash.jpg";

const Container = styled.section`
  display: flex;
  flex-direction: column;

  padding: 10rem;

  @media (max-width: 768px) {
    padding: 5rem;
  }
`;

const TitleCont = styled.div`
  align-self: center;

  display: flex;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 700;

  display: inline-block;
  background-image: linear-gradient(to bottom, #005bbb, #ffd500);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 450px) {
    font-size: 3rem;
  }
`;

const Component = styled.div`
  display: flex;
  align-items: center;

  margin-top: 10rem;

  @media (max-width: 1155px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`;

const Left = styled.div`
  width: 25vw;

  @media (max-width: 1155px) {
    width: 100vw;
    display: flex;
    justify-content: center;

    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Mid = styled.div`
  width: 50vw;

  display: flex;
  justify-content: center;

  @media (max-width: 1155px) {
    width: 100vw;

    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 5rem;
  }

  @media (max-width: 450px) {
    padding: 0 3rem;
  }
`;

const PhotoCont = styled.div`
  border: 2px solid var(--color-ui-base);
  border-radius: 20rem;

  min-height: 60rem;
  width: 70%;

  padding: 2rem;

  overflow: hidden;

  @media (max-width: 1440px) {
    min-width: 40rem;
    max-width: 45rem;
  }

  @media (max-width: 1155px) {
    min-width: 70rem;
    max-width: 80rem;

    max-height: 40rem;

    border-radius: 0;
  }

  @media (max-width: 768px) {
    min-width: 100%;
    max-height: 30rem;
  }

  @media (max-width: 450px) {
    padding: 0rem;
    border: none;
  }
`;

const Photo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 20rem;

  @media (max-width: 1155px) {
    border-radius: 0;
  }
`;

const Right = styled.div`
  width: 25vw;

  @media (max-width: 1155px) {
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.end ? "flex-end" : "flex-start")};

  :not(:last-child) {
    margin-bottom: 4rem;
  }

  @media (max-width: 1155px) {
    align-items: center;

    :not(:last-child) {
      margin-bottom: 0rem;
      margin-right: 3rem;
    }
  }

  @media (max-width: 768px) {
    :not(:last-child) {
      margin-bottom: 3rem;
      margin-right: 0rem;
    }
  }
`;

const CategName = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-ui-base);

  margin-bottom: 2rem;
`;

const CategText = styled.h4`
  font-size: ${(props) => (props.b ? "5rem" : "1.5rem")};
  line-height: 1.6;
  width: 60%;

  text-align: ${(props) => (props.b ? "end" : "start")};

  @media (max-width: 1155px) {
    width: 80%;
    text-align: center;
  }
`;

const HomeSectionOne = () => {
  return (
    <Container>
      <TitleCont>
        <Title>
          Dmitry Oleynick
          <br /> Frontend Developer
          <br /> Based in Ukraine
        </Title>
      </TitleCont>

      <Component>
        <Left>
          <Block>
            <CategName>About myself</CategName>

            <CategText>
              Hi! I am 28 y.o. Frontend Developer from Ukraine!
            </CategText>
          </Block>

          <Block>
            <CategName>Contact</CategName>

            <CategText>
              ISeeYourFace777@gmail.com <br />
              +380993593431
            </CategText>
          </Block>

          <Block>
            <CategName>Services</CategName>

            <CategText>
              Websites, applications, services. <br />
              Layout of sites, promotional pages, binding of scripts. <br />
              Responsive design.
            </CategText>
          </Block>
        </Left>

        <Mid>
          <PhotoCont>
            <Photo src={hero} alt="hero" />
          </PhotoCont>
        </Mid>

        <Right>
          <Block end>
            <CategName>Years of experience</CategName>

            <CategText b>1</CategText>
          </Block>

          <Block end>
            <CategName>satisfaction clients</CategName>

            <CategText b>100%</CategText>
          </Block>

          <Block end>
            <CategName>projects done</CategName>

            <CategText b>6</CategText>
          </Block>
        </Right>
      </Component>
    </Container>
  );
};

export default HomeSectionOne;
