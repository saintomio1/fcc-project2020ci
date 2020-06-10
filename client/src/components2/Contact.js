import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const Contact = (props) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="200px"
          height="400px"
          src={require("../assets/BluePrnt2.jpg")}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Contact Us</CardTitle>
          <CardSubtitle>Call: 08022272600</CardSubtitle>
          <CardText>
            email us at: www.firstcostconceptz@gmail.com, Our Website:
            www.firstcostconceptz@gmail.com,
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Contact;
