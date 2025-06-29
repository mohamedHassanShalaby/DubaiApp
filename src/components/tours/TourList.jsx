import { Link } from "react-router-dom";
import { Rating } from "./Rating";
import "./tourList.css";
export const TourList = ({ toursList }) => {
  return (
    <div className="tour-list">
      {toursList.map((item) => (
        <div className="tour-item" key={item.id}>
          <img className="tour-item-img" src={item.image} alt={item.title} />
          <span className="tour-item-label">ADVENTURE</span>
          <div className="tour-item-body">
            <div className="tour-item-title">{item.title}</div>
            <div className="tour-item-duration">
              <span>{item.duration}</span> <i className="bi bi-dot"></i>
              Pickup available
            </div>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="tour-item-price">
              <strong>From ${item.priceFrom}</strong> per persom
            </div>
            <Link to={`/tour/${item.id}`} className="tour-item-link">See More</Link>
          </div>
        </div>
      ))}
    </div>
  );
};
