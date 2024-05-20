import React from 'react'

class MyComponentForm extends React.Component {
  //define global state 
  state = {
    fullName: '',
    description: '',
    favorite: '',
  }

  handleChangeName = (e) =>{
    // console.log('handleChangeName', e.target.value);
    //ES6
    const { name, value } = e.target;

    //ES5
    // var name = e.target.name;
    // var value = e.target.value;
    
    this.setState({
      [name]: value
    })
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
            <label htmlFor="fullName">Full name:</label>
            <input name="fullName" type="text" value={this.state.fullName} onChange={(e) => this.handleChangeName(e)} />
          </p>
          <p>
            <label htmlFor="description">Description:</label>
            <textarea name="description" value={this.state.description} onChange={(e) => this.handleChangeName(e)} />
          </p>
          <p>
            <label htmlFor="favorite">Pick your favorite flavor:</label>
            <select name="favorite" value={this.state.favorite} onChange={(e) => this.handleChangeName(e)}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </p>
          <button type="submit">Submit</button>
        </form>
      </>
    )
  }
}

export default MyComponentForm;