import { Form, Button, Modal,Card }  from 'react-bootstrap';
import { useState } from 'react';

const CreateArea = ({addNote}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [ title, setTitle] = useState('');
    const [ content, setContent] = useState('');

    const handleSubmit = (e) => {
        console.log('submitted');
        e.preventDefault();
        console.log(e, title, content);
        if( title !== "" && content !== "")
        { addNote({ title, content});
          setTitle('');
          setContent('');
          handleClose();
        }
        else{ console.log('empty fields are not accepted');}
    }

    return ( 
    <div className="create-area ">
       
            <Button variant="primary" onClick={handleShow}>
                    Add Note
            </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Note </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit = {handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Note Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholdern="title"
                    autoFocus
                    value={title}
                    onChange={ (e) => setTitle(e.target.value) }
                />
                </Form.Group>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                <Form.Label>Note content</Form.Label>
                <Form.Control
                    as="textarea" 
                    rows={3}
                    value={content}
                    onChange={ (e) => setContent(e.target.value)}
                />
                </Form.Group>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" >
                        Add Note
                    </Button>
                </Modal.Footer>

            </Form>
            </Modal.Body>

        </Modal>
 
    </div> );
}
 
export default CreateArea;