import React from 'react';
import './logo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, h1, Image } from 'react-bootstrap';

import { motion } from "framer-motion";

const Logo = (props) => {
    return (

        <motion.div initial="hidden" animate="visible" variants={{
            hidden: { scale: 8, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 2 } }
        }}>

            <Row className="justify-content-sm-center text-center  mt-md-4">
                <Col sm={2} md={3} xs={12} className="text-right">
                    <Image src="https://www.flaticon.com/svg/static/icons/svg/892/892926.svg"
                        className="imageSize" fluid alt=""></Image></Col>



                <Col sm={8} md={6} xs={12} className="text-align-center text-dark pt-1 pt-sm-2 pt-md-3 pt-lg-4 ">

                    <h1 className="NouhackClass d-md-none" > Guess The number Mobile </h1>
                    <h1 className="NouhackClass d-none d-md-block" > Guess The number </h1>

                </Col>

                <Col sm={2} md={3} xs={12} className="text-left">
                    <Image src="https://www.flaticon.com/svg/static/icons/svg/892/892926.svg"
                        className="imageSize" fluid alt=""></Image>
                </Col>
            </Row>
        </motion.div>
    )
}
export default Logo;