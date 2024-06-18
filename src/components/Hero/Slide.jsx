function Slide({ className, title, desc, img }) {
  return (
    <div className={`slide ${className}`}>
      <div className="slide-img-wrapper">
        <img src={img} alt={title} />
      </div>

      <div className="slide-info-wrapper">
        <h1 className="slide-info-title">{title}</h1>

        <p className="slide-info-desc">{desc}</p>
      </div>
    </div>
  );
}

export default Slide;
