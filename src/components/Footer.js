import React from "react";
import styled from "styled-components";
import CopyrightIcon from "@mui/icons-material/Copyright";
function Footer() {
  return (
    <Container>
      <li>
        <a href="#">
          Tesla 2022 <Copyright />
        </a>
      </li>
      <li>
        <a href="#">Privacy & Legal</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Careers</a>
      </li>
      <li>
        <a href="#">News</a>
      </li>
      <li>
        <a href="#">Engage</a>
      </li>
      <li>
        <a href="#">Locations</a>
      </li>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  list-style: none;
  font-family: "Exo", sans-serif;
  font-weight: 600;
  li {
    padding: 8px;
    margin: 10px;
  }
`;

const Copyright = styled(CopyrightIcon)`
  cursor: pointer;
  padding: 6px;
  margin-top: -8px;
`;
