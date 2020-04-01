import React from 'react';

class Fortunes extends React.Component{
    state={
        number: 0,
        fortunes: null,
    };

    fortuneOptions = {
        fortune1: 'the grass is greener on the other side',
        fortune2: 'there is always light at the end of the tunnel',
        fortune3: 'sometimes the person we are looking for the most is ourself'
    };
    number = () => this.setState({number:Math.floor(Math.random()*3+1)}); 
    // increment = this.setState({number:this.state.number +1});
    
    
    render(){
        return(
            <>
                <button onClick={this.number}>CLICK</button>   
                <h1>{this.state.number}</h1>
                <h1>{this.state.fortunes}</h1>
            </>
        )
    }
    //gonna need to make an if else statement to determine if fortune is 1,2, or 3 and from there will change the setState to the corresponding fortune
    //create a math.random for as the callbackfunction after the button gets clicked 

}
export default Fortunes;