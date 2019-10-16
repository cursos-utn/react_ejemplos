import React from 'react';
import {connect} from 'react-redux';
import ToDoService from '../../../services/ToDoService';

class ToDoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            en_edicion: false,
            tarea: '',
            responsable_seleccionado_id: 0
        }
        this.habilitarEdicion = this.habilitarEdicion.bind(this);
        this.cambioInput = this.cambioInput.bind(this);
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
        this.toDoService = new ToDoService(); // Instancio el servicio

    }

    habilitarEdicion(e) {
        this.setState({
            en_edicion: true,
            tarea: this.props.item.name,
            responsable_seleccionado_id: this.props.responsable_seleccionado_id
        });
        e.preventDefault();
    }

    cambioInput(e) {
        if (e.target.name==="tarea") {
            this.setState({tarea: e.target.value});
        }
        if (e.target.name==="responsable") {
            this.setState({responsable_seleccionado_id: e.target.value});
        }
    }    

    async save() {
        const obj = {
            id: this.props.item.id,
            name: this.state.tarea,
            isComplete: this.props.item.isComplete,
            assigned_to: this.state.responsable_seleccionado_id
        }
        await this.toDoService.putTarea(obj);
        this.props.onUpdate(obj);
        this.setState({
            en_edicion: false,
            tarea: '',
            responsable_seleccionado_id: 0
        });        
    }


    async toggleDone() {
        const obj = {
            id: this.props.item.id,
            name: this.props.item.name,
            isComplete: !this.props.item.isComplete
            //assigned_to: this.state.responsable_seleccionado_id
        }
        await this.toDoService.putTarea(obj);
        this.props.onUpdate(obj);    
    }    

    cancel() {
        this.setState({
            en_edicion: false,
            tarea: '',
            responsable_seleccionado_id: 0
        });
    }



    render() {
        var contenidoTarjeta;
        if (this.props.item.isComplete) {
            contenidoTarjeta = <>
                                <button className="btn btn-success" onClick={this.toggleDone}><i className="fa fa-check"></i></button> &nbsp;
                                {this.props.item.name}
                                </>
        } else {
            contenidoTarjeta = <>
                                <button className="btn btn-outline-secondary" onClick={this.toggleDone}><i className="fa fa-check"></i></button> &nbsp;
                                {this.props.item.name}
                                </>
        }

        const listadoResponsables = this.props.responsables.map(unItem => {
            return <option value={unItem.id} key={unItem.id}>{unItem.nombre}</option>
        })        
        if (this.state.en_edicion) {
            contenidoTarjeta = 
                                <div className="input-group mb-3 todo-item">
                                    <input type="text" className="form-control" name="tarea" placeholder="Nueva tarea" value={this.state.tarea} onChange={this.cambioInput}/>
                                    <select name="responsable" className="custom-select" value={this.state.responsable_seleccionado_id} onChange={this.cambioInput}>
                                        {listadoResponsables}
                                    </select>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-success" type="button" onClick={this.save}><i className="fa fa-check"></i></button>
                                        <button className="btn btn-outline-danger" type="button" onClick={this.cancel}><i className="fa fa-times"></i></button>
                                    </div>
                                </div>
                                
        }
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title" onDoubleClick={this.habilitarEdicion}>{contenidoTarjeta}</h5>
                </div>
                
            </div>
        )
    }
}

const mapToProps = (state) => {
    return {
        responsables: state.responsablesList
    }
}

const mapDispatch = (dispatch) => {
    return {
        onUpdate: (obj) => {dispatch({type:'UPDATE_ITEM', data: obj})}
    }
}

export default connect(mapToProps,mapDispatch)(ToDoItem);