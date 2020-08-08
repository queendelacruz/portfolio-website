import React from 'react';
import {CardDeck} from 'react-bootstrap';
import { ProjectCards } from '../components';
import data from '../data/data.json';
import { NavigationBar } from '../components';

function Projects() {
    // const cards = data['projects'].map()
    return (
        <div>
            <NavigationBar />
            <CardDeck >
                {data['projects'].map((proj) => 
                <ProjectCards 
                    title={proj['title']}
                    imgsrc={proj['imgsrc']}
                    btnlink={proj['btnlink']}
                    description={proj['description']}/>)}
            </CardDeck>
        </div>
        
    );
}

export default Projects;