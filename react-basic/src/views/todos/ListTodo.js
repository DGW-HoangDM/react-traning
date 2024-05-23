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
    ],
    editTodo: {}
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

  handleEditTask = (task) => {
    let { listTodo, editTodo } = this.state;
    let isEmptyObject = Object.keys(editTodo).length === 0;

    //check case Update
    if (!isEmptyObject && task.id === editTodo.id) {
      //Không edit trực tiếp mà tạo bản copy rồi edit
      let listTodoCopy = [...listTodo];

      //Find index of specific object using findIndex method.    
      let objIndex = listTodoCopy.findIndex(item => item.id === editTodo.id);
      //Update object's name property.
      listTodoCopy[objIndex].title = editTodo.title;

      this.setState({
        listTodo: listTodoCopy,
        editTodo: {}
      });

      const notify = () => toast.success('Update succeed!');
      notify();
      return;
    }

    //Case Edit
    this.setState({
      editTodo: task,
    });
  }

  handleEditChange = (e) => {
    //Không edit trực tiếp mà tạo bản copy rồi edit
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = e.target.value;

    this.setState({
      editTodo: editTodoCopy
    })
  }

  render() {
    let { listTodo, editTodo } = this.state;
    let isEmptyObject = Object.keys(editTodo).length === 0;

    return (
      <>
        <div className="content">
          <AddTodo
            onHandleAddTask={this.handleAddTask}
          />

          <ul className="list-group">
            {
              listTodo && listTodo.length > 0 &&
              listTodo.map((todo) => {
                return (
                  <li className="list-group-item d-flex justify-content-between" key={todo.id}>
                    {
                      isEmptyObject ?
                        <span>{todo.title}</span>
                        :
                        <>
                          {
                            todo.id === editTodo.id ?
                              <span>
                                <input type="text" value={editTodo.title} onChange={(e) => this.handleEditChange(e)} />
                              </span>
                              :
                              <span>{todo.title}</span>
                          }
                        </>
                    }

                    <div className="d-flex gap-3">
                      <button className="btn btn-info mr-3" type="button" onClick={(e) => this.handleEditTask(todo)} >
                        {isEmptyObject === false && todo.id === editTodo.id ? 'Update' : 'Edit'}
                      </button>
                      <button className="btn btn-danger" type="button" onClick={(e) => this.handleDeleteTask(todo.id)}>Delete</button>
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