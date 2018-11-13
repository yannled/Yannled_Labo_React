import React, { Component } from 'react';
import Line from "./Line"
import '../css/List.css';
import Issue from "../Models/Issue";

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul id={"List"}>
                    {this.props.list.map((listValue, index) => {
                        return <Line key={index} object={listValue} iconLeft={this.props.iconLeft} iconRight={this.props.iconRight} onClickLineFunction={(issue) => this.props.onClickLineFunction(issue)}>{listValue.title}</Line>;
                    })}
                </ul>
            </div>
        );
    }

}

export default List;
