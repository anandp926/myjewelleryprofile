/**
 * Created by rozer on 7/18/2018.
 */
import React, {Component} from 'react'

class Details extends Component{
    render(){
        const { itemData } = this.props
        console.log(itemData)
        return(
            <div className="itemDetail">
                <div className="itemDetail1">
                    <img src={itemData.uri} className="cover"/>
                </div>
                <div className="itemDetail2">
                    <div className="itemDetails">
                        <span className="heading">Name: </span>
                        <span className="dsc">{itemData.Name}</span>
                    </div>
                    <div className="itemDetails">
                        <span className="heading">Type: </span>
                        <span className="dsc">{itemData.Type}</span>
                    </div>
                    <div className="itemDetails">
                        <span className="heading">Category: </span>
                        <span className="dsc">{itemData.Category}</span>
                    </div>
                    <div className="itemDetails">
                        <span className="heading">Description: </span>
                        <span className="dsc">{itemData.Description}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details
