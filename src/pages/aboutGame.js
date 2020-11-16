import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap'
import './aboutDev.css'
import classes from '../components/history/history.module.css'
import { motion } from 'framer-motion'
export default () => {
    return (
        <motion.div className="h-auto mt-sm-5 mt-5"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
        >
            <h4 className={classes.h4}>About Game</h4>
            <br />
            <p className="textNouhack">
                Guess The number is a guess Game where the player should find the random number generated in less attempts
            .<br /> The default random value is between 0 and 20 and you Can Modify the Min and Max in the setting To make it more fun

            </p>
            <br />
            <h4 className={classes.h4}><a href="https://github.com/Nouhack" target="_blank"><p> Join me in GitHub</p></a></h4>




        </motion.div>
    )
}


// python  django  java se  DBMS javascript css html react js  next js  bootstrap
