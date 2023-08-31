import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg3 from "../assets/img/Frame 1 (8).png";
import projImg4 from "../assets/img/Frame 1 (7).png";
import projImg5 from "../assets/img/Frame 1 (2).png";
import projImg6 from "../assets/img/Frame 1 (11).png";
import projImg7 from "../assets/img/Frame 1 (9).png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Movie Watchlist App",
      description: "Your ultimate movie companion. Explore, search, and effortlessly add movies to your personalized watchlist. Elevate your movie experience with ease.",
      imgUrl: projImg6,
      link: "https://rose534.github.io/Final-project/"
      
    },
    {
      title: "Ecommerce App",
      description: "Your Ecommerce Powerhouse. Take control of your online store like never before. Easily delete, upload, and create products to entice buyers. Elevate your business with ShopMasters and make every sale count.",
      imgUrl: projImg7,
      link: "https://phase-4-project-ten.vercel.app/"
    },
    {
      title: "Portfolio App",
      description: "Unleash Your Creativity. Showcase your work seamlessly with our portfolio app. Upload, arrange, and display your pictures effortlessly. Elevate your portfolio and captivate your audience with Portlo.",
      imgUrl: projImg3,
      link: "https://portfolio-rose534.vercel.app/"
    }
  ];

  const uxUiProjects = [
    {
      title: "Drama Quest",
      description: "Your Gateway to K-Drama Exploration. Immerse yourself in the world of K-Dramas as you explore, search, and add your favorites to your watchlist. Share your thoughts, leave comments, and connect with fellow enthusiasts. Embark on a journey of drama discovery and connection with Drama Quest.",
      imgUrl: projImg5,
      link: "https://wambuirose5343.wixsite.com/my-site/projects",
    },
    {
      title: "Brandify 3D",
      description: "Revolutionizing Personalized T-Shirt Design. Discover a seamless experience as users create unique t-shirts with logos, images, and AI-generated designs. Witness intuitive customization, effortless logo integration, and a 3D preview. Explore the fusion of technology and fashion, where creativity knows no bounds, with Brandify 3D.",
      imgUrl: projImg4,
      link: "https://wambuirose5343.wixsite.com/my-site/brandify"
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Welcome to my projects showcase, where innovation meets implementation. Each project is a testament to my dedication and creative prowess in the realms of Web Development, UX/UI Design, and Web Design.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
    <Nav.Item>
                      <Nav.Link eventKey="first">Web development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">UX/UI</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Github</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                        {uxUiProjects.map((project, index) => {
                          return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                        })
                      }
                      </Row>
                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                       <div className="d-flex flex-column align-items-center">
                         <p>Welcome to my GitHub profile! You can find my open-source projects and contributions on my GitHub repository.</p>
                           <a href="https://github.com/Rose534" target="_blank" rel="noopener noreferrer" style={{ color: "grey", fontSize: "20px" }}>
                                Visit my GitHub profile
                                   </a>
                                      </div>
                                    </Tab.Pane>



                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
