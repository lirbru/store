import React, { Component } from 'react'

export default class EditPage extends Component {
    constructor() {
        super();
        this.state = {
            title : "",
            price : "",
            description : "",
            image : ""
        }
    }
    close = () => {
        this.props.toggle();
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }
    

    submit = () => {
        const obj = {title : this.state.title, price : this.state.price, description : this.state.description, image : this.state.image};
        this.props.sendEditItem(obj);
        this.props.toggle();
    }

    render() {
        return (
            <div className="editPage">
                <button className="close-btn" onClick={this.close}>close</button>
                title : <input type="text"  name="title" onChange={this.handleChange}/> <br/>
                price : <input type="number"  name="price" onChange={this.handleChange}/> <br/>
                description : <input type="text"  name="description" onChange={this.handleChange}/> <br/> 
                image : <input type="text"  name="image" onChange={this.handleChange}/> <br/> <br/>
                <button onClick={this.submit}>submit</button>
            </div>
        )
    }
}
