import React from 'react';
import './input.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
class Value extends React.Component {


        render() {
                return (

                        <div className="h-100">

                                <Row className="InputValues align-items-sm-center justify-content-center justify-content-sm-center no-gutters">




                                        <Col xs={2} sm={2} className="text-right mt-3 mt-sm-0 ">
                                                <motion.div
                                                        initial={{ x: '-100vw' }}
                                                        animate={{ x: 0 }}
                                                        transition={{ duration: 2 }}
                                                >
                                                        <Button
                                                                className=""
                                                                variant="outline-success"
                                                                onClick={this.props.decrement}
                                                        > -</Button>
                                                </motion.div>
                                        </Col>


                                        <Col xs={4} sm={4} className=" text-center mt-3 mt-sm-0  " >
                                                <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ duration: 3 }}
                                                >
                                                        <Form.Control className="MyInput w-75 m-auto d-none d-md-block" style={{
                                                                "border": "none",
                                                                "border-right": "none",
                                                                "border-bottom": "1px solid #4CAF50",
                                                                "text-align": "center"
                                                        }} type="Number" onChange={this.props.inputFunction}
                                                                name="tentacles"
                                                                min="0" max="100"
                                                                value={this.props.defaultVal}
                                                                onKeyPress={this.props.keyFunction} />


                                                        <Form.Control className="MyInput w-75 m-auto d-md-none" style={{
                                                                "border": "none",
                                                                "border-right": "none",
                                                                "border-bottom": "1px solid #4CAF50",
                                                                "text-align": "center"
                                                        }} type="quantity" onChange={this.props.inputFunction}
                                                                name="tentacles"
                                                                min="0" max="100"
                                                                value={this.props.defaultVal}
                                                                onKeyPress={this.props.keyFunction} />

                                                </motion.div>
                                                {/* 
                                                

                                                
                                                

                                                <input
                                                        type="quantity"
                                                        className="inputWidthResponsive text-center w-100 d-md-none"
                                                        onChange={this.props.inputFunction}
                                                        name="tentacles"
                                                        min="0" max="100"
                                                        value={this.props.defaultVal}
                                                        onKeyPress={this.props.keyFunction}
                                                ></input>

*/}




                                        </Col>

                                        <Col xs={2} sm={2} className="text-left mt-3 mt-sm-0">
                                                <motion.div
                                                        initial={{ x: '100vw' }}
                                                        animate={{ x: 0 }}
                                                        transition={{ duration: 2 }}
                                                >
                                                        <Button
                                                                className=""
                                                                variant="outline-success"
                                                                onClick={this.props.increment}
                                                        > +</Button>
                                                </motion.div>


                                        </Col>


                                </Row>

                                <Row className="buttonsRowHeight bg-white align-items-center  text-center mt-sm-2 mt-md-0" >
                                        <Col xs={12} sm={6} md={4} className="mt-md-3 order-2 order-sm-2 order-md-0" >
                                                <motion.div
                                                        initial={{ x: '-100vw' }}
                                                        animate={{ x: 0 }}
                                                        transition={{ type: "spring", stiffness: 120 }}
                                                >
                                                        <Button
                                                                variant="outline-success"
                                                                className="w-100 mb-2"
                                                                onClick={this.props.ActiveModal}
                                                        > Setting</Button>
                                                </motion.div>

                                        </Col>


                                        {/*<Col xs={12} sm={6} md={4} className="mt-md-3" >
                                                <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ type: "spring", stiffness: 120 }}
                                                >
                                                        <Button
                                                                variant="success"
                                                                className="w-100 mb-2"
                                                                style={{ borderRadius: "50px" }}
                                                                onClick={this.props.buttonFunction}
                                                        > Commit</Button>
                                                </motion.div>
</Col>*/}

                                        <Col xs={12} sm={12} md={4} className="mt-md-3 order-1 order-sm-1 order-md-0" >
                                                <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ type: "spring", stiffness: 120 }}
                                                >
                                                        <Button
                                                                variant="success"
                                                                className="w-100 mb-2"
                                                                style={{ borderRadius: "50px" }}
                                                                onClick={this.props.buttonFunction}
                                                        > Commit</Button>
                                                </motion.div>

                                        </Col>
                                        <Col xs={12} sm={6} md={4} className="mt-md-3 order-3 order-sm-3 order-md-0">

                                                <motion.div
                                                        initial={{ x: '100vw' }}
                                                        animate={{ x: 0 }}
                                                        transition={{ type: "spring", stiffness: 120 }}
                                                >
                                                        <Button
                                                                variant="outline-success"
                                                                className=" w-100 mb-2"
                                                                onClick={this.props.reset}
                                                        > Reset</Button>

                                                </motion.div>
                                        </Col>



                                        <Col xs={12} sm={6} md={6} className="mb-md-3 order-4 order-sm-4 order-md-0">

                                                <Link to="/aboutDev">
                                                        <motion.div
                                                                initial={{ x: '-100vw' }}
                                                                animate={{ x: 0 }}
                                                                transition={{ type: "spring", stiffness: 120 }}
                                                        >
                                                                <Button
                                                                        variant="outline-success"
                                                                        className="w-100 mb-2"
                                                                        onClick={this.props.reset}
                                                                > About Developer</Button>
                                                        </motion.div>
                                                </Link>


                                        </Col>
                                        <Col xs={12} sm={6} md={6} className="mb-md-3 order-5 order-sm-4 order-md-0">
                                                <Link to="/aboutGame">
                                                        <motion.div
                                                                initial={{ x: '100vw' }}
                                                                animate={{ x: 0 }}
                                                                transition={{ type: "spring", stiffness: 120 }}
                                                        >
                                                                <Button
                                                                        variant="outline-success"
                                                                        className=" w-100 mb-2"
                                                                        onClick={this.props.reset}
                                                                > About Game</Button>
                                                        </motion.div>
                                                </Link>
                                        </Col>
                                </Row>

                        </div>


                )
        }
}

export default Value;