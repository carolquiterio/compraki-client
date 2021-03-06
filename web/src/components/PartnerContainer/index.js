import React from "react";

import { Container, PartnerImg, PartnerKM, PartnerName } from "./styles";

import img1 from "../../assets/partners/1.png";

export default function PartnerContainer(props) {
  return (
    <Container>
      <PartnerImg src={require("../../assets/partners/3.png")}></PartnerImg>
      <PartnerName>{props.name}</PartnerName>
      <PartnerKM>Km: {props.km}</PartnerKM>
    </Container>
  );
}
