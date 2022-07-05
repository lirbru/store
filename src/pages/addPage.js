import React, { Component } from 'react'
import '../styles.css'

export default class AddPage extends Component {
    constructor() {
        super();
        this.state = {
            title : "",
            price : "",
            description : "",
            image : ""
        }
    }

    submit = (e) => {
        //send the new item to admin table
        e.preventDefault();
        const obj = {title : this.state.title, price : this.state.price, description : this.state.description, image : this.state.image};
        this.props.sendItem(obj);
        this.props.toggle();

    }
    close = () => {
        //close the addPage
        this.props.toggle();
    }

    
    render() {
        return (
            <div className='addPage'>
                <button className="close-btn" onClick={this.close}>close</button> <br></br>
                <form className="form" onSubmit={this.submit}>
                    Title: <input type="text" onChange={(e) => this.setState({title : e.target.value})} /> <br/>
                    Price: <input type="number" onChange={(e) => this.setState({price : e.target.value})} /> <br/>
                    Description: <input type="text" onChange={(e) => this.setState({description : e.target.value})} /> <br/> 
                    Image: <input type="text" onChange={(e) => this.setState({image : e.target.value})} /> <br/> <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
