import React, { FC } from "react";
import { Image } from "react-bootstrap";
import "@/styles/HotelCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { HotelCardContentProps, HotelCardProps } from "./types";
import { useNavigationUtils } from "@/hooks";

const HotelCard: FC<HotelCardProps> = ({
  id,
  name,
  photograph,
  neighborhood,
  cuisine_type,
}) => {
  const { goToPreview } = useNavigationUtils();

  const hotelCardContentProps: HotelCardContentProps = {
    card: {
      className:
        "hotel-card d-flex flex-row flex-md-column flex-lg-column text-light shadow-sm text-decoration-none",
      onClick: () => goToPreview(id),
    },
    image: {
      src: photograph,
      alt: name,
      className: "card-img-size",
    },
    contentContainer: {
      className: "p-3 p-lg-4 d-flex w-100 flex-column justify-content-center",
    },
    heading: {
      id: "heading",
      className:
        "d-flex align-items-end text-light mb-4 pb-3 border-bottom border-1",
    },
    location: {
      className: "d-flex align-items-center gap-2 mb-2 fs-5 fw-bold",
    },
    locationIcon: {
      icon: faLocationPin,
    },
    cusineType: {
      className: "d-flex align-items-center gap-2 mb-2 fs-5 fst-italic",
    },
    cusineTypeIcon: {
      icon: faUtensils,
    },
  };
  return (
    <div {...hotelCardContentProps.card}>
      <Image {...hotelCardContentProps.image} />
      <div {...hotelCardContentProps.contentContainer}>
        <h3 {...hotelCardContentProps.heading}>{name}</h3>
        <span {...hotelCardContentProps.location}>
          <FontAwesomeIcon {...hotelCardContentProps.locationIcon} />{" "}
          {neighborhood}
        </span>
        <span {...hotelCardContentProps.cusineType}>
          <FontAwesomeIcon {...hotelCardContentProps.cusineTypeIcon} />{" "}
          {cuisine_type}
        </span>
      </div>
    </div>
  );
};

export default HotelCard;
