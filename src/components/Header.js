import Button from "./Button";
import PropTypes from "prop-types";

const Header = ({ title, onAdd, bt }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={bt.color} text={bt.text} onClick={onAdd} />
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
