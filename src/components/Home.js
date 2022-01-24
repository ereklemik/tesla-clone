import React from "react";
import styled from "styled-components";
import Section from "./Section";
const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      ></Section>
       <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      ></Section>
       <Section
        title="Lowest Cost Solan Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      ></Section>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  color: red;
`;
