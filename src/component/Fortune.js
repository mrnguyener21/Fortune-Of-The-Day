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
        fortune3: 'sometimes the person we are looking for the most is ourself',
    };

    stateDetail = () => {
        this.setState({number:Math.floor(Math.random()*3+1)});
        
        //why is my if/else statement reflecting the previous number
        //ANSWER BECAUSE WHEN I CLICK BOTH NUMBER AND FORTUNE GET READ AT THE SAME TIME, THE CHANGE TO FORTUNE HAS TO HAPPEN AFTER NUMBER IS CHANGED
        setTimeout(()=>{
            if(this.state.number === 1){
                this.setState({fortunes: this.fortuneOptions.fortune1});//the grass is greener on the other side',
            }else if(this.state.number === 2){
                this.setState({fortunes: this.fortuneOptions.fortune2});//'there is always light at the end of the tunnel',
            }else if(this.state.number === 3){
                this.setState({fortunes:this.fortuneOptions.fortune3});//'sometimes the person we are looking for the most is ourself',
            };
        },10)
        
    }
    
    render(){
        return(
            <>
                <h1 className={styles.fortune}>{this.state.fortunes}</h1>
                <button className={styles.button}onClick={this.stateDetail}>FORTUNE</button>
                {console.log(this.state.number)}   
                {console.log(this.state.fortunes)}   

            </>
        )
    }
    //gonna need to make an if else statement to determine if fortune is 1,2, or 3 and from there will change the setState to the corresponding fortune
    //create a math.random for as the callbackfunction after the button gets clicked 

}
export default Fortunes;