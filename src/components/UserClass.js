import {Component} from "react";
class UserClass extends Component{

    constructor(props) {
        super(props);
        console.log(this.props.name, "Child Constructor called");

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "default"
            },
        };
    }

    async componentDidMount(){
        console.log(this.props.name, "componentDidMount called");
        const data = await fetch("https://api.github.com/users/SwagatWebDev");
        const response = await data.json();
        console.log(response);
        this.setState({
            userInfo: response
        })
    }

    componentDidUpdate() {
        console.log("Component Did updated")
    }

    componentWillUnmount() {
        console.log("Component will unmount")
    }

    render(){
        const {name, location, avatar_url} = this.state.userInfo;
        console.log(this.props.name, "Child render called");
        return (
            <div className="user-card">
                <img src={avatar_url} style={{width: "inherit"}}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @SwagatWebDev</h4>
            </div>
        )
    }
}
 export default UserClass;
