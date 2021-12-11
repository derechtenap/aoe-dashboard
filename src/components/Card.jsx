export default function Card({
  icon = null,
  heading = null,
  paragraph = null,
  body = null,
}) {
  // Card used in the settings menu
  return (
    <div className="card">
      <div className="card-header">
        {icon}
        <p className="card-heading">{heading}</p>
        <p>{paragraph}</p>
      </div>
      <div className="card-body">{body}</div>
    </div>
  );
}
