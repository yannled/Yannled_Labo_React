import React, { Component } from 'react';

class Content_Container extends Component {
    render() {
        return (
            <div>
            {this.props.children}
            </div>
        );
    }
}

export default Content_Container;
