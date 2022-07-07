import { Container, Row, Col } from "reactstrap";
import { RiFacebookBoxFill, RiTwitterFill, RiYoutubeFill, RiInstagramFill } from "react-icons/ri";
import GlowingText from "./GlowingText";

const Footer = () => {
    const glow = false;

    return (
        <div className="footer" style={{ backgroundColor: "#0D122F", color: "white", padding: 50 }}>
            <Row>
                <Col md={3} className="mb-5 mb-md-0">
                    <div>
                        {glow ? (
                            <GlowingText tag="h5" textColor="white" glowColor="#59D8FB" glowSpread={150} style={{ marginBottom: 30 }}>
                                CORPORATE
                            </GlowingText>
                        ) : (
                            <h5 style={{ color: "#59D8FB" }}>CORPORATE</h5>
                        )}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span>Corporate Events</span>
                            <span>Case Studies</span>
                        </div>
                    </div>
                </Col>

                <Col md={3} className="mb-5 mb-md-0">
                    <div>
                        {glow ? (
                            <GlowingText tag="h5" textColor="white" glowColor="#e418e1" glowSpread={150} style={{ marginBottom: 30 }}>
                                PRIVATE
                            </GlowingText>
                        ) : (
                            <h5 style={{ color: "#59D8FB" }}>PRIVATE</h5>
                        )}

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span>Private Events</span>
                            <span>Case Studies</span>
                        </div>
                    </div>
                </Col>

                <Col md={3} className="mb-5 mb-md-0">
                    <div>
                        {glow ? (
                            <GlowingText tag="h5" textColor="white" glowColor="#20e418" glowSpread={150} style={{ marginBottom: 30 }}>
                                ABOUT
                            </GlowingText>
                        ) : (
                            <h5 style={{ color: "#59D8FB" }}>ABOUT</h5>
                        )}

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span>Meet the Team</span>
                            <span>Our Process</span>
                        </div>
                    </div>
                </Col>

                <Col md={3}>
                    <div>
                        {glow ? (
                            <GlowingText tag="h5" textColor="white" glowColor="#f5ff38" glowSpread={150} style={{ marginBottom: 30 }}>
                                CONTACT
                            </GlowingText>
                        ) : (
                            <h5 style={{ color: "#59D8FB" }}>CONTACT</h5>
                        )}

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span>Enquiries</span>
                            <span>Request a Quote</span>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col style={{ marginTop: 30, fontSize: "1.8em", justifySelf: "center" }}>
                    <a href={`https://facebook.com/${process?.env?.REACT_APP_FACEBOOK_URL}`} style={{ color: "white" }} target="_blank">
                        <RiFacebookBoxFill style={{ marginRight: 25 }} />
                    </a>

                    <a href={`https://instagram.com/${process?.env?.REACT_APP_FACEBOOK_URL}`} style={{ color: "white" }} target="_blank">
                        <RiInstagramFill style={{ marginRight: 25 }} />
                    </a>

                    <a href={`https://twitter.com/${process?.env?.REACT_APP_FACEBOOK_URL}`} style={{ color: "white" }} target="_blank">
                        <RiTwitterFill style={{ marginRight: 25 }} />
                    </a>

                    <a href={`https://youtube.com/${process?.env?.REACT_APP_FACEBOOK_URL}`} style={{ color: "white" }} target="_blank">
                        <RiYoutubeFill style={{ marginRight: 20 }} />
                    </a>
                </Col>
            </Row>
            <Row>
                <Col style={{ marginTop: 20, fontSize: "0.7em" }}>
                    <span>
                        &copy; 2022 - {process?.env?.REACT_APP_BUSINESS_NAME} Registered in England and Wales No.{" "}
                        {process?.env?.REACT_APP_BUSINESS_NUMBER}
                    </span>
                    <span>Privacy Policy</span>
                    <span> Cookie Policy </span>
                </Col>
            </Row>
        </div>
        // </Container>
    );
};

export default Footer;
