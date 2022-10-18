import PropTypes from "prop-types";
import Header from "./Header";
import GlobalStyles from "./styles/GlobalStyles";
import InnerStyles from "./styles/InnerStyles";

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
