/**
 * Created by rozer on 7/17/2018.
 */
import React, { Component } from 'react'

class MyProfile extends Component {
    
    render() {
        const { user } = this.props;
        if(user){
            return (
                <div>
                    <div className="myProf">
                        <div>
                            <div className="profDetail">
                                <div className="detailTag">Name: </div>
                                <div className="details">{user.Name}</div>
                            </div>
                            <div className="profDetail">
                                <div className="detailTag">Age: </div>
                                <div className="details">{user.Age}</div>
                            </div>
                            <div className="profDetail">
                                <div className="detailTag">Gender: </div>
                                <div className="details">{user.Gender}</div>
                            </div>
                            <div className="profDetail">
                                <div className="detailTag" >Phone: </div>
                                <div className="details">{user.Phone}</div>
                            </div>
                            <div className="profDetail">
                                <div className="detailTag">Email: </div>
                                <div className="details">{user.Email}</div>
                            </div>
                        </div>
                        <div className="myPhoto">
                            <img src={user.uri} width={140}/>
                        </div>
                    </div>
                    <div className="myProfDetail">
                        <div className="detailTag">Address: </div>
                        <div className="details">{user.Address}</div>
                    </div>
                </div>
            );
        }else {
            return(
                <div></div>
            )
        }
    }
}

export default MyProfile;
