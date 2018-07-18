/**
 * Created by rozer on 7/18/2018.
 */
import React, { Component } from 'react'
import Modal from 'react-modal'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import EditItem from './EditItem'

class Jewellery extends Component{
    static propTypes = {
        onAdd: PropTypes.func.isRequired
    };
    constructor () {
        super();
        this.state = {
            showModal: false,
            editId:''
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal (id) {
        this.setState({ showModal: true, editId:id });
    }

    handleCloseModal () {
        this.setState({ showModal: false, editId:'' });
    }
    
    
    render(){
        const { jewell,onAdd} = this.props;
        const filter = this.props.match.params.category;
        const filterItem = this.props.match.params.type;
        let filterJewell, flag,cate;
        if(filter === undefined){
            if(jewell){
                filterJewell = Object.values(jewell);
                flag=0
            }
        }else if(filter && filterItem){
            if(jewell){
                filterJewell = Object.values(jewell).map(data => data.filter(newData => newData.Category === filter && newData.Type === filterItem))
                flag=1
                cate=Object.values(jewell).map(data => data.filter(newData => newData.Category === filter))
            }
        } else{
            if(jewell){
                filterJewell = Object.values(jewell).map(data => data.filter(newData => newData.Category === filter))
                flag=2
                cate=Object.values(jewell).map(data => data.filter(newData => newData.Category === filter))
            }
        }
        if(flag === 0){
            return(
                <div className="jewels">
                    <div className="jewel">
                        { filterJewell != null && filterJewell !== undefined &&(
                            filterJewell.map((data) => data.map(newD =>{
                                return(
                                    <div className="Card" key={newD.id}>
                                        <img className="cover" src={newD.uri}/>
                                        <div className="jewelName">
                                            <div className="itemName">{newD.Name}</div>
                                            <div className="options">
                                                <div className="options1" onClick={()=>onAdd(newD)}>Add</div>
                                                <div className="options2" onClick={()=>this.handleOpenModal(newD.id)}>Edit</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }))
                        )}
                        <Modal
                            isOpen={this.state.showModal}
                            onRequestClose={this.handleCloseModal}
                            className="Modal"
                        >
                            <div>
                                <EditItem jewell={jewell} editId={this.state.editId}/>
                            </div>
                        </Modal>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="testProfile">
                    <div className="testNavigation1">
                        <div className="profileNav">
                            <h2>{filter}</h2>
                            <ul style={{listStyleType:'none'}}>
                                { cate != null && cate !== undefined &&(
                                    cate.map((data) => data.map(newD =>{
                                        return(
                                            <li key={newD.id}>
                                                <Link className="deco" to={`/${newD.Category}/${newD.Type}`}>{newD.Type}</Link>
                                            </li>
                                        )
                                }))
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="testNavigation2" style={{flexDirection:'row'}}>
                        { flag ===  1
                            ?
                            <div className="jewel">
                                { filterJewell != null && filterJewell !== undefined &&(
                                    filterJewell.map((data) => data.map(newD =>{
                                        return(
                                            <div className="Card" key={newD.id}>
                                                <img className="cover" src={newD.uri}/>
                                                <div className="jewelName">
                                                    <div className="itemName">{newD.Name}</div>
                                                    <div className="options">
                                                        <div className="options1">Add</div>
                                                        <div className="options2" onClick={this.handleOpenModal}>Edit</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }))
                                )}
                            </div>
                            :
                            <div className="jewel">
                                { filterJewell != null && filterJewell !== undefined &&(
                                    filterJewell.map((data) => data.map(newD =>{
                                        return(
                                            <div className="Card" key={newD.id}>
                                                <img className="cover" src={newD.uri}/>
                                                <div className="jewelName">
                                                    <div>{newD.Name}</div>
                                                    <div className="options">
                                                        <div className="options1" onClick={()=>onAdd(newD)}>Add</div>
                                                        <div className="options2" onClick={this.handleOpenModal}>Edit</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }))
                                )}

                            </div>
                        }
                        <Modal
                            isOpen={this.state.showModal}
                            onRequestClose={this.handleCloseModal}
                            className="Modal"
                        >
                            <div>
                                <EditItem jewell={jewell} editId={this.state.editId}/>
                            </div>
                        </Modal>
                    </div>
                </div>
            )
        }
    }
}

export default Jewellery
