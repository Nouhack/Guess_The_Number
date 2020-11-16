import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'

export default (props) => {
    return (
        <>
            <Modal show={props.show} onHide={props.EnableOrDisable} centered
            >
                <Modal.Header closeButton >
                    <Modal.Title className="BodyFont centered">Congratulation</Modal.Title>
                </Modal.Header>
                <Modal.Body className="BodyFont">You DID it after {props.Tries} Attempts

                    <img src="https://www.animatedimages.org/data/media/1574/animated-success-image-0013.gif"></img>



                </Modal.Body>



                <Modal.Footer>
                    <Button variant="secondary" className="btn btn-danger" onClick={props.EnableOrDisable}>

                        Close
                </Button>


                </Modal.Footer>
            </Modal>


        </>
    )
}