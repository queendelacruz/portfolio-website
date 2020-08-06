import React from 'react';
import {Image, Button, Container, Col, Row} from 'react-bootstrap';
import { AiFillLinkedin, AiFillMail, AiFillGithub} from 'react-icons/ai';
import {IconContext } from 'react-icons';
import config from './config.json';

function Home() {
    return (

      <div className="App-body ">
        <Image roundedCircle style={{ width: '10rem' }} src={config['profile_pic_path']} class="ml-auto rounded-circle"/>

        <h1>Hi! I'm {config['fullname']}</h1>
        <p>{config['about_me']}</p>
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
                <Button href="/projects">Projects</Button>{' '}
                <Button href="/experience">Experience</Button>{' '}
                <Button >Resume</Button>
              </div>
            </Col>
          </Row>
        
        </Container>
        
      </div>
    );
}

export default Home;