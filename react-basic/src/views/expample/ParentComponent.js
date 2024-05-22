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

  handleMessageChange = (job) => {
    if (job.name !== '' && job.salary !== '') {
      this.setState({
        jobList: [...this.state.jobList, job]
      });
    }
  }

  // Method to handle removing an item
  removeItem = (id) => {
    this.setState(prevState => ({
      jobList: prevState.jobList.filter(item => item.id !== id)
    }));
  };

  render() {
    let { jobList } = this.state;
    return (
      <>
        <h1>Parent component</h1>

        <AddComponent
          name="This my daughter"
          age={5}
          onMessageChange={this.handleMessageChange}
        />
        <div>
          <ul>
            {
              jobList.map((item) => {
                return (
                  <li key={item.id}>
                    {item.name}-{item.salary}
                    <span onClick={() => this.removeItem(item.id)}> - X</span>
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