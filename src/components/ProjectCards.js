import React from 'react';
import {Card, Button, Accordion} from 'react-bootstrap';
import styles from '../css/Projects.module.css';

const CardHeader = ({title, imgsrc}) => {
    return (
        <div className={styles.cardheader}>
            <Card.Header>
                <Accordion.Toggle  as={Button} variant="flat" eventKey="0">
                <Card.Img className={styles.image} variant="top" src={imgsrc} />

                    <Card.Title>{title}</Card.Title>
                </Accordion.Toggle>
            </Card.Header>
            
        </div>
    );
}
const WillCollapse = ({description, btnlink}) => {
    return (
        <Accordion.Collapse eventKey="0">
            <Card.Body>
                <Card.Text>{description}</Card.Text>
                <Button href={btnlink}>See more!</Button>
            </Card.Body>
        </Accordion.Collapse>
    );
}
const ProjectCards = ({title, imgsrc, btnlink, description}) => {

    return (
        <Accordion>
            <Card className={styles.cardscontent} > 
                <CardHeader title={title} imgsrc={imgsrc} /> 
                <WillCollapse description={description} btnlink={btnlink} />
            </Card>
        </Accordion>
    );
}

export default ProjectCards;