/**
 * Created by rozer on 7/17/2018.
 */
import React, { Component } from 'react';
import Category from './Category'
import MyProfile from './MyProfile'
import Modal from 'react-modal'
import Detail from './Details'

class Testing extends Component {
    constructor () {
        super();
        this.state = {
            showModal: false,
            itemData:''
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal (data) {
        this.setState({ showModal: true, itemData:data });
    }

    handleCloseModal () {
        this.setState({ showModal: false, itemData:'' });
    }
    render() {
        const { user } = this.props;
        const filterCategory = this.props.match.params.category
        const filterType = this.props.match.params.id
        let f, filterOrder;

        if(filterCategory && filterType ){
            if(user){
                filterOrder = user.Jewellery.filter(data=> data.Type === filterType && data.Category === filterCategory)
                f=0
            }
        }
        return (
            <div className="testProfile">
                <div className="testNavigation1">
                    <Category user={user}/>
                </div>
                <div className="testNavigation2">
                    {
                        f === 0
                        ?
                            <div className="jewel">
                                {filterOrder !== null && filterOrder !== undefined && (
                                    filterOrder.map(data =>{
                                        return(
                                            <div className="Card" key={data.id}>
                                                <img className="cover" src={data.uri}/>
                                                <div className="jewelName">
                                                    <div className="itemName">{data.Name}</div>
                                                    <div className="options" onClick={() =>this.handleOpenModal(data)}>
                                                        <div className="detailButton">Details</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                )}
                                <Modal
                                    isOpen={this.state.showModal}
                                    onRequestClose={this.handleCloseModal}
                                    className="Modal"
                                >
                                    <div>
                                        <Detail itemData={this.state.itemData}/>
                                    </div>
                                </Modal>
                            </div>
                        :
                            <MyProfile user={user}/>
                    }

                </div>
            </div>
        );
    }
}

export default Testing;
