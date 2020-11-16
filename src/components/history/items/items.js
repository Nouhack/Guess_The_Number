import React from 'react';
import classes from './items.module.css'
import { motion } from 'framer-motion'

const Item = (props) => {
    return (
        <motion.div className={classes.item_box}
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 120 }} >
            <p>{props.numbers}</p>
        </motion.div >
    )
}

export default Item;