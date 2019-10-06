import React from 'react';

export default class ToDoItem extends React.Component {



    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
        this.markDone = this.markDone.bind(this);
        this.toggleEdicion = this.toggleEdicion.bind(this);
        this.nameChanged = this.nameChanged.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.save = this.save.bind(this);
        this.state = {
            enEdicion: false,
            name: this.props.item.name,
            nameEdit: this.props.item.name
        };
    }

    removeItem() {
        this.props.onRemove(this.props.item.id);
    }

    markDone() {
        this.props.onDone(this.props.item.id);
    }

    nameChanged(e) {
        this.setState({
            nameEdit: e.target.value
        })
    }

    toggleEdicion() {
        this.setState({
            enEdicion: !this.state.enEdicion
        })
    }

    cancelEdit() {
        this.toggleEdicion();
    }

    save() {
        this.props.onUpdate(this.props.item.id, this.state.nameEdit);
        this.toggleEdicion();
    }

    render() {
        // el input esta oculto al iniciar
        var espacioTareaName;
        if (this.state.enEdicion) {
            espacioTareaName =  <div>
                    <input type="text" value={this.state.nameEdit} onChange={this.nameChanged} className="edicion"/> 
                    <button onClick={this.save} className="btn btn-success"><i className="fa fa-check"></i></button>
                    <button onClick={this.cancelEdit} className="btn btn-default"><i className="fa fa-times"></i></button>
                </div>
        } else {
            espacioTareaName = <span onClick={this.toggleEdicion} className="sin-edicion" >{this.props.item.name}</span>
        }
        return (
            <article>
                <h3>
                    <div className="check">
                        <input type="checkbox" onChange={this.removeItem} />
                    </div>     
                    {espacioTareaName}
                </h3>
                <div>
                    <button onClick={this.removeItem} className="btn btn-danger btn-sm"><i className="fa fa-trash"></i></button>
                </div>
                
            </article>
        )
    }
}