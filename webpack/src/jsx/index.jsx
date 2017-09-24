
const ShowData = React.createClass({
    getInitialState(){
        return {
            location:"beijing",
        }
    },
    handleChange(ev){
        const inputElement = ev.target||ev.srcElement;
        this.state.location = inputElement.value;
    },
    render(){
        return(
            <div>
                <p>{this.state.location}</p>
                <input type="text" onchange={this.handleChange}/>
            </div>
        )
    }
})

React.render(<ShowData/>,document.getElementById('div1'))