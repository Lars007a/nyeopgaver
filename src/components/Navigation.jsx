//behøves ikke at importere styles, siden styles er fra "_navigation.css", som er importeret i de css filer, der er "brugt" overalt.

import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [frontpage, setFrontpage] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/") {
      setFrontpage(true);
    } else {
      setFrontpage(false);
    }

    if (location.pathname == "/backoffice") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  });

  const toggleNav = () => {
    if (showMenu == true) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  return (
    <>
      {disabled ? (
        ""
      ) : (
        <section className="navsec">
          {showMenu ? (
            <nav className="navbar">
              <ul>
                <li>
                  <a href="/stay">Ophold</a>
                </li>
                <li>
                  <a href="/contact">Kontakt</a>
                </li>
                <li>
                  <a href="/activities">Aktiviteter</a>
                </li>
                <li>
                  <a href="/mylist">Min liste</a>
                </li>
                <li>
                  <a href="/backoffice">Backoffice</a>
                </li>
              </ul>
            </nav>
          ) : (
            ""
          )}

          <div className="navwrapper">
            <section className="navcontent">
              {!frontpage ? (
                <a href="/" className="navimglink">
                  <div className="navimg"></div>
                </a>
              ) : (
                ""
              )}

              {!showMenu ? (
                <div className="hamburgerMenu">
                  <RxHamburgerMenu onClick={toggleNav} />
                </div>
              ) : (
                <div className="hamburgerMenu">
                  <RxCross1
                    className="closeHamburgerMenu"
                    onClick={toggleNav}
                  />
                </div>
              )}
            </section>
          </div>
        </section>
      )}
    </>
  );
};

export default Navigation;
