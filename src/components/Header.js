import Button from "./Button";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ title, onAdd, bt }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button color={bt.color} text={bt.text} onClick={onAdd} />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
/////////////////////////////////////////
// css in js
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };
export default Header;
