import React from 'react';
import Imagen from './Imagen';
import Titulo from './Titulo';
import Descripcion from './Descripcion';

export default class Componente extends React.Component {
    render() {
        return (
        <article>
            <Imagen url="https://via.placeholder.com/150/92c952"/>
            <div>
                <Titulo title="Titulo 1" />
                <Descripcion description="Descripcion 1" />
            </div>
        </article>
        );
    }
}