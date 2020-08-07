import React from 'react';
import {CardDeck} from 'react-bootstrap';
import { ProjectCards } from '../components';
import data from '../data/data.json';

function Projects() {
    // const cards = data['projects'].map()
    return (
        <CardDeck >
            {data['projects'].map((proj) => 
            <ProjectCards 
                title={proj['title']}
                imgsrc={proj['imgsrc']}
                btnlink={proj['btnlink']}
                description={proj['description']}/>)}
        </CardDeck>
    );
}

export default Projects;