import React from 'react';

export default class Imagen extends React.Component {
    render() {
        return (
            <>
                <img src={this.props.url} />
            </>
        )
    }
}