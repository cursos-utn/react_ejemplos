import React from 'react';

export default class ToDoItem extends React.Component {

    render() {
        // el input esta oculto al iniciar
        return (
            <article>
                <h3>
                    <div className="check">
                        <input type="checkbox"  />
                    </div>     
                    <span className="sin-edicion">{this.props.item.name}</span>
                    <input type="text" className="edicion"/> 
                </h3>
                <div>
                    <button className="btn btn-danger btn-sm"><i className="fa fa-trash"></i></button>
                </div>
                
            </article>
        )
    }
}