import React, { useState, useEffect } from 'react'
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';

const ListTodo = () => {
  // Init state from localStorage
  const [listTodo, setListTodo] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [
      { id: 'task1', title: 'An item 1' },
      { id: 'task2', title: 'An item 2' },
      { id: 'task3', title: 'An item 3' },
    ];
  });

  const [editTodo, setEditTodo] = useState({});

  // Async listTodo with localStorage when listTodo changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(listTodo));
  }, [listTodo]);

  const handleDeleteTask = (task) => {
    let currentTask = listTodo;
    currentTask = currentTask.filter(item => item.id !== task);
    setListTodo(currentTask);

    const notify = () => toast.success('Delete succeed!');
    notify();
  }

  const handleAddTask = (task) => {
    setListTodo([...listTodo, task]);

    const notify = () => toast.success('Add todo succeed!');
    notify();
  }

  const handleEditChange = (e) => {
    //Không edit trực tiếp mà tạo bản copy rồi edit
    let editTodoCopy = { ...editTodo };
    editTodoCopy.title = e.target.value;

    setEditTodo(editTodoCopy);

    //Option 2
    // setEditTodo({ ...editTodo, title: e.target.value });
  }

  const handleEditTask = (task) => {
    let isEmptyObject = Object.keys(editTodo).length === 0;

    //check case Update
    if (!isEmptyObject && task.id === editTodo.id) {
      //Không edit trực tiếp mà tạo bản copy rồi edit
      let listTodoCopy = [...listTodo];

      //Find index of specific object using findIndex method.    
      let objIndex = listTodoCopy.findIndex(item => item.id === editTodo.id);
      //Update object's name property.
      listTodoCopy[objIndex].title = editTodo.title;

      setListTodo(listTodoCopy);
      setEditTodo({});

      const notify = () => toast.success('Update succeed!');
      notify();
      return;
    }

    //Case Edit
    setEditTodo(task);
  }

  let isEmptyObject = Object.keys(editTodo).length === 0;
  return (
    <>
      <p>
        Convert <code>Class component to Function component</code> TODO app
      </p>
      <div className="content">
        <AddTodo
          onHandleAddTask={handleAddTask}
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
                              <input type="text" value={editTodo.title} onChange={(e) => handleEditChange(e)} />
                            </span>
                            :
                            <span>{todo.title}</span>
                        }
                      </>
                  }

                  <div className="d-flex gap-3">
                    <button className="btn btn-info mr-3" type="button" onClick={(e) => handleEditTask(todo)} >
                      {isEmptyObject === false && todo.id === editTodo.id ? 'Update' : 'Edit'}
                    </button>
                    <button className="btn btn-danger" type="button" onClick={(e) => handleDeleteTask(todo.id)}>Delete</button>
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

export default ListTodo;