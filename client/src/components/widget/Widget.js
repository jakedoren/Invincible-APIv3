import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Widget.css';

const Widget = () => {
    const [inputVal, setInputVal] = useState('characters/random');
    const [request, setRequest] = useState();

    const handleRequest = (e) => {
        e.preventDefault();
        axios.get(`/api/${inputVal}`)
        .then(res => setRequest(res.data))
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
                {JSON.stringify(request)}
            </div>
        </div>
    )
};

export default Widget;
