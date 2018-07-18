/**
 * Created by rozer on 7/17/2018.
 */
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Category extends Component{
    render() {
        const { user } = this.props;
        let ctg,filterCat;
        if(user){
            ctg = user.Jewellery.map(data =>data.Category);
            filterCat = ctg.filter((items, index, data) => data.indexOf(items) === index);
        }
        return (
            <section>
                <div className="profileNav" style={{padding:25}}>
                    <Link className="deco" to="/profile"><b>Profile</b></Link>
                </div>
                {filterCat !== undefined && filterCat !== null &&(
                    filterCat.map((cat) => {
                        return(
                            <div className="profileNav" key={cat}>
                                <h2>{cat}</h2>
                                <ul style={{listStyleType:'none'}}>
                                    {user.Jewellery.map(data =>{
                                        if(cat === data.Category)
                                        return(
                                            <li key={data.Type}>
                                                <Link className="deco" to={`/profile/orders/${cat}/${data.Type}`}>{data.Type}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })
                )}
            </section>
        )
    }
}

export default Category
