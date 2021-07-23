import React, { Component } from 'react';
import Inbox from "../images/inbox.png";
import Analytics from "../images/analytics.png";
import User from "../images/user.png";
import Richpanel from "../images/richpanel.png";
import notes from "../images/left-align.png";
import reload from "../images/reload.png";
export default class helpdesk extends Component {
    state={
        name:this.props.nam,
        email:this.props.em,
        picture:this.props.dp,
        status:"Online",
    }
    render() {
        return (
            <div>
                <div>
                <div class="sidebar">
                    <div><button className="sidebtn"><img className="imgpr logor" src={Richpanel} alt="richpanel"></img></button></div>
                    <div><button className="sidebtn"><img  className="imgpr" src={Inbox} alt="inbox"></img></button></div>
                    <div><button className="sidebtn"><img  className="imgpr" src={User} alt="user"></img></button></div>
                    <div><button className="sidebtn"><img className="imgpr" src={Analytics} alt="analytics"></img></button></div>
                    <div className="dpuser"><button className="sidebtn"><img className="imgpr ddp" src={this.state.picture} alt={this.state.name}></img></button></div>
                    </div>
                <div id="container">
                     <div className="secondsec">
                     <div className="convheader notespos"><img className="noteslogo" src={notes}></img></div>
                     <div className="convheader convt">Converstions</div>
                     <div className="convheader reloadpos"><button className="reloadbtn"><img className= "reloadlogo" src={reload}></img></button></div>
                    </div>
                    <div className="secondsec"></div>
                    <div className="secondsec"></div>
                    <div className="secondsec"></div>
                </div>
                <div className="msg">
                    <div className="tit">{this.state.name}</div>
                    <div className="chat"></div>
                    <div className="textarea"><textarea placeholder="Enter your messgae"></textarea></div>
                </div>
                <div id="usrpro">
                  
                </div>
                <div class="body-text">
                <div>Profile</div>
                    <img className="imgpr" src={this.state.picture} alt={this.state.name}></img>
                    </div>
                </div>
    
            </div>
        )
    }
}
