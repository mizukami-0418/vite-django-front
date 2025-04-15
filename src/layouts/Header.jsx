import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>ReactDjango 練習プロジェクト</h1>
      <nav>
        <Link to="/">HOME</Link> | <Link to="/about">ABOUT</Link> |{" "}
        <Link to="/calculate">計算機</Link>
      </nav>
    </header>
  );
}

export default Header;
