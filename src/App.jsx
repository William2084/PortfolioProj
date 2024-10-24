import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="App">
    <header>
      <nav>
        <a href="#home" className="logo">
          <img src="/images/logo.webp" alt="Logo" />
        </a>
        <ul className="nav-links">
          <li><a href="#home"><i className="fas fa-home"></i> Home</a></li>
          <li><a href="#about"><i className="fas fa-user"></i> About Me</a></li>
          <li><a href="#projects"><i className="fas fa-briefcase"></i> Projects</a></li>
          <li><a href="#contact"><i className="fas fa-envelope"></i> Contact Me</a></li>
        </ul>
      </nav>
    </header>

      {/* Home Section */}
      <section id="home" className="home">
        <div className="home-content">
          <h2>Hello!</h2>
          <h2>I'm <span>William.</span></h2>
          <h4>A Front-End Developer</h4>
          <p>I specialize in building responsive, user-friendly websites using HTML, CSS, and JavaScript. From concept to creation, I bring ideas to life on the web with clean, efficient code and a passion for modern web design. Whether it's a simple landing page or a dynamic web application, I can help turn your vision into reality.Checkout my work below and feel free to get in touch if you want to work with me.</p>
        <div class="btn">
          <a href="#contact">Contact Me</a>
        </div>
        </div>
        <div className="homei">
          <img src="/images/home.jpg" alt="William's Profile" />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about">
        <div className="abouti">
          <img src="/images/Pic.jpg" alt="About Me" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p> I am a passionate front-end developer dedicated to crafting engaging and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, they bring designs to life while focusing on functionality and performance. Their keen eye for detail and commitment to responsive design ensure that applications look great and work seamlessly across all devices. Constantly learning and evolving that stays up-to-date with the latest trends and technologies to deliver innovative solutions that enhance user interactions.</p>
          <br></br>
          <div className="skills">
          <h2>My Skills:</h2>
          <br></br>
          <img src='/images/html.png' alt='1'></img> <img src="/images/css.png" alt="2" /> <img src="/images/js.jpg" alt="3" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-list">
          <div className="project-item">
          <img src="/images/Web.jpg" alt="1" />

            <h3>Project 1: Computer Parts and Services Website</h3>
            <p>The website is a comprehenssive online platform dedicated to providing a wide range of computer parts and services. Designed with user experience in mind, it features an intuitive interface that allows customers to easily browse through an extensive inventory of components, from processors and graphics cards to motherboards and peripherals. Each product listing includes detailed specifications, images, and customer reviews to help users make informed purchasing decisions. In addition to parts, the site offers a variety of services, including computer assembly, repairs, and upgrades, ensuring that customers can find everything they need to build or maintain their systems. With secure payment options and reliable shipping, the website aims to deliver a seamless shopping experience for tech enthusiasts and casual users alike..</p>
          </div>
          <div className="project-item">
            <img src="/images/prjt.png " alt="2" />
            <h3>Project 2: Website Portfolio</h3>
            <p>My online portfolio website is a personal showcase designed to highlight my skills, projects, and expertise as an aspiring front-end web developer. It offers a sleek and user-friendly interface that invites visitors to explore who i am and what i do.My portfolio emphasizes the technical skills, creativity, and professionalism, that i possess making it a perfect tool for job applications, networking, and building your online presence.</p>
          </div>
          <div className="project-item">
            <img src="/images/Aws.jpg" alt="3" />
            <h3>Project 3: Full-Stack Website</h3>
            <p>The full stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js) is a robust and dynamic platform designed to deliver a seamless user experience. The application features a responsive front end developed with React, providing users with an intuitive interface that allows for easy navigation and interaction. The back end, powered by Node.js and Express.js, ensures efficient handling of requests and data management, while MongoDB serves as the database, offering flexibility and scalability for data storage. Users can engage with the application through various functionalities, such as user authentication, real-time data updates, and interactive components. This application exemplifies the power of the MERN stack, combining modern technologies to create a fully integrated solution that meets the needs of both users and administrators.</p>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" required></textarea>
          </div>
          <div class="btn">
          <a href="#contact">Send Message</a>
        </div>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 William's Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
