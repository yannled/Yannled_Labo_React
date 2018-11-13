import React, { Component } from 'react';
import '../css/Line.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Line extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li id={"Line"}>
                <div id={"iconLeft"}><FontAwesomeIcon icon={this.props.iconLeft}/></div>
                <button className={"inlineButton"} onClick={() => this.props.onClickLineFunction(this.props.object)}>{this.props.children}</button>
                <div id={"iconRight"}><FontAwesomeIcon icon={this.props.iconRight}/></div>
            </li>
        );
    }
}

export default Line;
