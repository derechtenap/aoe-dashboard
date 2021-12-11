export default function Card({ icon, heading, paragraph, form }) {
  // Card used in the settings menu
  return (
    <div className="card">
      <div className="card-header">
        {icon}
        <p className="card-heading">{heading}</p>
        <p>{paragraph}</p>
      </div>
      <div className="card-body">{form}</div>
    </div>
  );
}
