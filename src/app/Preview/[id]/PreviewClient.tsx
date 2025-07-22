"use client";

import { useRestaurantUtils } from "@/hooks";
import { useParams } from "next/navigation";
import "@/styles/Preview.css";
import {
  Col,
  ColProps,
  Container,
  Image,
  ImageProps,
  Placeholder,
  PlaceholderProps,
  Row,
  RowProps,
} from "react-bootstrap";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faLocationPin, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { OperatingHours, ReviewCard, ReviewContainer } from "@/components";
import { Restaurent } from "@/hooks/data/types";

import { HTMLAttributes, useEffect, useState } from "react";
import { OperatingHoursProps } from "@/components/OperatingHours/types";

interface PreviewContentProps {
  container:
    | HTMLAttributes<HTMLDivElement>
    | { "data-bs-theme": "dark" | "light" };
  row: RowProps;
  imgCol: ColProps;
  contentCol: ColProps;
  img: ImageProps;
  imgPlaceholder: PlaceholderProps;
  hotelName: HTMLAttributes<HTMLHeadingElement>;
  hr: HTMLAttributes<HTMLHRElement>;
  location: HTMLAttributes<HTMLHRElement>;
  locationIcon: FontAwesomeIconProps;
  ctype: HTMLAttributes<HTMLParagraphElement>;
  operatingHour: OperatingHoursProps;
  ctypeIcon: FontAwesomeIconProps;
}

export default function PreviewClient() {
  const { id } = useParams();
  const { getById } = useRestaurantUtils();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const restaurent: Restaurent | undefined = getById(id as string);

  const previewContentProps: PreviewContentProps = {
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
      md: true,
      lg: true,
      className: "p-0",
    },
    contentCol: {
      sm: 12,
      md: true,
      lg: true,
      className: "p-5",
    },
    img: {
      src: restaurent?.photograph,
      className: "img-prev",
    },
    imgPlaceholder: {
      as: "div",
      animation: "wave",
      className: "w-100 h-100 placeholder img-prev",
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
            {isLoading ? (
              <Placeholder {...previewContentProps.imgPlaceholder} />
            ) : (
              <Image {...previewContentProps.img} />
            )}
          </Col>
          <Col {...previewContentProps.contentCol}>
            {isLoading ? (
              <>
                <Placeholder
                  {...previewContentProps.hotelName}
                  animation="glow"
                  size="lg"
                >
                  <Placeholder xs="6" style={{ height: "2.25rem" }} />
                </Placeholder>
                <hr {...previewContentProps.hr} />
                <Placeholder
                  {...previewContentProps.location}
                  animation="glow"
                  size="sm"
                >
                  <FontAwesomeIcon {...previewContentProps.locationIcon} />{" "}
                  <Placeholder xs="2" />, <Placeholder xs="8" />
                </Placeholder>
                <Placeholder {...previewContentProps.ctype} animation="glow">
                  <FontAwesomeIcon {...previewContentProps.ctypeIcon} />{" "}
                  <Placeholder xs={3} />
                </Placeholder>
              </>
            ) : (
              <>
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
              </>
            )}
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
