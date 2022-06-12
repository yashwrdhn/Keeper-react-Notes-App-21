import Header from './Header';
import CreateArea from './CreateArea';
import Note from './Note';
import './App.css';
import {Row, Col, Container} from 'react-bootstrap';
import {useState, useEffect } from 'react';
import useFetch from './useFetch';
const data = require('./notes.json')

function App() {

  // const {data, ispending, error} = useFetch('http://localhost:5000/api/notes');
  // const [ notes, getNotes] = useState(null);
  // useEffect( () =>  {
  //   fetch('http://localhost:5000/api/notes')
  //   .then( res => res.json())
  //   .then( data => { 
  //     console.log(data);
  //     // getNotes(data);
  //     // console.log(data);
  //     })
  //   .catch( err => console.log(err));
  // }, []);
  


  const [ myNotes, setNote] = useState(data);

  const AddNote = (props) => {
    console.log("note added successfully", props);
    const {title, content} = props;
    const newNote = {
      'id': myNotes.length+1,
      'title': title,
      'content':content,
    };
    setNote( prev => [...prev, newNote]);
  }

  const deleteNote = (id) => {
    console.log(id)
    // const UpdatedNotes = myNotes.filter( (note) => { 
      
    //   console.log( note.id, id);
    // });
    // console.log(UpdatedNotes)
    // setNote( UpdatedNotes);
  }


  return (
    <Container fluid className="App">
      <Header />
      <CreateArea addNote={AddNote} />
      <Row>
        { myNotes.map( (note) => {
                // console.log(note);
                return (
                <Col sm xs lg="3" key={note.id}  >
                <Note 
                  deleteNote = {deleteNote}
                  key={note.id} 
                  title={note.title}
                  content={note.content}
                  />
                </Col>
                );
            })
        }
      </Row>
    </Container>
  );
}

export default App;
