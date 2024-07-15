import { NavLink } from "react-router-dom";

/**
 * Navbar component for navigation links.
 * 
 * @returns {JSX.Element} The rendered Navbar component.
 */
const Navbar = () => {
    return (
        <header className="header">
            {/* Logo */}
            <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center
             justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text">KK</p>
            </NavLink>

            {/* Navigation links */}
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}
                    activeClassName="text-blue-500"
                >
                    About
                </NavLink>
            </nav>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink
                    to="/projects"
                    className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}
                    activeClassName="text-blue-500"
                >
                    Projects
                </NavLink>
            </nav>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}
                    activeClassName="text-blue-500"
                >
                    Contact
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
