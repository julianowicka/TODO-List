 
import React, { Component}from "react";

class TodoItems extends Component{
    constructor(props){
        super(props);

        this.createTasks = this.createTasks.bind(this);

    }

    createTasks(item){
        let itemStyle =item.completed? {backgroundColor: 'green'} : {backgroundColor: 'red'}

        return <li
        style = {itemStyle}
        onClick={() => this.props.updateItem(item.key)}
        key={item.key}>{item.text}</li>
    }
    render(){
        var todoEntries = this.props.entries;
        // var listItems = ;
        return(
            <ul className="theList">
            {todoEntries.map(item => this.createTasks(item))}
            </ul>
        );
    }
};
export default TodoItems;
