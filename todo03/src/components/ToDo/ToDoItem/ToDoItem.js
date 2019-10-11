import React from 'react';

export default class ToDoItem extends React.Component {

    render() {
        return (
            <div>
                {this.props.item.name}
            </div>
        )
    }
}