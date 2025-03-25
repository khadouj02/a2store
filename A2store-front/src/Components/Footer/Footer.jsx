import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>© {new Date().getFullYear()} A2store . Tous droits réservés.</p>
        </div>

        <div className="footer-right">
          <a href="https://www.facebook.com/share/1B9cfH3CWv/?mibextid=LQQJ4d" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/a2holding?igsh=Zngxa2hvcjR1ZGRz" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/a2holding/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
