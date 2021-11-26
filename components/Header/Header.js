import Link from "next/link";

const Header = () => {
  return (
    <nav data-cy="nav">
      <ul>
        <li data-cy="nav-item">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li data-cy="nav-item">
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li data-cy="nav-item">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
