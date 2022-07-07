import { Col, Row, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Testimonials from "../components/Testimonials";

const Landing = () => {
    const businessNameUpper = process?.env?.REACT_APP_BUSINESS_NAME?.toUpperCase();

    return (
        <div
            style={{
                minHeight: "75vh",
                marginTop: "50px",
                textAlign: "left",
                overflowY: "scroll",
            }}
        >
            <Row
                className="has-overlay"
                style={{
                    posiiton: "relative",
                    minHeight: "75vh",
                    padding: "40px 90px",
                    color: "white",
                    backgroundSize: "cover",
                    backgroundImage:
                        "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://as1.ftcdn.net/v2/jpg/03/06/90/06/1000_F_306900688_p7AQzIBsdhRvC9mTOuywWGjz1ZCLlgIQ.jpg')",
                }}
            >
                <Col
                    md={12}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Zoom>
                        <h1 style={{ fontSize: "4em" }}>PIXELPerfect</h1>
                        <h1 style={{ fontSize: "2em" }}>WE BRING LIFE TO YOUR EVENTS</h1>
                        <p>
                            <strong style={{ fontWeight: 900 }}>BESPOKE LIGHTING SHOWS TAILORED TO YOUR BUILDING / ENVIRONMENT</strong>
                        </p>
                        <Button size={"lg"} style={{ backgroundColor: "#42bbdd" }}>
                            GET A QUOTE
                        </Button>
                    </Zoom>
                </Col>
            </Row>
            <Row style={{ padding: "90px", background: "white" }}>
                <Col>
                    <Fade left>
                        <h1 style={{ color: "#42bbdd" }}>OUR SERVICES</h1>
                    </Fade>
                </Col>
                <Col md={6}>
                    <Fade right>
                        <p>Here’s how we can help you deliver an incredible immersive event</p>
                        <ul>
                            <li>Dedicated project management from start to finish</li>
                            <li>We function as anextension of your team saving you valuable time and stress</li>

                            <li>State-of-the-art technology and technically perfect event production</li>
                            <li>We’ll source the best vendors and suppliers for a unique event Excellent</li>
                        </ul>
                    </Fade>
                </Col>
            </Row>
            <Row style={{ padding: "90px", background: "#F7F9FC" }}>
                <Col md={6}>
                    <Fade left>
                        <p>Here’s how we can help you deliver an incredible immersive event</p>
                        <ul>
                            <li>Dedicated project management from start to finish</li>
                            <li>We function as anextension of your team saving you valuable time and stress</li>

                            <li>State-of-the-art technology and technically perfect event production</li>
                            <li>We’ll source the best vendors and suppliers for a unique event Excellent</li>
                        </ul>
                    </Fade>
                </Col>
                <Col>
                    <Fade right>
                        <h1 style={{ color: "#D866EB" }}>OUR PROCESS</h1>
                    </Fade>
                </Col>
            </Row>

            <Row style={{ padding: "90px", background: "white" }}>
                <Col>
                    <Fade right>
                        <h1 style={{ color: "#42bbdd" }}>CASE STUDIES</h1>
                    </Fade>
                </Col>

                <Col md={6}>
                    <Fade left>
                        <p>Here’s how we can help you deliver an incredible immersive event</p>
                        <ul>
                            <li>Dedicated project management from start to finish</li>
                            <li>We function as anextension of your team saving you valuable time and stress</li>

                            <li>State-of-the-art technology and technically perfect event production</li>
                            <li>We’ll source the best vendors and suppliers for a unique event Excellent</li>
                        </ul>
                    </Fade>
                </Col>
            </Row>

            <Row style={{ padding: "90px", background: "#2F297D" }}>
                <Col md={12}>
                    <div style={{ textAlign: "center" }}>
                        <Fade right>
                            <h1 style={{ color: "white" }}>TESTIMONIALS</h1>
                        </Fade>
                    </div>
                </Col>

                <Col md={12} style={{ textAlign: "right" }}>
                    <Fade>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        {/* <Testimonials style={{ marginTop: 50 }} /> */}
                    </Fade>
                </Col>
            </Row>
        </div>
    );
};

export default Landing;
