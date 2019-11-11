import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

function DefaultModal(props) {

    // If the show prop isn't set to true, don't render anything
    if (!props.show) {
        console.log('Show is not true');
        return null;
    };

    console.log("Rendering modal")
    console.log(`props.show is ${props.show}`)

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
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

// function App() {
//     const [modalShow, setModalShow] = React.useState(false);

//     return (
//         <ButtonToolbar>
//             <Button variant="primary" onClick={() => setModalShow(true)}>
//                 Launch vertically centered modal
//         </Button>

//             <MyVerticallyCenteredModal
//                 show={modalShow}
//                 onHide={() => setModalShow(false)}
//             />
//         </ButtonToolbar>
//     );
// }

export default DefaultModal;