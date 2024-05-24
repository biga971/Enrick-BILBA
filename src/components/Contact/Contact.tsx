import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Prêt à travailler avec moi sur un projet ?  </p>
        <p>Vous pouvez me contacter via :</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:enrick.bilba@icould.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:enrick.bilba@icould.com">enrick.bilba@icould.com</a>
        </div>
        <div>
        <a href="tel:+590690630300"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+590690630300">(+590) 690630300</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}