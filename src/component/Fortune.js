import React from 'react';
import styles from './fortune.module.css';

class Fortunes extends React.Component{
    state={
        number: null,
        fortunes: null,
    };

    fortuneOptions = {
        fortune1: 'the grass is greener on the other side',
        fortune2: 'there is always light at the end of the tunnel',
        fortune3: 'sometimes the person we are looking for the most is ourself'
    };
    number = () => {
        this.setState({number:Math.floor(Math.random()*3+1)});
        
        const fortune = () => {
            if(this.state.number === 1){
                this.setState({fortunes: this.fortuneOptions.fortune1});
            }else if(this.state.number === 2){
                this.setState({fortunes: this.fortuneOptions.fortune2});
            }else if(this.state.number === 3){
                this.setState({fortunes:this.fortuneOptions.fortune3});
            }else{
                this.setState({fortunes:null});
            };
        };
        fortune();
    }

    render(){
        return(
            <>
                <h1 className={styles.fortune}>{this.state.fortunes}</h1>
                <button className={styles.button}onClick={this.number}>FORTUNE</button>   

            </>
        )
    }
    //gonna need to make an if else statement to determine if fortune is 1,2, or 3 and from there will change the setState to the corresponding fortune
    //create a math.random for as the callbackfunction after the button gets clicked 

}
export default Fortunes;