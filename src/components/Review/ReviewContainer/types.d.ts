import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { AccordionItemProps, AccordionProps } from "react-bootstrap";

export type ReviewContainerContentProps = {
  accordion: AccordionProps | HTMLAttributes<HTMLDivElement>;
  item: AccordionItemProps;
  title: HTMLAttributes<HTMLHeadingElement>;
  titleIcon: FontAwesomeIconProps;
};
