"use client";
import React, { FC } from "react";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useNavigationUtils } from "@/hooks";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FooterContentProps } from "@/components/Footer/types";

const Footer = () => {
  const { goToHome } = useNavigationUtils();

  const footerContentProps: FooterContentProps = {
    footer: {
      className:
        "d-flex flex-wrap bg-body justify-content-between align-items-center py-5 px-5 border-top shadow-sm",
    },
    logo: {
      className:
        "fw-bold link-primary text-muted text-uppercase cursor-pointer",
      onClick: () => goToHome(),
    },
    burgerLogo: {
      icon: faBurger,
    },
    lineBreak: {
      className: "d-lg-none d-inline",
    },
    author: {
      className: "border-start border-1 ps-3 ms-lg-3 ms-0 text-muted",
    },
    authorLogoLinkOverlay: {
      trigger: ["hover", "focus"],
      overlay: <Tooltip>Explore Porfolio</Tooltip>,
    },
    authorLogoLink: {
      className:
        "link-primary text-muted text-decoration-none cursor-pointer portfolio-brand-logo fw-bold",
      href: "https://anu1o.netlify.app",
      target: "_blank",
    },
    githubLink: {
      href: "https://github.com/ANU1o",
      target: "_blank",
      className: "link-primary text-muted text-decoration-none",
    },
    githubLogo: {
      icon: faGithub,
    },
    githubLinkOverlay: {
      trigger: ["hover", "focus"],
      overlay: <Tooltip>View Github Profile</Tooltip>,
    },
  };

  return (
    <footer {...footerContentProps.footer}>
      <span>
        <span {...footerContentProps.logo}>
          <FontAwesomeIcon {...footerContentProps.burgerLogo} /> RestoHunt
        </span>
        <br {...footerContentProps.lineBreak} />
        <span {...footerContentProps.author}>
          Made by&nbsp;
          <OverlayTrigger {...footerContentProps.authorLogoLinkOverlay}>
            <Link {...footerContentProps.authorLogoLink}>ANU1o</Link>
          </OverlayTrigger>
        </span>
      </span>
      <Link {...footerContentProps.githubLink}>
        <OverlayTrigger {...footerContentProps.githubLinkOverlay}>
          <span>
            <FontAwesomeIcon {...footerContentProps.githubLogo} />
            /ANU1o
          </span>
        </OverlayTrigger>
      </Link>
    </footer>
  );
};

export default Footer;
