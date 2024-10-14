import React from 'react';

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count:1,
            count2:2,
            userInfo:{
                name:"Dummy",
                location:"Default"
            }

        }
        // console.log("{this.props.name} constructor");
    }
    async componentDidMount(){
        // console.log("{this.props.name} did mount");
        const data= await fetch('https://api.github.com/users/aPPORV');
        const json= await data.json();
        this.setState({
            userInfo:json,
        })
    }

    componentDidUpdate(){
        console.log("Component did update");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    render(){
        // console.log(this.props.name + "render");
        const {name,location} =this.props;
        const {count, count2} = this.state;
        return(
        <div className="usercard">
            {/* <h2>Count: {count}</h2>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count +1,
               })
            }}>Count Increase</button> */}
            {/* <h2>Count2: {count2}</h2> */}
            <img src={this.state.userInfo.avatar_url} />
            <h2>Name: {this.state.userInfo.name}</h2>
            <h3>Location: {this.state.userInfo.location}</h3>
            <h4>Contact: @apporv17</h4>
        </div>
        )
    }
}

export default UserClass;


/* ****************************************************************
 *
 *
 * ----- Mounting CYCLE -----
 *   Constructor (dummy)
 *   Render (dummy)
 *       <HTML Dummy></HTML>
 *   Component Did Mount
 *       <API Call>
 *       <this.setState> - State variable is updated
 *
 * ----- UPDATE CYCLE -----
 *       render(API data)
 *       <HTML (new API data)>
 *   Component Did Update
 *   Component Will Unmount
 *
 *
 * Life Cycle Diagram Website Reference: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 */