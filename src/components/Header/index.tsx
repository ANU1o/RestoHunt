"use client";
import "@/styles/Header.css";
import { Navbar, NavbarBrand } from "react-bootstrap";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigationUtils } from "@/hooks/navigation";
import { HeaderContentProps } from "@/components/Header/types";

const Header = () => {
  const { goToHome } = useNavigationUtils();

  const headerContentProps: HeaderContentProps = {
    navbar: {
      bg: "primary",
      className: "h-header w-100 shadow-lg",
      "data-bs-theme": "dark",
      style: { position: "fixed", zIndex: 10 },
    },
    navbarBrand: {
      className: "mx-auto cursor-pointer link-dark text-light",
      onClick: () => goToHome(),
    },
    burgerIcon: {
      icon: faBurger,
    },
  };

  return (
    <Navbar {...headerContentProps.navbar}>
      <NavbarBrand {...headerContentProps.navbarBrand}>
        <FontAwesomeIcon {...headerContentProps.burgerIcon} /> RestoHunt
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
