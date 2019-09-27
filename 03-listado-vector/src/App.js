import React from 'react';
import Componente from './Componente';
import { unionTypeAnnotation } from '@babel/types';

export default class App extends React.Component {

  render() {
     var listadoJSON = [
       {url: 'https://via.placeholder.com/150/92c952', title:'Titulo 01', description: 'Descripcion 01'},
       {url: 'https://via.placeholder.com/150/92c952', title:'Titulo 02', description: 'Descripcion 02'},
       {url: 'https://via.placeholder.com/150/92c952', title:'Titulo 03', description: 'Descripcion 03'},
       {url: 'https://via.placeholder.com/150/92c952', title:'Titulo 04', description: 'Descripcion 04'},
       {url: 'https://via.placeholder.com/150/92c952', title:'Titulo 05', description: 'Descripcion 05'},
       {url: 'https://via.placeholder.com/150/92c952', title:'Titulo 06', description: 'Descripcion 06'},
       {url: 'https://via.placeholder.com/150/92c952', title:'Titulo 07', description: 'Descripcion 07'},
       {url: 'https://via.placeholder.com/150/92c952', title:'Titulo 08', description: 'Descripcion 08'}
     ];
     var listadoJSX = listadoJSON.map(unItem => {
       return <Componente url={unItem.url} title={unItem.title} description={unItem.desription} />
     })

     return (
        <div >
            {listadoJSX}
        </div>
    ); 
  }

}