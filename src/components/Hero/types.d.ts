import { HTMLAttributes } from "react";
import { ImageProps, StackProps } from "react-bootstrap";

export type HeroContentProps = {
  hero: HTMLAttributes<HTMLDivElement>;
  heroContentContainer: HTMLAttributes<HTMLDivElement>;
  heroHeading: HTMLAttributes<HTMLHeadingElement>;
  heroContent: HTMLAttributes<HTMLParagraphElement>;
  logo: HTMLAttributes<HTMLSpanElement>;
  heroImage: ImageProps;
};
