import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
const Section = ({
  title,
  description,
  rightBtnText,
  leftBtnText,
  backgroundImg,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <Arrow>
          <DownArrow src="/images/down-arrow.svg" />
        </Arrow>
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("images/model-3.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  h1 {
    padding-bottom: 7px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;

  cursor: pointer;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  color: black;
  opacity: 0.65px;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;

  cursor: pointer;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
`;
