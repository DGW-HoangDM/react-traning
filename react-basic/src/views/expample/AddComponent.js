import React from 'react'

//StateFull (class component)
class AddComponent extends React.Component {
  state = {
    jobName: '',
    salary: '',
  }

  handleChange = (e) =>{
    const { name, value } = e.target;
    
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    let currentJob = {
      id: Math.floor(Math.random() * 1001),
      name: this.state.jobName,
      salary: this.state.salary,
    }
    //pass data child component to parent component
    this.props.onMessageChange(currentJob);

    this.setState({
      jobName: '',
      salary: '',
    })
  }

  render() {
    
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <p>
            <label htmlFor="jobName">Job name:</label>
            <input name="jobName" type="text" value={this.state.jobName} onChange={(e) => this.handleChange(e)} />
          </p>
          <p>
            <label htmlFor="salary">Job salary:</label>
            <input name="salary" type="text" value={this.state.salary} onChange={(e) => this.handleChange(e)} />
          </p>
          <button type="submit">SUBMIT</button>
        </form>
      </>
    )
  }
}

export default AddComponent;