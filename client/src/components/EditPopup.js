import React from 'react'
 
class EditPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        text: "",
        id: props.id 
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
 
  handleSubmit = (event) => {
    
    fetch('/editNote', {
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
        <div className="popup-box">
        <div className="box">
            <form onSubmit={this.handleSubmit}>
                <label>
                    What would you like to change the note to?
                    <input type="text" value={this.state.value} name="text" onChange={this.handleChange} />
                </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
      </div>
    );
  }
}
 

export default EditPopup;