import React from 'react'
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
  state = {
    title: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  handleAddTasks = (e) => {
    // check task title exists
    if (!this.state.title) {
      const notify = () => toast.error('Missing title!');
      notify();
      return
    }

    let currentTask = {
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
    }

    //pass data by function props name onHandleAddTask
    this.props.onHandleAddTask(currentTask);

    this.setState({
      title: ''
    })

    // Set focus on the input element
    const inputElement = document.querySelector('#titleTask');
    inputElement.focus();
  }

  render() {
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
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />
          <button className="btn btn-primary" type="button" onClick={(e) => this.handleAddTasks(e)} >ADD</button>
        </div>

        
      </div>
    )
  }
}

export default AddTodo;