import { NavLink } from "react-router-dom";

function HeaderNav() {
    return (
        <NavLink to="/accommodation" className="nav-link">
            Accommodation
        </NavLink>
    );
}

export default HeaderNav;
