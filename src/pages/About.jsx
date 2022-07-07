import { Row, Col } from "reactstrap";
import Zoom from "react-reveal/Zoom";

const About = () => {
    const businessNameUpper = process?.env?.REACT_APP_BUSINESS_NAME?.toUpperCase();

    return (
        <Zoom>
            <Row style={{ margin: "auto", marginTop: 90 }}>
                <Col></Col>
                <Col md={6}>
                    <div style={{ minHeight: "75vh", marginTop: "50px", padding: "50px 100px" }}>
                        <h1 style={{ color: "#D866EB" }}>ABOUT {businessNameUpper}</h1>
                        <p>
                            Pixel Perfect is one of the leading luxury private party and corporate lighting animations company in the UK, with clients
                            across the world. We achieve this by creating and delivering memorable experiences and by providing superior world class
                            light show services. Our delighted customers recommend us to their friends and family, venues and suppliers refer us to
                            their clients and our employees feel proud to say they work with us.
                        </p>

                        <h3 style={{ color: "#42bbdd" }}>OUR STORY</h3>
                        <p>
                            Ambitious for success, combinining their skills a group of friends set up Pixel Perfect to be a fresh and energised light
                            animation company that would provide an outstanding service to both corporate and private clients.
                        </p>
                        <p>
                            Pixel Perfect became limited in 2022 and the company has grown consistently each year through continued reinvestment in
                            personnel, products and services.This is all just temporary text that doesn't mean anything but will give you an idea of
                            what content can look like on the page
                        </p>

                        <h3 style={{ color: "#D866EB" }}>WHY US?</h3>
                        <p>
                            Our passionate event management team strives to offer an unrivalled experience, achieved through building strong
                            relationships with all our clients and suppliers, ensuring comfort and reassurance at every level. Every event we produce
                            for is as special to us as it is to you. With a strong team of individuals and large knowledge base of the event
                            industry,Pixel Perfect make every event, no matter what size, a huge success.
                        </p>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </Zoom>
    );
};

export default About;
