import { OperatingHour } from "@/hooks/data/types";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { HTMLAttributes } from "react";
import {
  ButtonProps,
  ColProps,
  ModalHeaderProps,
  ModalProps,
  ModalTitleProps,
} from "react-bootstrap";
import { ModalBodyProps } from "react-bootstrap/esm/ModalBody";

export interface OperatingHoursProps {
  data: OperatingHour | undefined;
}

export type OperatingHoursContentProps = {
  button: ButtonProps;
  openDoorIcon: FontAwesomeIconProps;
  modal: ModalProps;
  modalHeader: ModalHeaderProps;
  modalTitle: ModalTitleProps;
  modalBody: ModalBodyProps;
  rowContainer: HTMLAttributes<HTMLDivElement>;
  colWeek: ColProps;
  week: HTMLAttributes<HTMLHeadingElement>;
  colTime: ColProps;
  time: HTMLAttributes<HTMLParagraphElement>;
};
