import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default class PaginaConParametros extends React.Component {

    render() {
        var id = this.props.match.params.id;
        
        return(
            <>
            <h1>Pagina con parametros</h1>
            
                <p>Param: {id}</p>
            
            <Link to="/">Página principal</Link><br />
            <Link to="/1">Página 1</Link><br />
            <Link to="/2">Página 2</Link><br />
            </>
        )
    }
}