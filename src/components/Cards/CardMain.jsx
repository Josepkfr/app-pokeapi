import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

const CardMain = ({ name }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">{name} </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};

export default CardMain;
