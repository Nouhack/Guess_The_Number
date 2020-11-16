import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import './modal.css';

const Modals = (props) => {
    return (
        <React.Fragment>

            <Modal show={props.show} onHide={props.EnableDisableSShow}>
                <Modal.Header closeButton>
                    <Modal.Title className="BodyFont">Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body className="BodyFont">choose the Minimum and Maximum value

                <br />
                    <div className="inWrapper">
                        <input
                            id="leftInput"
                            type="Number"
                            className="form-control in "
                            name="tentacles"
                            min="0" max="100"
                            value={props.minVal}
                            onChange={props.minValListner}
                        ></input>

                        <input
                            id="rightInput"
                            type="Number"
                            className="form-control in "
                            name="tentacles"
                            min="0" max="100"
                            value={props.maxVal}
                            onChange={props.maxValListner}
                        ></input>
                    </div>


                </Modal.Body>



                <Modal.Footer>
                    <Button variant="secondary" className="btn btn-danger" onClick={props.EnableDisableSShow}>

                        Close
                </Button>

                    <Button variant="primary"
                        className="btn btn-success"
                        onClick={props.buttonValidaion}>
                        Save
                </Button>

                </Modal.Footer>
            </Modal>

        </React.Fragment>



    )
}

export default Modals;