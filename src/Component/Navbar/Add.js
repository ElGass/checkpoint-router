import React,{useState} from 'react';
import {Modal,Button, Form} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";

const Add = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
<Form>
<Form.Label >Movie Name:</Form.Label>
<Form.Control type="text"  />
<Form.Label>Movie Banner:</Form.Label>
<Form.Control type="text"  />
<Form.Label>Movie Type:</Form.Label>
<Form.Control type="text"  />
<Form.Label>Movie Description:</Form.Label>
<Form.Control as="textarea" rows={3} />
<Form.Label>Movie Rating:</Form.Label>
<ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
  />
</Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default Add
