import React from 'react';
import { Todo } from './Todo';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todos = this.props.todoList;
        return (

            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Task to do</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Due date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo) => (
                            <Todo {...todo} />
                        ))
                    }
                </tbody>

            </table>


        );
    }

}
