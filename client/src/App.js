// client/src/App.js

import React from "react";
import "./App.css";
import DeleteButton from "./components/DeleteButton"
import EditButton from "./components/EditButton"
import { useParams } from "react-router-dom";
import { withRouter } from "react-router";

class App extends React.Component {

  constructor(props) {
    
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      id: this.props.params.id,
      notes: []
    };
  }



  componentDidMount() {
    fetch("/notes")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            notes: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    //this.filterById();
    const { error, isLoaded, notes, id} = this.state;
   
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else if(id == null ){
      return (
        <ul>
          {notes.map(note => (
            <div key={note.id}>
              {note.id}: {note.text} 
              <EditButton id = {note.id} />
              <DeleteButton id = {note.id} />
            </div>
            
          ))}
        </ul>
      );
    }
    else {
      return (
        <ul>
          {notes.filter(note => note.id == this.state.id).map(filteredNote => (
            <div key={filteredNote.id}>
              {filteredNote.id}: {filteredNote.text} 
              <EditButton id = {filteredNote.id} />
              <DeleteButton id = {filteredNote.id} />
            </div>
          ))}
      </ul>
      );
    }
  }
}

export default (props) => (
  <App
      {...props}
      params={useParams()}
  />
);

