import React from 'react'
import EditPopup from './EditPopup';
 
class EditButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        id: props.id,
        isOpen: false
    };
  }
 
    togglePopup = () => {
        this.setState({isOpen: true});
    }
  render() {
    return (
        
        <div>
        <input
            type="button"
            value="Edit"
            id = {this.props.id} 
            className="editButton"
            onClick={this.togglePopup}
        />
            {this.state.isOpen && <EditPopup id={this.props.id}/>}
            
        </div>
    );
  }
}
 

export default EditButton;