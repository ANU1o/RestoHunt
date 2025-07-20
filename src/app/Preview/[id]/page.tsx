"use client";

import { useRestaurantUtils } from "@/hooks";
import { useParams } from "next/navigation";
import "@/styles/Preview.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { OperatingHours } from "@/components";
import { Restaurent } from "@/hooks/data/types";
import ReviewContainer from "@/components/Review/ReviewContainer";
import ReviewCard from "@/components/Review/ReviewCard";

export default function Preview() {
  const { id } = useParams();
  const { getById } = useRestaurantUtils();

  const restaurent: Restaurent | undefined = getById(id as string);

  const previewContentProps = {
    container: {
      "data-bs-theme": "dark",
      className: "bg-body text-body",
      id: "preview",
    },
    row: {
      className: "gap-0",
    },
    imgCol: {
      sm: 12,
      lg: true,
      className: "p-0",
    },
    contentCol: {
      sm: 12,
      lg: true,
      className: "p-5",
    },
    img: {
      src: restaurent?.photograph,
      className: "img-prev",
    },
    hotelName: {
      className: "text-white",
    },
    location: {
      className: "d-flex align-items-center gap-3 mb-3 text-body fw-bold",
    },
    locationIcon: {
      icon: faLocationPin,
    },
    ctype: {
      className: "d-flex align-items-center gap-3 mb-3 text-body fst-italic",
    },
    ctypeIcon: {
      icon: faUtensils,
    },
    hr: {
      className: "border border-1",
    },
    operatingHour: {
      data: restaurent?.operating_hours,
    },
  };

  return (
    <div {...previewContentProps.container}>
      <Container>
        <Row {...previewContentProps.row}>
          <Col {...previewContentProps.imgCol}>
            <Image {...previewContentProps.img} />
          </Col>
          <Col {...previewContentProps.contentCol}>
            <h1 {...previewContentProps.hotelName}>{restaurent?.name}</h1>
            <hr {...previewContentProps.hr} />
            <h5 {...previewContentProps.location}>
              <FontAwesomeIcon {...previewContentProps.locationIcon} />{" "}
              {restaurent?.neighborhood}, {restaurent?.address}
            </h5>
            <p {...previewContentProps.ctype}>
              <FontAwesomeIcon {...previewContentProps.ctypeIcon} />{" "}
              {restaurent?.cuisine_type}
            </p>
            <hr {...previewContentProps.hr} />
            <OperatingHours {...previewContentProps.operatingHour} />
            <hr {...previewContentProps.hr} />
            <ReviewContainer>
              {restaurent?.reviews?.map((review) => (
                <ReviewCard key={review.name} {...review} />
              ))}
            </ReviewContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
