 
import React, {Component} from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.updateItem = this.updateItem.bind(this)

    }
    addItem(e){
        var itemArray = this.state.items;
        if (this._inputElement.value !== ""){
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now(),
                completed: false
            });
            this.setState({
                items: itemArray
            });
            this._inputElement.value ="";
        }
        console.log(itemArray);
        e.preventDefault();
    }

    updateItem = (itemKey) => {
        this.setState(prevState => {
            let newState  = prevState.items.map((item) => {
                if(item.key === itemKey) {
                    return {...item,...{completed: !item.completed} }
                } else {
                    return item
                }

            })
            return {items: newState}
        })
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder="Wpisz zadanie">
                        </input>
                        <button type="submit">Dodaj</button>
                        </form>
                    </div>
                    <TodoItems entries={this.state.items} updateItem = {this.updateItem}/>
                </div>
        );
    }
};
export default TodoList;