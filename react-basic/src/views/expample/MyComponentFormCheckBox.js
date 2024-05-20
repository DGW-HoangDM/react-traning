import React from 'react'

class MyComponentFormCheckBox extends React.Component {
  //define global state 
  state = {
    vehicle: {
      vehicle1: '',
      vehicle2: '',
      vehicle3: ''
    },
  }

  handleChange = (e) =>{
    const { name, value } = e.target;

    if(e.target.checked){
      this.setState(prevState => ({
        vehicle: {
          ...prevState.vehicle,
          [name]: value
        }
      }));
    }else {
      this.setState(prevState => ({
        vehicle: {
          ...prevState.vehicle,
          [name]: ''
        }
      }));
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('A value was submitted', this.state);
    // alert('A name was submitted: ' + this.state );
  }

  render() {
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <p>
            <label htmlFor="vehicle">Vehicle:</label><br />

            <input type="checkbox" name="vehicle1" value="Bike" onChange={(e) => this.handleChange(e)} />
            <label htmlFor="vehicle1"> I have a bike</label><br />
            
            <input type="checkbox" name="vehicle2" value="Car" onChange={(e) => this.handleChange(e)} />
            <label htmlFor="vehicle2"> I have a car</label><br />
            
            <input type="checkbox" name="vehicle3" value="Boat" onChange={(e) => this.handleChange(e)} />
            <label htmlFor="vehicle3"> I have a boat</label><br /><br />
          </p>
          <button type="submit">Submit</button>
        </form>
      </>
    )
  }
}

export default MyComponentFormCheckBox;