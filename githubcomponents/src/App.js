import React, {Component} from 'react';
import './css/App.css';
import Content_Container from "./components/Content_Container";
import List from "./components/List";
import Modal from 'react-modal'
import Issue from "./Models/Issue";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCommentAlt, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
import ActionButton from "./components/actionButton";
import Line from "./components/Line";


library.add(faCommentAlt, faArrowAltCircleRight);

class App extends Component {
    constructor() {
        super();

        this.state = {
            modalAddIssueIsOpen: false,
            modalContentIssue: false,
            issues: [new Issue("Title", "content")],
            myIssue : new Issue("",""),
        };

        this.openModalAddIssue = this.openModalAddIssue.bind(this);
        this.closeModalAddIssue = this.closeModalAddIssue.bind(this);
        this.submitModalAddIssue = this.submitModalAddIssue.bind(this);
        this.openModalContentIssue = this.openModalContentIssue.bind(this);
        this.closeModalContentIssue = this.closeModalContentIssue.bind(this);
    }

    openModalAddIssue() {
        this.setState({modalAddIssueIsOpen: true});
    }

    closeModalAddIssue() {
        this.setState({modalAddIssueIsOpen: false});
    }

    submitModalAddIssue(event) {
        event.preventDefault();
        const title = event.target.title.value;
        const content = event.target.content.value;
        const issue = new Issue(title, content);
        const newListIssue = this.state.issues;
        newListIssue.push(issue);
        this.setState({issues: newListIssue});
        console.log(this.state.issues);
        this.closeModalAddIssue();
    }

    openModalContentIssue(issue) {
        console.log(issue);
        this.setState({myIssue : issue});
        this.setState({modalContentIssue: true});
    }

    closeModalContentIssue() {
        this.setState({modalContentIssue: false});
    }

    render() {
        return (
                <div>
                    <Content_Container>
                        <Modal
                            isOpen={this.state.modalAddIssueIsOpen}
                            onRequestClose={this.closeModalAddIssue}
                            contentLabel="Issue Adding"
                            appElement={document.getElementById('root')}
                        >
                            <h2 ref={subtitle => this.subtitle = subtitle}>Add an Issue</h2>
                            <button onClick={this.closeModalAddIssue}>close</button>
                            <form onSubmit={this.submitModalAddIssue}>
                                <div>
                                    <label>Issue Title : </label>
                                    <input name={"title"} type={"text"}>
                                    </input>
                                </div>
                                <div>
                                    <label>Content Text</label>
                                    <br/>
                                    <textarea name={"content"}></textarea>
                                </div>
                                <button type={"submit"}>Submit</button>
                            </form>
                        </Modal>
                    </Content_Container>

                    <Modal
                        isOpen={this.state.modalContentIssue}
                        onRequestClose={this.closeModalContentIssue}
                        contentLabel="Issue Viewing"
                        appElement={document.getElementById('root')}
                    >
                        <h2 ref={subtitle => this.subtitle = subtitle}>View an Issue</h2>
                        <button onClick={this.closeModalContentIssue}>close</button>
                        <h3>{this.state.myIssue.title}</h3>
                        <p>{this.state.myIssue.content}</p>
                    </Modal>

                    <ActionButton function={this.openModalAddIssue} content={"Add Issue"}/>

                    <Content_Container>
                        <List list={this.state.issues} iconLeft={"arrow-alt-circle-right"} iconRight={"comment-alt"} onClickLineFunction={(issue) => this.openModalContentIssue(issue)}/>
                    </Content_Container>

                </div>
        );
    }
}

export default App;
