import React from 'react';
import axios from 'axios';

export default class Listado extends React.Component {
    state = {
        listado: []
    }
    async componentDidMount() {
        var respuesta = await axios.get('https://jsonplaceholder.typicode.com/comments');
        if (respuesta.status===200) {
            console.log('ok');
        }
        this.setState({listado: respuesta.data});
    }

    render() {
        var lista = this.state.listado.map(unItem => {
            return (
                <div className="item">
                    <span className="name">
                        {unItem.name}
                    </span>
                    <span className="email">
                        {unItem.email}
                    </span>
                </div>
            )
        })
        return (
            <>
                {lista}
            </>
        )
    }
}