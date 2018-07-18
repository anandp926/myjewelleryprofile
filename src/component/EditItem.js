/**
 * Created by rozer on 7/18/2018.
 */
import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import ImageInput from './ImageInput'

class EditItem extends Component{
    static propTypes = {
        onAddNewItem: PropTypes.func.isRequired
    };
    state = {
        Name: "",
        Type: "",
        Description: "",
        Category: "",
        error: false
    };
    
    /*componentDidMount(){
        const editItem = Object.values(this.props.jewell).map(data => data.filter(newData => newData.id === this.props.editId));
        console.log(editItem)
        if(editItem){
            editItem.map((item) =>(
                this.setState({
                    name:item.Name,
                    type:item.Type,
                    desc:item.Description,
                    category:item.Category
                })
            ))
        }
    }*/

    onFormSubmit = (e) =>{
        e.preventDefault();
    };

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    validate = () => {
        const { Name, Type, Description, Category } = this.state;
        return Name !== '' && Type !== '' && Description !==  '' && Category !== '';
    }

    onAddNewItems = () => {
        if(this.validate()){
            const item = {
                id: this.state.Name+1,
                Name: this.state.Name,
                Type: this.state.Type,
                Description: this.state.Description,
                Category: this.state.Category
            };
            this.props.onAddNewItem(item)
        }else {
            this.setState({error:true})
        }
    };
    
    render(){
        return(
            <div className="containerForm" onSubmit={ this.onFormSubmit }>
                <form >
                    <ImageInput
                        className='create-contact-avatar-input'
                        name='avatarURL'
                        maxHeight={64}
                    />
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="category">Select Category</label>
                        </div>
                        <div className="col-75">
                            <select name="Category"
                                    value={this.state.value}
                                    onChange={e => this.handleInputChange(e)}
                            >
                                <option>Select one</option>
                                <option>Head</option>
                                <option>Neck</option>
                                <option>Ring</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="name" name="Name"
                                   value={this.state.Name}
                                   onChange={ e => this.handleInputChange(e)}
                                   placeholder="Your name.."
                                  />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="title">Type</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="type" name="Type"
                                   value={this.state.Type}
                                   onChange={ e => this.handleInputChange(e)}
                                   placeholder="Title of the post.."
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="body">Description</label>
                        </div>
                        <div className="col-75">
                            <textarea id="body" name="Description" value={this.state.Description}
                                      onChange={ e => this.handleInputChange(e)}
                                      placeholder="Write content.." className="box"
                            >
                            </textarea>
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Edit" onClick={this.onAddNewItems}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditItem
