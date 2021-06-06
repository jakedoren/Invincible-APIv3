import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Widget.css';
import ReactJson from 'react-json-view'

const Widget = () => {
    const [inputVal, setInputVal] = useState('characters/random');
    const [request, setRequest] = useState();

    const handleRequest = (e) => {
        e.preventDefault();
        axios.get(`/api/${inputVal}`)
        .then(res => setRequest(res.data))
    }

    const preStyle =  {
        display: 'block',
        padding: '10px 30px',
        whiteSpace: 'pre-wrap'
    }

    const defaultObj =
    {
        _id: "60b44a8d4e2aec2c2cb664bb",
        firstname: "Mark",
        lastname: "Grayson",
        image: "https://invincible-api.s3.amazonaws.com/Invincible.jpg",
        alias: "Invincible",
        actor: "Steven Yeun"
    }
    

    return (
        <div className="widget">
            <p>The Invincible API is a free JSON API for characters, and episodes from Amazon’s show Invincible.</p>
            <h2>Try A Request</h2>
            <form className="request">
                <div className="brick">https://invincible-api.herokuapp.com/</div>
                <input type="text" value={inputVal} placeholder="characters/random" onChange={(e) => setInputVal(e.target.value)} />
                <button onClick={handleRequest}>Get</button>
            </form>
            <div className="display-box">
                <pre className="display-text" style={preStyle}>
                  {request ? JSON.stringify(request, null, 5) : JSON.stringify(defaultObj, null, 5)}  
                </pre>
            </div>
        </div>
    )
};

export default Widget;
