import "./Services.css";

function Services() {
  return (
    <article className="services flex">
      <div className="service-item">
        <i className="bi bi-truck" />
        <b>Free Shipping</b>
      </div>
      <div className="service-item">
        <i className="bi bi-gift" />
        <b>Gift Cart</b>
      </div>
      <div className="service-item">
        <i className="bi bi-arrow-clockwise" />
        <b>7 Days Return</b>
      </div>
      <div className="service-item">
        <i className="bi bi-send" />
        <b>Contact Us</b>
      </div>
    </article>
  );
}

export default Services;
