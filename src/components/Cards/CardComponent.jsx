import React from "react";
import { Card, CardBody } from "reactstrap";

const CardComponent = ({ children }) => {
  return (
    <Card>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default CardComponent;
