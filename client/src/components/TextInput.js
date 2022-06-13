import React from 'react'
 
class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
 
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
 
  handleSubmit = (event) => {
 
    fetch('/notes/new', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        window.location.reload(false);
        return response.json();
      });
 
    event.preventDefault();
    
}
 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Note:
          <input type="text" value={this.state.value} name="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
 

export default TextInput;
