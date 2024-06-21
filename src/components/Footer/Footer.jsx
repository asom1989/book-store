import "./Footer.css";

function Footer() {
  return (
    <footer>
      <section className="footer-social-media flex">
        <div className="footer-social-media-text">
          Follown us on social media
        </div>
        <div className="footer-social-media-icons flex">
          <div className="footer-social-media-icon">
            <i style={{ color: "red" }} className="bi bi-instagram" />
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "#2980b9" }} className="bi bi-facebook" />
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "red" }} className="bi bi-youtube" />
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "skyblue" }} className="bi bi-twitter" />
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "darkblue" }} className="bi bi-telegram" />
          </div>
        </div>
      </section>
      <section className="footer-links-wrapper">
        <article className="footer-links-item">
          <h3 className="foote-links-item-title">Usefull Links</h3>
          <ul className="footer-links">
            <li className="footer-link">Home</li>
            <li className="footer-link">Authors</li>
            <li className="footer-link">About Us</li>
            <li className="footer-link">Contact Us</li>
            <li className="footer-link">Register</li>
          </ul>
        </article>

        <article className="footer-links-item">
          <h3 className="foote-links-item-title">Contact Information</h3>
          <div className="footer-address-wrapper">
            <div className="footer-address-item">
              <i className="bi bi-geo-alt-fill" />
              Sweden - Gävle
            </div>
            <div className="footer-address-item">
              <i className="bi bi-telephone-fill" />
              012-345-678
            </div>
            <div className="footer-address-item">
              <i className="bi bi-envelope-fill" />
              info@gavle.com
            </div>
          </div>
        </article>

        <article className="footer-links-item">
          <h3 className="foote-links-item-title">About Us</h3>
          <p className="footer-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            quidem! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate laborum excepturi, debitis exercitationem deleniti
            consequuntur?
          </p>
        </article>
      </section>
    </footer>
  );
}

export default Footer;
