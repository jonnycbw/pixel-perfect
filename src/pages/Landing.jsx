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
                        <p>
                            <strong>Here’s how we can help you deliver an incredible immersive event</strong>
                        </p>
                        <ul>
                            <li>
                                We function as an extension of your team saving you valuable time and stress <br />
                                <br />
                            </li>
                            <li>
                                State-of-the-art technology and technically perfect event production <br />
                                <br />
                            </li>
                            <li>
                                Completely bespoke lighting that's tailored and progrmmed specifically for your needs <br />
                                <br />
                            </li>
                        </ul>
                    </Fade>
                </Col>
            </Row>
            <Row style={{ padding: "90px", background: "#F7F9FC" }}>
                <Col md={6}>
                    <Fade left>
                        <p>
                            <strong>How does the process work?</strong>
                        </p>
                        <ul style={{ listStyle: "none" }}>
                            <li style={{ marginBottom: 10 }}>
                                <span style={{ fontSize: "1.5em", fontWeight: "strong", color: "#D866EB", marginRight: 10 }}>1.</span>
                                Initial meeting to discuss your requirements and vision
                            </li>
                            <li style={{ marginBottom: 10 }}>
                                <span style={{ fontSize: "1.5em", fontWeight: "strong", color: "#D866EB", marginRight: 10 }}>2.</span>
                                Our expert light show engineers will come out to your venue to size up and render models of the venue
                            </li>
                            <li style={{ marginBottom: 10 }}>
                                <span style={{ fontSize: "1.5em", fontWeight: "strong", color: "#D866EB", marginRight: 10 }}>3.</span>
                                Using the models taken from the earlier step, the light programming team then program the light sequences to match
                                your venues architecture
                            </li>
                            <li style={{ marginBottom: 10 }}>
                                <span style={{ fontSize: "1.5em", fontWeight: "strong", color: "#D866EB", marginRight: 10 }}>4.</span>
                                Installation of the lighting ready for the show
                            </li>
                            <li style={{ marginBottom: 10 }}>
                                <span style={{ fontSize: "1.5em", fontWeight: "strong", color: "#D866EB", marginRight: 10 }}>5.</span>
                                The light show begins and your guests will be amazed
                            </li>
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
                        <p>
                            <strong>Why not take a look at our previous work for inspiration</strong>
                        </p>
                        <p>
                            We have a collection of case studies of our previous happy customers, that you can take a look at, to see what their
                            requirements were and what we did in order to provide the client with not only the light show that they wanted, but how we
                            go above and beyond to ensure everything down to sound and timing is{" "}
                        </p>
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

                <Col md={12} style={{ textAlign: "center", color: "white" }}>
                    <Fade>
                        <br />
                        <br />
                        <br />
                        <br />
                        Testimonials will be added here...
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
