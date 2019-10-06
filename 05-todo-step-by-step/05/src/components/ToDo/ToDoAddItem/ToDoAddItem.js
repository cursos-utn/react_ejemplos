import React from 'react';

export default class ToDoAddItem extends React.Component {

    state = {
        name: ''
    }

    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
        this.nameChanged = this.nameChanged.bind(this);
    }

    nameChanged(e) {
        this.setState({
            name: e.target.value
        })
    }

    save() {
        this.props.onAdd(this.state.name, false);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={this.nameChanged}/><button onClick={this.save} className="btn btn-success btn-sm"><i className="fa fa-plus"></i></button>
            </div>
        )
    }
}