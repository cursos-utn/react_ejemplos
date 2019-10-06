import React from 'react';

export default class ToDoAddItem extends React.Component {

    render() {
        return (
            <div>
                <input type="text" /><button className="btn btn-success btn-sm"><i className="fa fa-plus"></i></button>
            </div>
        )
    }
}