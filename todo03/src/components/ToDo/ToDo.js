import React from 'react';
import {connect} from 'react-redux';
import ToDoService from '../../services/ToDoService';
import ToDoItem from './ToDoItem/ToDoItem';

class ToDo extends React.Component {
    
    constructor(props) {
        super(props);
        this.toDoService = new ToDoService(); // Instancio el servicio
    }

    async componentDidMount() {
        var respuesta = await this.toDoService.getTareas(); // Uso el servicio instanciado
        this.props.onInit(respuesta);
    }

    render() {
        var listado = this.props.listado.map(unItem => {
            return <ToDoItem item={unItem} key={unItem.id}/>
        })
        return (
            <>
                <h1>ToDo</h1>
                {listado}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listado: state.taskList,
    }
}

const mapActions = (dispatch) => {
    return {
        onInit: (listado) => dispatch({type: 'INIT', data: listado})
    }
}

export default connect(mapStateToProps, mapActions)(ToDo);