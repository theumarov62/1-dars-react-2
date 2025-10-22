export default function Footer() {
  return (
    <>
      <footer>
        <div className="Container FooterContainer">
          <a className="FooterTitleContainer" href="../../index.html">
            <img
              src="./logo-icon.svg"
              alt="Logo Footer"
              className="FooterTitleLogo"
            />
            <span className="FooterTitleText">AnsorMed</span>
          </a>
          <ul className="FooterNav">
            <li className="FooterLinks">
              <a className="FooterLink" href="#">
                Xizmatlar
              </a>
            </li>
            <li className="FooterLinks">
              <a className="FooterLink" href="#">
                Dorilar
              </a>
            </li>
            <li className="FooterLinks">
              <a className="FooterLink" href="#">
                Asal
              </a>
            </li>
            <li className="FooterLinks">
              <a className="FooterLink" href="#">
                Kontaktlar
              </a>
            </li>
            <li className="FooterLinks">
              <a className="FooterLink" href="#">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
