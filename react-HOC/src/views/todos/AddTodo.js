import React, { useState } from 'react'
import { toast } from 'react-toastify';

const AddTodo = (prop) => {
  const [title, setTitle] = useState('')

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleAddTasks = (e) => {
    // check task title exists
    if (!title) {
      const notify = () => toast.error('Missing title!');
      notify();
      return
    }

    let currentTask = {
      id: Math.floor(Math.random() * 1001),
      title: title,
    }

    //pass data by function props name onHandleAddTask
    prop.onHandleAddTask(currentTask);
    setTitle('')

    // Set focus on the input element
    const inputElement = document.querySelector('#titleTask');
    inputElement.focus();
  }

  return (
    <div className="row mb-3">
      <span htmlFor="exampleFormControlInput1" className="form-label">Add task</span>
      <div className="input-group">
        <input
          id="titleTask"
          className="form-control"
          placeholder="Task name"
          type="text"
          name="title"
          value={title}
          onChange={(e) => handleChange(e)}
        />
        <button className="btn btn-primary" type="button" onClick={(e) => handleAddTasks(e)} >ADD</button>
      </div>


    </div>
  )
};

export default AddTodo;