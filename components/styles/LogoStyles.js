import styled from "styled-components";

const LogoStyles = styled.div`
  font-size: 2rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;

  a {
    color: --var(--lightBlue);
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    font-weight: 800;
    font-size: 0.6em;
  }
`;

export default LogoStyles;
