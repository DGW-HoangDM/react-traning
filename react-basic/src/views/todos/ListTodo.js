import React from 'react'
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
  state = {
    listTodo: [
      {
        id: 'task1',
        title: 'An item 1'
      },
      {
        id: 'task2',
        title: 'An item 2'
      },
      {
        id: 'task3',
        title: 'An item 3'
      },
    ]
  }

  handleAddTask = (task) => {
    // console.log('task from parent:', task);

    if (task.title !== '') {
      
    }

    this.setState({
      //ES6 Spread Operator
      listTodo: [...this.state.listTodo, task]
    });

    const notify = () => toast.success('Add todo success!');
    notify();
  }


  render() {
    let { listTodo } = this.state;

    return (
      <>
        <div className="content">
          <AddTodo 
            onHandleAddTask= { this.handleAddTask}
          />
          
          <ul className="list-group">
            {
              listTodo && listTodo.length > 0 &&
              listTodo.map((todo) => {
                return (
                  <li className="list-group-item d-flex justify-content-between" key={todo.id}>
                    <span>{todo.title}</span>
                    <div className="d-flex gap-3">
                      <button className="btn btn-info mr-3" type="button" >Edit</button>
                      <button className="btn btn-danger" type="button" >Delete</button>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </>
    )
  }
}

export default ListTodo;