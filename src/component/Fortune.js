import React from 'react';
// import PropTypes from 'prop-types'
import styles from './fortune.module.css';

class Fortune extends React.Component{
    state = {
        fortune: '',
    };

    handleClick = () => {
        const { fetchedFortune } = this.props;
        console.log(fetchedFortune)//returned null

        this.setState({ fortune:fetchedFortune });
    }
    
    render(){
        const { fortune } = this.state;
        return(
            <>
                <h1 className={styles.fortune}>{fortune}</h1>
                <button className={styles.button} onClick={this.handleClick}>FORTUNE</button>
            </>
        )
    }
}


export default Fortune;


