import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon className="listIcon" icon="list" size="1x" />
      <h1>Todo List</h1>
    </div>
  );
};

export default Header;
