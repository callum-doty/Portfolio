import '../styles/Header.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Header() {
  return (
    <nav className="head">
      <Link to="/" className="site-title">
        Callum Doty
      </Link>
      <ul>
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/Experience">Experience</CustomLink>
        <CustomLink to="/Work">Blog</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
