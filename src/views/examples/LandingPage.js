/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Progress } from "reactstrap";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">What I do</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here. Add a button if you
                  want the user to see more.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Graphics Design</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Web Development</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-camera-compact" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Photography</h4>
                    <p>
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-laptop" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Web Design</h4>
                    <p>
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">About Me</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/profilepic.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Nathaniel Senje</CardTitle>
                        <h6 className="card-category">Web Developer and Designer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Being in love with computers and tech, I have been fascinated about programming for as long as I can remember. After graduating from college with BSc. in Information Technology and Systems, I chose to combine my love for design and Web.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-github" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="8">
                <h1>My Skills</h1>
                <br />
                <Container className="text-left">
                  <div>
                    <h3>Adobe Photoshop</h3>
                    <Progress
                      striped
                      max="100"
                      value="80"
                      barClassName="progress-bar-danger"
                    />
                  </div>
                  <div>
                    <h3>Adobe Illustrator</h3>
                    <Progress
                      striped
                      max="100"
                      value="65"
                      barClassName="progress-bar-danger"
                    />
                  </div>
                  <div>
                    <h3>HTML</h3>
                    <Progress
                      striped
                      max="100"
                      value="85"
                      barClassName="progress-bar-danger"
                    />
                  </div>
                  <div>
                    <h3>JavaScript</h3>
                    <Progress
                      striped
                      max="100"
                      value="65"
                      barClassName="progress-bar-danger"
                    />
                  </div>
                  <div>
                    <h3>React JS</h3>
                    <Progress
                      striped
                      max="100"
                      value="65"
                      barClassName="progress-bar-danger"
                    />
                  </div>
                  <div>
                    <h3>Vue JS</h3>
                    <Progress
                      striped
                      max="100"
                      value="80"
                      barClassName="progress-bar-danger"
                    />
                  </div>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">
                  E-mail me now!
                </h2>
                <hr />
                <Container className="text-center">
                  <a
                    href="mailto:nathanielsenje@hotmail.com?subject=subject&message=message"
                  >
                    <h2 className="title">
                      nathaneilsenje@hotmail.com </h2>
                  </a>
                  <h3><i className="nc-icon nc-chat-33" /> (255) 68 321 9868</h3>
                  <h3><i className="nc-icon nc-pin-3" /> Dar es Salaam - Tanzania</h3>

                </Container>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
