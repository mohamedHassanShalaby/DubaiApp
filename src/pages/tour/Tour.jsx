import { useParams } from "react-router-dom";
import { toursList } from "../../data";
import { Rating } from "../../components/tours/Rating";
import "./tour.css";
import { BookNow } from "./BookNow";
export const Tour = () => {
  let { id } = useParams();

  const tour = toursList.find((t) => t.id === +id); // + convert string to number

  return (
    <section className="tour">
      <div className="tour-step">
        United Arab Emirates <i className="bi bi-chevron-right"></i>
        Things to do in Dubai <i className="bi bi-chevron-right"></i> Safari
      </div>
      <div className="tour-category">ADVANTURE</div>
      <h1 className="tour-title">Dubai: {tour.title}</h1>
      <div className="tour-info">
        <Rating rating={tour.rating} reviews={tour.reviews} />
        <div className="tour-provider">
          Activity Provider : <span>Mohamed Shalaby</span>
        </div>
      </div>
      <div className="tour-img-wrapper">
        <img src={tour.image} alt={tour.title} className="tour-img" />

        <BookNow tourPrice={tour.priceFrom} />
      </div>
      <p className="tour-desc">
        Discover a different side of Dubai an a fun-filled safari across the
        desert. Try sandboarding, dune bashing and a camel ride, with the option
        to add an electifying quad bike ride or immersive Alkhayma camp dinner
        experience to your adventure
      </p>
      <div className="tour-more-info">
        <h2 className="tour-info-title">About this activity</h2>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i style={{ color: "#27ae60" }} className="bi bi-calendar3"></i>
            Free Cancellation
          </div>
          <p className="tour-info-item-desc">
            Cancel up to 24 hour in advance to recieve a full refund
          </p>
        </div>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i style={{ color: "#2980b9" }} className="bi bi-calendar-plus-fill"></i>
            Reserve now & pay later
          </div>
          <p className="tour-info-item-desc">
            Keep your travel plan flexible -- book your spot and pay nothing
            today.
          </p>
        </div>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i style={{ color: "#e74c3c" }} className="bi bi-virus"></i>
            Covid -19 precautions
          </div>
          <p className="tour-info-item-desc">
            Special health and safety meatures are in place. Check your activity
            voucher once your book for full datails.
          </p>
        </div>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i style={{ color: "#8e44ad" }} className="bi bi-clock-history"></i>
            Duration 4 - 7 hours
          </div>
          <p className="tour-info-item-desc">
            Check availability to see staring times.
          </p>
        </div>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i style={{ color: "#2c3e50" }} className="bi bi-person-check"></i>
            Live tour guide
          </div>
          <p className="tour-info-item-desc">English</p>
        </div>
      </div>
    </section>
  );
};
