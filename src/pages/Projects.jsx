import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";
import travel from "../assets/projects/travel.jpg";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="PyroEyes Alert System"
              description="This is a real-time fire detection solution powered by deep learning and computer vision. By combining Convolutional Neural Networks (CNNs) with OpenCV for video processing, the system accurately identifies fires in live streams. Integrated with Flask for alert notifications, it promptly notifies users upon detection, enhancing response times. This project demonstrates strong technical proficiency in deep learning and computer vision, showcasing an innovative approach to fire safety."
              ghLink="https://github.com/Dhilip546/PyroEyes-Alert-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Cricket Best 11"
              description=" This begins with web scraping, fetching real-time and historical cricket data from diverse online sources. This raw data then undergoes meticulous cleaning, ensuring accuracy and consistency through rigorous data cleaning processes. Leveraging Power Query's capabilities, the dashboard transforms and refines the data, preparing it for analysis. Finally, utilizing Power BI's DAX language, the dashboard creates intuitive visualizations that enable effortless exploration and analysis."
              linkedinPostLink="https://www.linkedin.com/feed/update/urn:li:activity:7175446640810504192/"
              demoLink="https://app.powerbi.com/groups/me/reports/d8d95a1b-aaad-48ed-a33d-1e7fe4279fe7/ReportSection3a8cb23b814911c94608?experience=power-bi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Sales Analytics"
              description="This project utilizing MySQL, Excel, SQL, and Power BI. I set up a robust MySQL environment locally for efficient data storage and management. Using SQL queries, I conducted in-depth analysis of sales data, uncovering insights into customer behavior and market trends. Additionally, I developed a dynamic Power BI dashboard for real-time sales insights. This project showcased my expertise in data analysis and visualization, enabling informed decision-making and driving business growth."
              linkedinPostLink="https://www.linkedin.com/feed/update/urn:li:activity:7171147036610822144/"
              demoLink="https://app.powerbi.com/groups/me/reports/67bc65f7-6f31-4693-90dd-c9a72d49e947/ReportSectionc8b0173ffb8357b284c0?experience=power-bi%29%3F"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Blogger's"
              description="The Blogger’s Website offers a user-friendly platform for writing and sharing stories. Leveraging Django, HTML, CSS, and JavaScript, I ensured a seamless user experience. Docker containerization, Jenkins automated testing, and Git version control streamlined development, ensuring code consistency. This project epitomizes simplicity and accessibility, enabling everyone to share their stories effortlessly."
              ghLink="https://github.com/Dhilip546/Blogging-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Botty"
              description="This is an innovative chatbot tailored for e-commerce websites. Built with Python, Flask, Hugging Face Transformers, JSON, HTML, and CSS, it offers a mix of fixed and flexible answers to engage users effectively. By combining JSON-loaded QA pairs with a conversational model, Botty delivers versatile and context-aware responses, enhancing the customer shopping experience."

              ghLink="https://github.com/Dhilip546/Botty"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Go Discover"
              description="This is a dynamic travel webpage offering users a seamless experience to explore and select from diverse travel packages and destinations. Combining HTML, CSS, JavaScript, and PHP, it ensures smooth navigation and efficient selection processes. This integration facilitates easy exploration and selection of preferred travel options, providing users with a hassle-free journey through their travel planning."
              ghLink="https://github.com/Dhilip546/Go-Discover"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects