import React from 'react';
import ToDoItem from './ToDoItem/ToDoItem';
import ToDoAddItem from './ToDoAddItem/ToDoAddItem';
import axios from 'axios';


export default class ToDo extends React.Component {

    state = {
        listado: [],
        serverUrl: 'https://toodoapi220190926085529.azurewebsites.net/api/TodoItems'
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }



    addItem() {

    }
    removeItem(id) {

    }
    markItemDone(id) {

    }

    render() {
        var listadoToDos = this.state.listado.map(unItem => {
            return <ToDoItem item={unItem} />
        });

        return (
            <div className="container">
                <div id="top">
                    <h1>ToDo</h1>
                    {listadoToDos}
                </div>
                <div id="bottom">
                    <ToDoAddItem />
                </div>
            </div>
        )
    }
}