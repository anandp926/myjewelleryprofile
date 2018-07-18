/**
 * Created by rozer on 7/17/2018.
 */
import React, { Component } from 'react'
import pre from './preload.png'

class MyProfile extends Component {
    render() {
        return (
            <div>
                <div className="myProf">
                    <div></div>
                    <div>
                        <img className="cover" src={pre}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyProfile;
