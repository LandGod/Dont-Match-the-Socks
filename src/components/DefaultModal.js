import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

function DefaultModal(props) {

    // If the show prop isn't set to true, don't render anything
    if (!props.show) {
        return null;
    };

    // else render modal
    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {props.text}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Okay</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DefaultModal;