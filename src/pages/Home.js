import React from 'react';
import {Image, Button, Container, Col, Row} from 'react-bootstrap';
import { AiFillLinkedin, AiFillMail, AiFillGithub} from 'react-icons/ai';
import {IconContext } from 'react-icons';
import data from '../data/data.json';
import styles from '../css/Home.module.css';

function Home() {
    return (

      <div className={styles.Appbody}>
        <Image roundedCircle style={{ width: '10rem' }} src={data['profile_pic_path']} class="ml-auto rounded-circle"/>

        <h1>Hi! I'm {data['fullname']}</h1>
        <p>{data['about_me']}</p>
        <Container>
          <Row>
            <Col>
              <IconContext.Provider value={{className: "rounded-circle ", size: 50, color:"#1f1e2f"}}>
                <a href={data['linked_in']}> <AiFillLinkedin /></a>
                <a href={data['mail']}><AiFillMail /></a>
                <a href={data['github']}><AiFillGithub /></a>
              </IconContext.Provider>
            </Col>
            <Col>
              <div  className="float-right">
                <Button href="/projects">Projects</Button>{' '}
                <Button href="/experience">Experience</Button>{' '}
                <Button href="/resume">Resume</Button>
              </div>
            </Col>
          </Row>
        
        </Container>
        
      </div>
    );
}

export default Home;