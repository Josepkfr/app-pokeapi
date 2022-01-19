import React from "react";
import { Card, CardBody } from "reactstrap";
import "../../styles/components/Card.css";

const CardComponent = ({ children }) => {
  return (
    <Card>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default CardComponent;
