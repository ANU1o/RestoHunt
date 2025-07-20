import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { Review } from "@/hooks/data/types";

const ReviewCard: FC<Review> = ({ name, date, rating, comments }) => {
  return (
    <div>
      <h2 className="text-white">{name}</h2>
      <h5 className="text-white">{date}</h5>
      <h5 className="text-white">
        <FontAwesomeIcon icon={faStar} /> {rating}
      </h5>
      <p className="text-light">{comments}</p>
      <hr />
    </div>
  );
};

export default ReviewCard;
