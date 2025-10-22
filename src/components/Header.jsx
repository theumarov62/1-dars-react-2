import { useState } from "react";

export default function Header() {
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
            <li className="links">
              <a className="link" href="#">
                Xizmatlar
              </a>
            </li>
            <li className="links">
              <a className="link" href="#">
                Dorilar
              </a>
            </li>
            <li className="links">
              <a className="link" href="#">
                Asal
              </a>
            </li>
            <li className="links">
              <a className="link" href="#">
                Kontaktlar
              </a>
            </li>
            <li className="links">
              <a className="link" href="#">
                Blog
              </a>
            </li>
          </nav>

          {/* Header Register */}
          <button className="ButtonRegister">Qabulga yozilish</button>
        </div>
      </header>
    </>
  );
}
