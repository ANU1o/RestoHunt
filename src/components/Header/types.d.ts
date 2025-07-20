import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { HTMLAttributes } from "react";
import { NavbarBrandProps, NavbarProps } from "react-bootstrap";

export type HeaderContentProps = {
  navbar: NavbarProps | { "data-bs-theme": "light" | "dark" };
  navbarBrand: NavbarBrandProps;
  burgerIcon: FontAwesomeIconProps;
};
