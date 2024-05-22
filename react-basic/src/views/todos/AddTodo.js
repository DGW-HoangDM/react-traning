import React from 'react'

class AddTodo extends React.Component {
  render() {
    return (
      <div className="row mb-3">
        <span htmlFor="exampleFormControlInput1" className="form-label">Add task</span>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Task name" />
          <button className="btn btn-primary" type="button" >ADD</button>
        </div>
      </div>
    )
  }
}

export default AddTodo;