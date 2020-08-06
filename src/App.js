import React from 'react';
import {Image, Button, Container, Col, Row} from 'react-bootstrap';
import { AiFillLinkedin, AiFillMail, AiFillGithub} from 'react-icons/ai';
import {IconContext } from 'react-icons';
import './App.css';

function App() {
  
  return (
    <div className="App">
      {/* <Image roundedCircle style={{ width: '10rem' }} src="images/profile.jpg" class="ml-auto rounded-circle"/> */}
      <div className="App-body ">
        <h1>Hi! I'm Queen Dela Cruz</h1>
        <p>Recently graduated with a Bachelor of Science in Software Systems from Simon Fraser University.</p>
        <Container>
          <Row>
            <Col>
              <IconContext.Provider value={{className: "rounded-circle ", size: 50, color:"#1f1e2f"}}>
                <a href="https://www.linkedin.com/in/queen-dela-cruz-867331ab/"> <AiFillLinkedin /></a>
                <a href="mailto:queenie.dcrz@gmail.com"><AiFillMail /></a>
                <a href="https://github.com/queendelacruz"><AiFillGithub /></a>
              </IconContext.Provider>
            </Col>
            <Col>
              <div  className="float-right">
                <Button >Projects</Button>{' '}
                <Button >Experience</Button>{' '}
                <Button >Skills</Button>
              </div>
            </Col>
          </Row>
        
        </Container>
        
      </div>
        
    </div>
  );
}

export default App;
