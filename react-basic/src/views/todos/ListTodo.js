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
    this.setState({
      //ES6 Spread Operator
      listTodo: [...this.state.listTodo, task]
    });

    const notify = () => toast.success('Add todo succeed!');
    notify();
  }

  handleDeleteTask = (task) => {
    //Option 1
    // this.setState(prevState => ({
    //   listTodo: prevState.listTodo.filter(item => item.id!== task)
    // }));

    //Option 2
    let currentTask = this.state.listTodo;
    currentTask = currentTask.filter(item => item.id !== task);
    this.setState({
      listTodo: currentTask
    });

    const notify = () => toast.success('Delete succeed!');
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
                      <button className="btn btn-danger" type="button" onClick={ (e) => this.handleDeleteTask(todo.id)}>Delete</button>
                    </div>
                  </li>
                )
              })
            }

            {
              listTodo && listTodo.length === 0 &&
              <h1>Task empty</h1>
            }
          </ul>
        </div>
      </>
    )
  }
}

export default ListTodo;