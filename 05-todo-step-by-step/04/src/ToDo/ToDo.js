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
        this.removeItem = this.removeItem.bind(this);
        this.markItemDone = this.markItemDone.bind(this);
        this.updateItem = this.updateItem.bind(this);
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

    async removeItem(id) {
        var respuesta = await axios.delete(this.state.serverUrl+'/'+id);
        if (respuesta.status===200) { // ok => Borrar del listado
            var posicion = this.state.listado.findIndex(unItem => {
                return unItem.id === id;
            })
            this.setState({
                listado: [
                    ...this.state.listado.slice(0, posicion),
                    ...this.state.listado.slice(posicion+1)
                ]
            })
        }
    }

    async markItemDone(id) {
        var posicion = this.state.listado.findIndex(unItem => {
            return unItem.id === id;
        });
        var obj = this.state.listado[posicion];
        obj.isCompleted = true;
        var respuesta = await axios.put(this.state.serverUrl+'/'+id, obj);
        if (respuesta.status===200) { // ok => Agregar la tarea al listado
            this.setState({
                listado: [
                    ...this.state.listado.slice(0, posicion),
                    respuesta.data,
                    ...this.state.listado.slice(posicion+1)
                ]
            })
        }
    }

    async updateItem(id, name) {
        var posicion = this.state.listado.findIndex(unItem => {
            return unItem.id === id;
        });
        var obj = this.state.listado[posicion];
        obj.name = name;
        console.log(obj);
        var respuesta = await axios.put(this.state.serverUrl+'/'+id, obj);
        if (respuesta.status===200) { // ok => Agregar la tarea al listado
            this.setState({
                listado: [
                    ...this.state.listado.slice(0, posicion),
                    respuesta.data,
                    ...this.state.listado.slice(posicion+1)
                ]
            })
        }
    }

    render() {
        var listadoToDos = this.state.listado.map(unItem => {
            return <ToDoItem item={unItem} key={unItem.id} onRemove={this.removeItem} onDone={this.markItemDone} onUpdate={this.updateItem} />
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