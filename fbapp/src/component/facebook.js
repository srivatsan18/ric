import React, { Component } from 'react';
import Facebooklogin from 'react-facebook-login';
import Helpdesk from './helpdesk';

export default class Facebook extends Component {
    state={
        isLoggedIn: false,
        userID:"",
        name:"",
        email:"",
        picture:"",
    }
    handleemailchange(event){
        this.setState({email:event.target.email});
    }
    responseFacebook=response=>{
        console.log(response);
        this.setState({
            isLoggedIn:true,
            userID:response.userID,
            name:response.name,
            email:response.email,
            picture: response.picture.data.url
        })
        if(this.state.email===""){
        return  <div><input classname="emaill" value={this.state.email} placeholder="Enter the Email id :" onChange={this.handleemailchange}></input></div>
        }
    }

    componentclick=()=> console.log("clicked");
    
    render() {
        let Fbcontent;
        if(this.state.isLoggedIn){
            Fbcontent = (
                // <div
                //   style={{
                //     width: "400px",
                //     margin: "auto",
                //     background: "#f4f4f4",
                //     padding: "20px"
                //   }}
                // >
                //   <img src={this.state.picture} alt={this.state.name} />
                //   <h2>Welcome {this.state.name}</h2>
                //   Email: {this.state.email}
                // </div>
                <Helpdesk  nam={this.state.name} em={this.state.email} dp={this.state.picture}  />
              );
            
        }
        else {
            Fbcontent=(<Facebooklogin
                appId="527135798605133"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentclick}
                callback={this.responseFacebook} />);

        }
        return <div>{Fbcontent}</div>;
    }
}