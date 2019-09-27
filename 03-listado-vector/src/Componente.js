import React from 'react';
import Imagen from './Imagen';
import Titulo from './Titulo';
import Descripcion from './Descripcion';

export default class Componente extends React.Component {
    render() {
        return (
        <article>
            <Imagen url={this.props.url} />
            <div>
                <Titulo title={this.props.title} />
                <Descripcion description={this.props.description} />
            </div>
        </article>
        );
    }
}