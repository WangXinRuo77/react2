import React from 'react';
const ShowData = React.createClass({
    getInitialState(){
        return {
            message:"hello webpack react",
        }
    },
    handleChange(ev){
        this.setState({message:ev.target.value})
    },
    render(){
        let myMessage = this.state.message;
        return(
            <div>
                <p>{myMessage}</p>
                <input type="text" value={myMessage} onChange={this.handleChange}/>
            </div>
        )
    }
})
export default ShowData;
