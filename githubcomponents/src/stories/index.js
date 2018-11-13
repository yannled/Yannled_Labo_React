import React, {Component} from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { Button, Welcome } from '@storybook/react/demo'
import ActionButton from "../components/actionButton";
import List from "../components/List";
import Line from "../components/Line";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faArrowAltCircleRight, faCommentAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(faCommentAlt, faArrowAltCircleRight);

function openPopUp() {
    var myWindow = window.open("", "popup", "width=200,height=100").document.write("<h3>This is just a popUp!</h3>");
}

const storyActionButton = `
            #### Properties : 
            - **content** : define the text of the button
            - **function** : define the action of the button
            
            
              ~~~javascript
              class ActionButton extends Component {
                render() {
                    return (
                        <button id="ActionButton" onClick={this.props.function}>{this.props.content}</button>
                    );
                }
              }
              ~~~
        `;

const storyList = `
            #### Properties : 
            - **iconLeft** : fontAwesome icon on the left side.
            - **iconRight** : fontAwesome icon on the right side.
            - **onClickLineFunction** : function activate when you click on line in the list.
            - **list** : list of **objects** with a properties **title**
              ~~~javascript
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
              ~~~
        `;

const storyLine = `
            #### Properties : 
            - **iconLeft** : fontAwesome icon on the left side.
            - **iconRight** : fontAwesome icon on the right side.
            - **onClickLineFunction** : function activate when you click on line in the list.
            - **children** : text to show in line
            
            
              ~~~javascript
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
              ~~~
        `;

storiesOf('ActionButton', module)
    .addDecorator(withInfo)
.add("simple button", () => <ActionButton content={"the text"}/>, {
        info: {
            inline: true,
            text: storyActionButton,
        },
    })
.add("with action method", ()=> <ActionButton content={"click me"} function={openPopUp}/>, {
    info: {
        inline: true,
        text: storyActionButton,
    },
});



storiesOf('Line', module)
    .addDecorator(withInfo)
    .add("simpleLine", () => <Line>ma ligne</Line>, {
        info: {
            inline: true,
            text: storyLine,
        },
    })
    .add("Line With icon left", () => <Line iconLeft={"arrow-alt-circle-right"} >ma ligne</Line>, {
        info: {
            inline: true,
            text: storyLine,
        },
    })
    .add("Line With icon Right and left", () => <Line iconRight={"arrow-alt-circle-right"} iconLeft={"arrow-alt-circle-right"}>ma ligne</Line>, {
        info: {
            inline: true,
            text: storyLine,
        },
    })
    .add("Line With action", () => <Line iconRight={"arrow-alt-circle-right"} iconLeft={"arrow-alt-circle-right"} onClickLineFunction={openPopUp}>ma ligne</Line>, {
        info: {
            inline: true,
            text: storyLine,
        },
    });

var numbersList = [{title: 1}, {title:2}, {title:3}];
var textList = [{title: 'Hello'}, {title:'Bonjour'}, {title:'GutenTag'}];
var textListAction = [{title: 'Action1'}, {title:'Action2'}, {title:'Action3'}];
storiesOf('List', module)
    .addDecorator(withInfo)
    .add("NumberList", () => <List list={numbersList}/>, {
        info: {
            inline: true,
            text: storyList,
        },
    })
    .add("Text list With icon left", () => <List list={textList} iconLeft={"arrow-alt-circle-right"}/>, {
        info: {
            inline: true,
            text: storyList,
        },
})
    .add("Text list With icon left and right", () => <List list={textList} iconLeft={"arrow-alt-circle-right"} iconRight={"comment-alt"}/>, {
        info: {
            inline: true,
            text: storyList,
        },
    })
    .add("Text list With action", () => <List list={textListAction} iconLeft={"arrow-alt-circle-right"} iconRight={"comment-alt"} onClickLineFunction={openPopUp}/>, {
        info: {
            inline: true,
            text: storyList,
        },
    });

