/**
 * Created by rozer on 7/18/2018.
 */
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Modal from 'react-modal'
import EditItem from './EditItem'
import PropTypes from 'prop-types'

class Navigation extends Component{
    static propTypes = {
        onAddNewItem: PropTypes.func.isRequired
    };
    
    constructor () {
        super();
        this.state = {
            showModal: false,
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

        const { jewell } = this.props;
        let filterCat;
        if(jewell){
            filterCat = Object.keys(jewell);
        }
        
        return(
            <div className="mainNav">
                <ul className="navigation">
                    {
                        filterCat !== null && filterCat !== undefined &&(
                            filterCat.map(keys=>{
                                return(
                                    <li key={keys}>
                                        <Link to={`/${keys}`}>{keys}</Link>
                                    </li>
                                )
                            })
                        )
                    }
                    <li>
                        <a style={{cursor:'pointer'}} onClick={this.handleOpenModal}>Add Item</a>
                    </li>
                </ul>
                <Modal
                    isOpen={this.state.showModal}
                    onRequestClose={this.handleCloseModal}
                    className="Modal"
                >
                    <div>
                        <EditItem onAddNewItem={this.props.onAddNewItem}/>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Navigation
