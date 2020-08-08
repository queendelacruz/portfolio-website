import React, {useState} from 'react';
import { pdfjs, Document, Page} from 'react-pdf';
import { Button, Container, Col, Row } from 'react-bootstrap';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const PDFViewer = ({pdfFile}) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
 
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }
    const nextBtn = () => {
        if(pageNumber < numPages){
            setPageNumber(pageNumber+1);
        }
    }
    const prevBtn = () => {
        if(pageNumber > 1){
            setPageNumber(pageNumber-1);
        }
    }
    
    return (
        <div>
            <Document
                file={pdfFile}
                onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <Container>
                <Row>
                    <Col  xs lg="3"><p>Page {pageNumber} of {numPages}</p></Col>
                    <Col>
                        <Button onClick={prevBtn}>Previous</Button> {' '}
                        <Button onClick={nextBtn}>Next</Button>
                    </Col>
                </Row>
            </Container>
        
        
        </div>
    );
}

export default PDFViewer;
