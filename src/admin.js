import React, { Component } from 'react'
import AddPage from './pages/addPage';
import EditPage from './pages/editPage';
import Home from './home'

export default class Admin extends Component {
    constructor() {
        super();
        this.state = {
            table : [],
            seen : false,
            edit : false,
            idToEdit : ""
        }
        
    }
    addItemPage = () => {
        this.setState({seen : !this.state.seen});
    }

    addItemToTable = (obj) => {
        let new_table = this.state.table;
        new_table.push(obj);
        this.setState({table : new_table});
    }

    openEdit = (e) => {
        this.setState({idToEdit : e.target.id});
        this.setState({edit : true});
    } 

    editItem = (obj) => {
        let new_table = this.state.table;
        const index = this.state.idToEdit;
        new_table[index] = obj;
        this.setState({table : new_table});


    }

    deleteItem = (e) => {
        let new_table = this.state.table;
        new_table.splice(e.target.id, 1);
        this.setState({table : new_table});

    }

    closeEdit = () => {
        this.setState({edit : false});
    }

    homePage = () => {
        const theTable = this.state.table;
        sessionStorage.setItem('table', JSON.stringify(theTable));
        this.props.history.push(`/home`);
    }

    render() {
        const items = this.state.table.map((item,index) => {
            return (
                <tr key={index}>
                    <td>{item.title}</td>
                    <td>{`${item.price}$`}</td>
                    <td>
                        <button id = {index} onClick={this.openEdit}>edit</button>
                        <button id = {index} onClick={this.deleteItem}>delete</button>
                    </td>
                </tr>
            )
        })

        return (
            <div className="admin">
                <p>admin Page</p>
                <button className="addBtn" onClick={this.addItemPage}>Add</button>
                {this.state.seen ? <AddPage toggle={this.addItemPage} sendItem={this.addItemToTable}/> : null}
                {this.state.edit ? <EditPage toggle={this.closeEdit} sendEditItem={this.editItem}/> : null}
                <table className="table" border="1">
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>price</th>
                            <th>option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
                <button onClick={this.homePage} >Home</button>
                
            </div>
        )
    }
}
