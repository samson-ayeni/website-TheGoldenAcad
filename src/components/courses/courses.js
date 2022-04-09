import React, {  useState, useEffect } from 'react';
import './courses.scss';

function Courses() {
    const [content, setContent] = useState([]);
    const getContent = async () => {
        try {
            const response = await fetch("http://localhost:4000/thegoldenacademy/videos");    
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
            <div className="title1">Understanding Trend Direction</div>
            <a href={content}><button onClick={() => setContent(content[0].path)}className="playButton1">Play</button></a>
        </div>
        
    );
}
   
  export default Courses;