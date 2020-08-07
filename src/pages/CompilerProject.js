import React, {useState} from 'react';
import {Card, Button,CardDeck} from 'react-bootstrap';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';

const CodeEditor = () => {
    const [code, setCode] = useState(
    `exec{
        const str := "apples".
    
        const rev := reverse str.
        print isEqual(rev, "selppa");.
        release rev.
        print isEqual(rev, "selppa").
    }
    func isEqual<string str, string expected>->bool{
        var eq := length str == length expected.
    
        for index i of expected {
            eq := expected[i] == str[i] && eq.
        }
        return eq.
    }`);
    return (
        <Card >
            <Card.Header >
                <Card.Title >Pika Code Editor</Card.Title>
            </Card.Header>
            <Card.Body>
            <Editor
                value={code}
                onValueChange={code => setCode( code )}
                highlight={code => Prism.highlight(code, Prism.languages.javascript, 'clike')}
                padding={10}
                style={{
                fontSize: 12,
                backgroundColor: "white",
                height: 500,
                width: 500,
                color: "black",
                fontFamily:"Courier New"
                }}
            />
            </Card.Body>
            <Card.Body><Button className="float-right">Compile</Button></Card.Body>
        </Card>
    );
}

const OutputCard = () => {
    const [output, setOutput] = useState("Output");
    return (
        <Card style={{
            height: 500,
            width: 500
        }}>
            <Card.Header >
                <Card.Title >Pika Compiler Output</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text className="code" style={{color:"black", fontFamily:"Courier New"}}>{output}</Card.Text>
            </Card.Body>
        </Card>
    );
}

const CompilerProject = () => {
    
    return (
        <div>
            <h1>Compiler Project</h1>
            <CardDeck style={{color:"black"}}>
            <CodeEditor></CodeEditor>
            <OutputCard />
            </CardDeck>
        </div>
    );
}

export default CompilerProject;