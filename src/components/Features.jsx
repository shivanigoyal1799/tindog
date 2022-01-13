import React from "react";
import {Row,Col,Container} from "reactstrap";
import "../assets/Features.css";

const Features = (props) => {
  return (
    <div className="features">
      <Container>
        <Row>
          <Col md="4" className="item">
            <div>
              <h3>Easy to use</h3>
              <p>So easy to use, even your dog could do it.</p>
            </div>
          </Col>
          <Col md="4" className="item">
            <div>
              <h3>Elite Clientele</h3>
              <p>We have all the dogs, the greatest dogs.</p>
            </div>
          </Col>
          <Col md="4" className="item">
            <div>
              <h3>Guaranteed to work</h3>
              <p>Find the love of your dog's life or your money back.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Features;