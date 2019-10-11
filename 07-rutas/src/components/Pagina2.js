import React from 'react';
import { Link }  from 'react-router-dom';
import { withRouter } from "react-router-dom";


class Pagina2 extends React.Component {

    constructor(props) {
        super(props);
        this.redireccionar = this.redireccionar.bind(this);
    }

    redireccionar() {
        // 
        this.props.history.push('/');
    }

    render() {
        return(
            <>
            <h1>Pagina 2</h1>
            <Link to="/">Página principal</Link> <br />
            <Link to="/1">Página 1</Link><br />
            <Link to="/2">Página 2</Link><br />
            <button onClick={this.redireccionar}>Redireccionar por accion a pagina principal</button>
            </>
        )
    }
}

export default withRouter(Pagina2);
