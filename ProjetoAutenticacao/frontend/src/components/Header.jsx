import Navigation from "./Navigation";

const Header = () => {
  const a = false;
  return (
    <header>
      <div className="container">
        <div className="content content-header">
          <div className="logo">
            <h2>IMG Logo</h2>
          </div>
          <div className="main-menu">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
