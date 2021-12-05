import { Question } from "react-bootstrap-icons";

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

// These values are shown when a prop isn't set in the parent component
Card.defaultProps = {
  icon: <Question size="64" />,
  heading: "MISSING_HEADING",
  paragraph: "MISSING_PARAGRAPH",
  form: "MISSING_FORM",
};
