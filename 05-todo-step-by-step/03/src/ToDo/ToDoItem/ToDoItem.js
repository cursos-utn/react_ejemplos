import React from 'react';

export default class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
        this.markDone = this.markDone.bind(this);
    }

    removeItem() {
        this.props.onRemove(this.props.item.id);
    }

    markDone() {
        this.props.onDone(this.props.item.id);
    }

    render() {
        // el input esta oculto al iniciar
        return (
            <article>
                <h3>
                    <div className="check">
                        <input type="checkbox" onChange={this.removeItem} />
                    </div>     
                    <span className="sin-edicion">{this.props.item.name}</span>
                    <input type="text" className="edicion"/> 
                </h3>
                <div>
                    <button onClick={this.removeItem} className="btn btn-danger btn-sm"><i className="fa fa-trash"></i></button>
                </div>
                
            </article>
        )
    }
}