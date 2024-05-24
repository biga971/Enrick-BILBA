import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
import { projects } from '../../data'


export function Project() {
  return (
    <Container id="project">
      <h2>Mes projets</h2>
      <div className="projects">

        {projects.map((data, index) => (
            <ScrollAnimation key={index} animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#015C80" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
                <div className="project-links">
                  {data.git!= null ?
                  <a href={data.git} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="Visit site" /></a>
                  :null}
                  <a href={data.link} target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a> </div>
              </header>
              <div className="body">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
              <footer> <ul className="tech-list">
                {data.stacks.map( (d, i) => (<li key={i}>{d.name}</li>))} 
              </ul> </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}