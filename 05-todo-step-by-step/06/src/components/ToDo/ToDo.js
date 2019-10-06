import React from 'react';
import ToDoItem from './ToDoItem/ToDoItem';
import ToDoAddItem from './ToDoAddItem/ToDoAddItem';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class ToDo extends React.Component {

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
        var respuesta = await axios.get(this.props.serverUrl);
        this.props.onRefresh(respuesta.data);
    }



    async addItem(_name, _isCompleted) {
        var obj = {name: _name, isCompleted: _isCompleted};
        var respuesta = await axios.post(this.props.serverUrl, obj);
        if (respuesta.status===201) { // ok => Agregar la tarea al listado
            this.props.onAdd(respuesta.data);
        }
    }

    async removeItem(id) {
        var respuesta = await axios.delete(this.props.serverUrl+'/'+id);
        if (respuesta.status===200) { // ok => Borrar del listado
            this.props.onRemove(id);
        }
    }

    async markItemDone(id) {
        var posicion = this.props.listado.findIndex(unItem => {
            return unItem.id === id;
        });
        var obj = this.props.listado[posicion];
        obj.isCompleted = true;
        var respuesta = await axios.put(this.props.serverUrl+'/'+id, obj);
        if (respuesta.status===200) { // ok => Agregar la tarea al listado
            this.props.onUpdate(obj);
        }
    }

    async updateItem(id, name) {
        var posicion = this.props.listado.findIndex(unItem => {
            return unItem.id === id;
        });
        var obj = this.props.listado[posicion];
        obj.name = name;
        var respuesta = await axios.put(this.props.serverUrl+'/'+id, obj);
        if (respuesta.status===200) { // ok => Agregar la tarea al listado
            this.props.onUpdate(obj);
        }
    }

    render() {
        var listadoToDos = this.props.listado.map(unItem => {
            return <ToDoItem item={unItem} key={unItem.id} onRemove={this.removeItem} onDone={this.markItemDone} onUpdate={this.updateItem} />
        });

        return (
            <div className="container">
                <div id="top">
                    <Link to="/">Volver a home</Link>
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

const mapStateToProps = (state) =>{
    return {
        listado: state.listado,
        serverUrl: state.serverUrl
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        onRefresh: (nuevoListado) => { dispatch({ type: 'REFRESH', data: nuevoListado })},
        onAdd: (nuevoElemento) => { dispatch({ type: 'ADD', data: nuevoElemento })},
        onRemove: (id) => { dispatch({ type: 'REMOVE', data: id })},
        onUpdate: (elementoActualizado) => { dispatch({ type: 'UPDATE', data: elementoActualizado })}
    }
}

export default connect(mapStateToProps, mapActionsToProps)(ToDo);