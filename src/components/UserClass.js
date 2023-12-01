import {Component} from "react";
class UserClass extends Component{

    constructor(props) {
        super(props);
        console.log("Child Constructor called");

        this.state = {
            count: 0
        };
    }

    componentDidMount(){
        console.log("componentDidMount called");
    }
    render(){
        const {name, location} = this.props;
        const {count} = this.state;
        console.log("Child render called");
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={() => {
                   this.setState({
                       count: this.state.count + 1
                   })
                }}>
                    Increase count
                </button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @SwagatWebDev</h4>
            </div>
        )
    }
}
 export default UserClass;
