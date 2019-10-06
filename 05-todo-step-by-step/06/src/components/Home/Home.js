import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.irAPaginaToDo = this.irAPaginaToDo.bind(this);
    }

    irAPaginaToDo() {
        this.props.history.push('/todo');
    }

    render() {
        return (
            <div id="principal">
                <div>
                    <h1>Página principal</h1>
                    <Link to="/todo" className="btn btn-success">ir a página de ToDo</Link>

                    <button onClick={this.irAPaginaToDo} className="btn btn-success">ToDo por Acción</button>

                </div>
            </div>
        )
    }
}



export default connect(null, null)(Home);