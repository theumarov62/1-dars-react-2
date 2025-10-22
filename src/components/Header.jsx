import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenu, setIsMenu] = useState(true);
  const links = ["Xizmatlar", "Dorilar", "Asal", "Kontaktlar", "Blog"];
  return (
    <>
      <header>
        <div className="Container HeaderContainer">
          <a className="HeaderTitleContainer" href="../../index.html">
            <img
              src="./logo-icon.svg"
              alt="Logo Web Site"
              className="HeaderTitleLogo"
            />
            <span className="HeaderTitleText">AnsorMed</span>
          </a>

          {/* Header Nav */}
          <nav className="Nav">
            {links.map((link, idx) => (
              <li className="links" key={idx}>
                <a className="link" href="#">
                  {link}
                </a>
              </li>
            ))}
          </nav>

          {/* responsive nav */}
          {!isMenu && <div className="responsive_nav">
            {links.map((link, idx) => (
              <li onClick={() => setIsMenu(false)} className="links responsive_links" key={idx}>
                <a className="link responsive_link" href="#">
                  {link}
                </a>
              </li>
            ))}
          </div>}

          {/* Header Register */}
          <button className="ButtonRegister">Qabulga yozilish</button>
          {isMenu ? (
            <Menu onClick={() => setIsMenu(false)} className="menu_btn" />
          ) : (
            <X onClick={() => setIsMenu(true)} className="menu_btn"></X>
          )}
        </div>
      </header>
    </>
  );
}
