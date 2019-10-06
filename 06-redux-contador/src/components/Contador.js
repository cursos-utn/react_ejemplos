import React from 'react';
import { connect } from 'react-redux';

class Contador extends React.Component {

    constructor(props) {
        super(props);
        this.incrementar = this.incrementar.bind(this);
        this.decrementar = this.decrementar.bind(this);
    }

    incrementar() {
        this.props.onIncrementar();
    }
    decrementar() {
        this.props.onDecrementar();
    }

    render() {
        return (
            <div>
                <h2>Estado: {this.props.estado}</h2>
                <div>
                    <button onClick={this.incrementar}>Incrementar</button>

                    <button onClick={this.decrementar}>Decrementar</button>
                </div>
            </div>
        )
    }
}

const mapEstadoAProps = (estado) => {
    return {
        estado: estado
    }
}

const mapAccionesAProps = (dispatch) => {
    return {
        onIncrementar: () => dispatch({ type: 'INCREMENTAR' }),
        onDecrementar: () => dispatch({type: 'DECREMENTAR'}),
    }
}

export default connect(mapEstadoAProps, mapAccionesAProps)(Contador);