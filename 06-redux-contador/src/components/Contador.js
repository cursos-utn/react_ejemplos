
import React from 'react';

export default class Contador extends React.Component {

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
                <h2>Estado: {this.props.value}</h2>
                <div>
                    <button onClick={this.incrementar}>Incrementar</button>

                    <button onClick={this.decrementar}>Decrementar</button>
                </div>
            </div>
        )
    }
}