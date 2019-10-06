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
        this.addItem = this.addItem.bind(this);
    }

    componentDidMount() {
        this.refreshListado()
    }

    async refreshListado() {
        var respuesta = await axios.get(this.state.serverUrl);
        this.setState({
            listado: respuesta.data
        })
    }



    async addItem(_name, _isCompleted) {
        var obj = {name: _name, isCompleted: _isCompleted};
        var respuesta = await axios.post(this.state.serverUrl, obj);
        if (respuesta.status===201) { // ok => Agregar la tarea al listado
            this.setState({
                listado: [
                    ...this.state.listado,
                    respuesta.data
                ]
            })
        }
    }

    removeItem(id) {

    }
    markItemDone(id) {

    }

    render() {
        var listadoToDos = this.state.listado.map(unItem => {
            return <ToDoItem item={unItem} key={unItem.id} />
        });

        return (
            <div className="container">
                <div id="top">
                    <h1>ToDo</h1>
                    {listadoToDos}
                </div>
                <div id="bottom">
                    <ToDoAddItem onAdd={this.addItem}/>
                </div>
            </div>
        )
    }
}