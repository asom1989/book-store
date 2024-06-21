import "./HeadingTitle.css";

function HeadingTitle({ title }) {
  return (
    <div className="heading-wrapper">
      <h2 className="heading-title">{title}</h2>
    </div>
  );
}

export default HeadingTitle;
