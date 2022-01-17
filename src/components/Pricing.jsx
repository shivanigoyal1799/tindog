import React from "react";
import { Card, Button, CardHeader, CardBody,
    CardTitle, CardText ,Row ,Col,Container} from 'reactstrap';
import "../assets/Pricing.css";


const Pricing=()=>{
    return (
      <div className="pricing">
        <h2>A Plan for Every Dog's Needs</h2>
        <p>Simple and affordable price plans for your and your dog.</p>

        <Container>
          <Row>
            <Col lg="4" md="6" className="pricing-item">
              <Card>
                <CardHeader tag="h3">Chihuahua</CardHeader>
                <CardBody>
                  <CardTitle tag="h2">Free</CardTitle>
                  <CardText>
                    <p>5 Matches Per Day</p>
                    <p>10 Messages Per Day</p>
                    <p>Unlimited App Usage</p>
                  </CardText>
                  <Button outline color="dark" block size="lg">Sign Up</Button>
                </CardBody>
              </Card>
            </Col>
          
            <Col lg="4" md="6" className="pricing-item">
              <Card>
                <CardHeader tag="h3">Labrador</CardHeader>
                <CardBody>
                  <CardTitle tag="h2">$49 / mo</CardTitle>
                  <CardText>
                    <p>Unlimited Matches</p>
                    <p>Unlimited Messages</p>
                    <p>Unlimited App Usage</p>
                  </CardText>
                  <Button color="dark" block size="lg">Sign Up</Button>
                </CardBody>
              </Card>
            </Col>
          
            <Col lg="4" className="pricing-item">
              <Card>
                <CardHeader tag="h3">Mastiff</CardHeader>
                <CardBody>
                  <CardTitle tag="h2">$99 / mo</CardTitle>
                  <CardText>
                    <p>Pirority Listing</p>
                    <p>Unlimited Matches</p>
                    <p>Unlimited Messages</p>
                    <p>Unlimited App Usage</p>
                  </CardText>
                  <Button color="dark" block size="lg">Sign Up</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Pricing;