import React, { useState } from 'react';
import axios from 'axios';
import './Widget.css';

const Widget = () => {
    const [inputVal, setInputVal] = useState('characters/random');
    const [request, setRequest] = useState();

    const handleRequest = (e) => {
        e.preventDefault();
        axios.get(`/api/${inputVal}?limit=3`)
        .then(res => setRequest(res.data))
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

    const handleStrongRequest = (e) => {
        const requestedURL = e.target.innerHTML

        axios.get(`/api/${requestedURL}`)
        .then(res => setRequest(res.data))
    }
    
    return (
        <div className="widget">
            <p>The Invincible API is a free JSON API for characters, and episodes from Amazon’s show Invincible.</p>
            <h2>Try A Request</h2>
            <form className="request">
                <div className="brick">
                    https://invincible-api.herokuapp.com/api/
                </div>
                <input type="text" value={inputVal} placeholder="characters/random" onChange={(e) => setInputVal(e.target.value)} />
                <button onClick={handleRequest} className="btn">Get</button>
            </form>
            <div className="try-block">
                <p onClick={handleStrongRequest} >Try <strong>/characters</strong></p>
                <p onClick={handleStrongRequest} >Try <strong>/episodes</strong></p>
                <p onClick={handleStrongRequest} >Try <strong>/quotes</strong></p>
            </div>
            <div className="display-box">
                <pre className="display-text" >
                  {request ? JSON.stringify(request, null, 5) : JSON.stringify(defaultObj, null, 5)}  
                </pre>
            </div>
            <p>* Max of three shown</p>
        </div>
    )
};

export default Widget;
