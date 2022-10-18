import styled from "styled-components";

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--lightBlue);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--lightBlue);
  }
`;

export default HeaderStyles;
