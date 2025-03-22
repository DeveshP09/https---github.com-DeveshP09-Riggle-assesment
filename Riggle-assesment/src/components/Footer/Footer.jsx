import "./footer.css";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="container footer-body">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
          <div className="col-md-4 d-flex align-items-center ">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1 item-color"
            >
              <svg className="bi" width="30" height="24">
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">
              © 2025 Riggle, Grow your business with Riggle
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex item-color">
            <li className="ms-3">
              <a className="text-body-secondary " href="#">
                <svg className="bi" width="24" height="24">
                <FaXTwitter />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary linkedin" href="#">
                <svg className="bi" width="24" height="24">
                <FaLinkedin />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary facebook" href="#">
                <svg className="bi" width="24" height="24">
                <FaFacebook />
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Footer;
