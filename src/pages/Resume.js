import React, {useState} from 'react';
import data from '../data/data.json';
import { PDFViewer, NavigationBar } from '../components';

const Resume = () => {
    return (
        <div>
            <NavigationBar />
            <PDFViewer pdfFile={data['resume']} />
        
        </div>
    );
}

export default Resume;