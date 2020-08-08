import React, {useState} from 'react';
import data from '../data/data.json';
import { PDFViewer } from '../components';

const Resume = () => {
    return (
        <div>
            <PDFViewer pdfFile={data['resume']} />
        
        </div>
    );
}

export default Resume;