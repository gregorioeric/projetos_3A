import { NavLink } from "react-router-dom";

const AccountExists = ({ nameLink, titleLink, title }) => {
  return (
    <p className="p-account-exists">
      {title}{" "}
      <NavLink className="navLink-account-exists" to={nameLink}>
        {titleLink}
      </NavLink>
    </p>
  );
};

export default AccountExists;
