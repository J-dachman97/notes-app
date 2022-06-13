import React from 'react'
 
class DeleteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: props.id };
  }
 
  handleSubmit = (event) => {
    
    fetch('/deleteNote', {
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
        <button onClick={this.handleSubmit} id = {this.props.id} className="deleteButton">delete</button>
    );
  }
}
 

export default DeleteButton;