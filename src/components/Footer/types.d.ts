import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";
import { OverlayTriggerProps } from "react-bootstrap";

export type FooterContentProps = {
  footer: HTMLAttributes<HTMLDivElement>;
  logo: HTMLAttributes<HTMLSpanElement>;
  burgerLogo: FontAwesomeIconProps;
  lineBreak: HTMLAttributes<HTMLBRElement>;
  author: HTMLAttributes<HTMLSpanElement>;
  authorLogoLinkOverlay: Omit<OverlayTriggerProps, "children">;
  authorLogoLink: HTMLAttributes<HTMLAnchorElement> | LinkProps;
  githubLink: HTMLAttributes<HTMLAnchorElement> | LinkProps;
  githubLogo: FontAwesomeIconProps;
  githubLinkOverlay: Omit<OverlayTriggerProps, "children">;
};
