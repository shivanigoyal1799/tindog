import React from "react";
import NavBar from "./NavBar";
import photo from "../assets/iphone6.png";
import { Button ,Row,Col,Container} from "reactstrap";
import "../assets/Title.css";

const Title = (props) => {
  return (
    <div className="title">
      <NavBar />
      <div className="main-section">
        <Container>
          <Row>
            <Col md="6">
              <h1 className="info">Meet new and interesting dogs nearby.</h1>
              <div className="btn-container">
                <div>
                  <Button className="btn" color="dark" size="lg">
                    Download
                  </Button>
                </div>
                <div>
                  <Button className="btn" color="dark" outline size="lg">
                    Download
                  </Button>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div>
                <img src={photo} className="title-image" alt="iphone" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Title;
