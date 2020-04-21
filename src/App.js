import React, { useState, useEffect } from 'react';
import Fortune from './component/Fortune.js';
import styles from './App.module.css';
import fortuneCookie from './component/image/fortuneCookie.png';
import axios from 'axios';

const App = () => {

    const [fortune, setFortune] = useState(null)
    
    useEffect(async() => {
            const response = await fetch('https://api.adviceslip.com/advice');
            const data = await response.json();
            setFortune(data.slip.advice)
    }, [Fortune])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>YOUR FORTUNE AWAITS</h1>
            <img className={styles.fortuneCookie} src={fortuneCookie} alt ='fortuneCookie' />
            <Fortune fetchedFortune={fortune} />
        </div>
    );
}

export default App;