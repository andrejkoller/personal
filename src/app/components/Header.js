import Link from "next/link";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-logo">
          <Link href="/">
            <h3>Pianorgan</h3>
            <h1>Andrej Koller</h1>
          </Link>
        </div>
        <div className="menu-button-container">
          <div className="menu-button-content">
            <h4 id="menuButton">Menu</h4>
            <div className="round-animation-one"></div>
            <div className="round-animation-two"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
