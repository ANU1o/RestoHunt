import React, { FC } from "react";
import { CardLayoutProps } from "./types";
import "@/styles/CardLayout.css";

const CardLayout: FC<CardLayoutProps> = (props) => {
  return <div id="card-layout">{props.children}</div>;
};

export default CardLayout;
