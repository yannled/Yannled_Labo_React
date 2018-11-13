import React, { Component } from 'react';
import '../css/ActionButton.css';
class ActionButton extends Component {
    render() {
        return (
            <button id="ActionButton" onClick={this.props.function}>{this.props.content}</button>
        );
    }
}

export default ActionButton;
