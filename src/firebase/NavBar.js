import React from "react";
import "./NavBar.css";

export default function NavBar({ user, loading, login, register, logout }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const letter = user?.email?.[0]?.toUpperCase() || "U";

  return (
    <nav className="nav">
      <div className="nav__left">
        <span className="nav__logo">Frontend Simplified</span>
      </div>

      <div className="nav__right">
        {loading ? (
          <div className="skeleton skeleton-btn" />
        ) : user ? (
          <div className="avatar-wrapper" data-avatar-menu>
            <button
              className="avatar"
              onClick={() => setMenuOpen((prev) => !prev)}
              disabled={loading}
            >
              {letter}
            </button>

            {menuOpen && (
              <div className="dropdown">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    logout();
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button className="btn" onClick={login}>
              Login
            </button>
            <button className="btn btn--primary" onClick={register}>
              Register
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
