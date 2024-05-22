import React from 'react'
import AddComponent from './AddComponent';

class ParentComponent extends React.Component {
  state = {
    jobList: [
      { id: 'job1', name: 'Web', salary: 500 },
      { id: 'job2', name: 'Java', salary: 1000 },
      { id: 'job3', name: 'Net', salary: 3000 }
    ],
  }

  handleAddJob = (job) => {
    if (job.name !== '' && job.salary !== '') {
      this.setState({
        //ES6 Spread Operator
        jobList: [...this.state.jobList, job]
      });
    }
  }

  // Method to handle removing an item
  handleRemoveJob = (id) => {
    this.setState(prevState => ({
      jobList: prevState.jobList.filter(item => item.id !== id)
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevState, this.state);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    console.log('check render state', this.state);
    let { jobList } = this.state;

    return (
      <>
        <h1>Parent component</h1>

        <AddComponent
          name="This my daughter"
          age={5}
          onHandleAddJob={this.handleAddJob}
        />
        <div>
          <ul>
            {
              jobList.map((item) => {
                return (
                  <li key={item.id}>
                    {item.name}-{item.salary}
                    <span onClick={() => this.handleRemoveJob(item.id)}> - X</span>
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

export default ParentComponent;