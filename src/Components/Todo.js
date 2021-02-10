import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        const {text,priority,dueDate} = this.props;
        return (  
          //Add your code here to represent a TODO
          <>
            <p>{text}</p>
            <p>{priority}</p>
            <p>{dueDate.toString()}</p>
          </> 
          
        );
    }

}