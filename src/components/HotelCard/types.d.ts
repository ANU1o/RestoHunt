import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { Key } from "react";

export interface HotelCardProps {
  id: number | undefined;
  name: string | undefined;
  photograph: string | undefined;
  neighborhood: string | undefined;
  cuisine_type: string | undefined;
}

export type HotelCardContentProps = {
  card: HTMLAttributes<HTMLDivElement>;
  image: HTMLAttributes<HTMLImageElement>;
  contentContainer: HTMLAttributes<HTMLDivElement>;
  heading: HTMLAttributes<HTMLHeadingElement>;
  location: HTMLAttributes<HTMLSpanElement>;
  locationIcon: FontAwesomeIconProps;
  cusineType: HTMLAttributes<HTMLSpanElement>;
  cusineTypeIcon: FontAwesomeIconProps;
};
