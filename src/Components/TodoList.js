import React from 'react';
import { Todo } from './Todo';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todos = this.props.todoList;
        return (
            <ul>
                {
                    todos.map((todo) => (
                        <Todo {...todo} />
                    ))
                }
            </ul>
        );
    }

}
