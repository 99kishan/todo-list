import React, {useState, useRef, Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            newItem:"",
            list:[]
        }
    }
    
    updateInput (key, value){
        this.setState({
            [key]:value
        });
    }

    addItem() {
        const newItem={
            id: 1+ Math.random(),
            value: this.state.newItem.slice()
        };
        const list=[...this.state.list];
        list.push(newItem);
        this.setState({
            list,
            newItem:""
        });
    }
    componentWillUnmount(id){
        const list =[...this.state.list];
        const updatedList = list.filter(item => item.id !== id);
        this.setState({list: updatedList});
    }
    render(){
    return(
        <div className='App'>
            <div class="app-title">
                Add an Item..!!
            <br/>
            <input
                type="text"
                placeholder="Type your item"
                value={this.state.newItem}
                onChange={e =>this.updateInput("newItem", e.target.value)}
            />
            <button class ="button" onClick={() => this.addItem()}>Add Item</button><br/>
            <ul>
            {this.state.list.map(item =>{
                return(
                    <li key={item.id}>
                        {item.value}
                        <button class='button'
                        onClick={() =>this.componentWillUnmount(item.id)}>
                        X
                        </button>
                    </li>
                )
            })}
            </ul>
            </div>
        </div>
    );
    };
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));


import React, { Component } from 'react'

export class App extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default App
