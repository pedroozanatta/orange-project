import "./Card.css";
import "../styles/globals.css"

export default function Card({ name, image }) {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay"></div>
      <span className="card-title">{name}</span>
    </div>
  );
}
