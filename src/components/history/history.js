import React from 'react';
import classes from './history.module.css';
import Item from './items/items'
import 'bootstrap/dist/css/bootstrap.min.css'
import { motion } from 'framer-motion'


class History extends React.Component {
    constructor(props) {



        super(props)


        this.state = {



            trys: []
        }
    }

    componentDidUpdate() {
        console.log("hada khou", this.props.message)
        
    }

    render() {
        const AmptyArray = []

        if (this.props.isClicked) {
            console.log('xxxx', this.props.list)
            for (let index = 0; index < this.props.len; index++) {
                AmptyArray.push(<Item numbers={this.props.list[index]} key={index}></Item>)
            }
        }

        return (

            <motion.div className={classes.results}
                initial={{ y: '30vh' }}
                animate={{ y: 0 }}
                transition={{ duration: 2 }}
            >


                <h4 className={classes.h4}>Attempts</h4>
                <div className={classes.hold_items}>

                    {this.props.alert === "wrong" ?

                        <div className="alert alert-danger text-center" role="alert">

                            {this.props.message}
                        </div> : this.props.alert === "right" ?
                            
                            <div className="alert alert-success text-center" role="alert">

                                Right Answe
                               
                            </div>
                            

                            : null}
                    {AmptyArray}
                </div>


            </motion.div>
        )

    }

}



export default History;

