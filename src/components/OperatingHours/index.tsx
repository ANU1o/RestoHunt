"use client";

import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { OperatingHoursContentProps, OperatingHoursProps } from "./types";
import { OperatingHour } from "@/hooks/data/types";

const OperatingHours: FC<OperatingHoursProps> = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const daysOfWeek: (keyof OperatingHour)[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const operatingHoursContentProps: OperatingHoursContentProps = {
    button: {
      variant: "secondary",
      size: "lg",
      className: "w-100 fs-4",
      onClick: () => handleShow(),
    },
    openDoorIcon: {
      icon: faDoorOpen,
    },
    modal: {
      "data-bs-theme": "dark",
      size: "lg",
      onHide: () => handleClose(),
      show,
      centered: true,
    },
    modalHeader: {
      className: "bg-primary border-primary",
      closeButton: true,
    },
    modalTitle: {
      className: "text-white",
    },
    modalBody: {
      className: "bg-primary d-flex flex-column justify-content-center",
    },
    rowContainer: {
      className: "mx-5",
    },
    colWeek: {
      lg: "4",
      className: "align-self-center",
    },
    week: {
      className: "text-white fw-bold",
    },
    colTime: {
      lg: "8",
      className: "align-self-center",
    },
    time: {
      className: "text-white text-lg-end text-sm-start",
    },
  };
  return (
    <>
      <Button {...operatingHoursContentProps.button}>
        <FontAwesomeIcon {...operatingHoursContentProps.openDoorIcon} />{" "}
        Operating Hours
      </Button>

      <Modal {...operatingHoursContentProps.modal}>
        <Modal.Header {...operatingHoursContentProps.modalHeader}>
          <Modal.Title {...operatingHoursContentProps.modalTitle}>
            <FontAwesomeIcon {...operatingHoursContentProps.openDoorIcon} />{" "}
            Operating Hours
          </Modal.Title>
        </Modal.Header>
        <Modal.Body {...operatingHoursContentProps.modalBody}>
          <div {...operatingHoursContentProps.rowContainer}>
            <Row>
              {daysOfWeek.map((dayOfWeek: keyof OperatingHour) => (
                <>
                  <Col {...operatingHoursContentProps.colWeek}>
                    <h5 {...operatingHoursContentProps.week}>{dayOfWeek}</h5>
                  </Col>
                  <Col {...operatingHoursContentProps.colTime}>
                    <p {...operatingHoursContentProps.time}>
                      {props.data?.[dayOfWeek]}
                    </p>
                  </Col>
                </>
              ))}
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OperatingHours;
