/**
 * Created by rozer on 7/18/2018.
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="brand">
                    <Link className="deco" style={{color:"white"}} to="/">MyJewellery</Link>
                </div>
                <div className="mProfile">
                    <Link className="deco" style={{color:"white"}} to="/profile">Anand</Link>
                </div>
            </div>
        )
    }
}

export default Header
