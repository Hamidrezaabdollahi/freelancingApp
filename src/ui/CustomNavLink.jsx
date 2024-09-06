import { NavLink } from "react-router-dom";

function CustomNavLink({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "flex items-center gap-x-2 bg-primary-0  w-full rounded-lg px-4 py-2 bg-primary-100/80 text-primary-900"
          : "flex items-center gap-x-2 bg-primary-0 text-secondary-700 w-full rounded-lg px-4 py-2 hover:bg-primary-100/50 hover:text-primary-900 transition-all duration-150"
      }
    >
      {children}
    </NavLink>
  );
}

export default CustomNavLink;
