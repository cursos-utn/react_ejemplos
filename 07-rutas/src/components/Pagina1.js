import React from 'react';
import { Link } from 'react-router-dom';

export default class Pagina1 extends React.Component {

    render() {
        return(
            <>
            <h1>Pagina 1</h1>
            <Link to="/">Página principal</Link><br />
            <Link to="/1">Página 1</Link><br />
            <Link to="/2">Página 2</Link><br />
            </>
        )
    }
}