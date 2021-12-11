export default function Card({
  icon = null,
  heading = null,
  body = null,
  footer = null,
}) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <p className="card-heading">{heading}</p>
      <div className="card-body">{body}</div>
      <div className="card-footer">{footer}</div>
    </div>
  );
}
