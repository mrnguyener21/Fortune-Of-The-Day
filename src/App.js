import React from 'react';
import Fortunes from './component/Fortune.js';
import styles from './App.module.css';
import fortuneCookie from './component/image/fortuneCookie.png'

const App = () => {
    return(
    <div className={styles.container}>
        <h1 className={styles.title}>YOUR FORTUNE AWAITS</h1>
        <img className={styles.fortuneCookie} src={fortuneCookie} alt ='fortuneCookie'/>
        <Fortunes/>
    </div>

    )
}

export default App;