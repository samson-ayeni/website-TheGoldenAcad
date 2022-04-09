import React, {  useState, useEffect } from 'react';
import './documents.scss';

function Documents() {

    const [content, setContent] = useState([]);
    const getContent = async () => {
        try {
            const response = await fetch("http://localhost:4000/thegoldenacademy/materials");    
            const jsonData = await response.json();
      
            setContent(jsonData); 
        } catch (err) {
            console.log(err.message);
        }
    };
    useEffect(() => {
        getContent();
    }, []);

    return (
        <div>
            <div className="title1">Wyckoff Accumulation Schematic 1</div>
            <a href={content}><button onClick={() => setContent(content[3].path)}className="downloadButton1">Download</button></a>
            <div className="title2">Wyckoff Accumulation Schematic 2</div>
            <a href={content}><button onClick={() => setContent(content[0].path)} className="downloadButton2">Download</button></a>
            <div className="title3">Wyckoff Distribution Schematic 1</div>
            <a href={content}><button onClick={() => setContent(content[1].path)} className="downloadButton3">Download</button></a>
            <div className="title4">Wyckoff Distribution Schematic 2</div>
            <a href={content}><button onClick={() => setContent(content[2].path)} className="downloadButton4">Download</button></a>
        </div>
        
    );
}
   
  export default Documents;