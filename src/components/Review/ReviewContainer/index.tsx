import React, { FC } from "react";
import { Accordion, AccordionHeader, AccordionItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { ReviewContainerContentProps } from "./types";

const ReviewContainer: FC<{ children: any }> = ({ children }) => {
  const reviewContainerContentProps: ReviewContainerContentProps = {
    accordion: {
      flush: true,
      "data-bs-theme": "dark",
    },
    item: {
      eventKey: "0",
    },
    title: {
      className: "text-white",
    },
    titleIcon: {
      icon: faComments,
    },
  };
  return (
    <Accordion {...reviewContainerContentProps.accordion}>
      <AccordionItem {...reviewContainerContentProps.item}>
        <AccordionHeader>
          <h3 {...reviewContainerContentProps.title}>
            <FontAwesomeIcon {...reviewContainerContentProps.titleIcon} />{" "}
            Reviews
          </h3>
        </AccordionHeader>
        <Accordion.Body>{children}</Accordion.Body>
      </AccordionItem>
    </Accordion>
  );
};

export default ReviewContainer;
