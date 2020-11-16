import React from 'react';
import Value from '../components/searchComp/inputValue';
import History from '../components/history/history'

import Modals from '../components/modal/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

import SuccessModal from '../components/SuccessModal/succes'

class RootContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      val: 0,
      data: [],
      attempts: 0,
      clicked: false,
      showModal: false,
      showSuccessModal: false,
      result: false,
      showAlertMessage: "none",
      predef_min_val: 0,
      predef_max_val: 20,
      status: "none",
      MainValue: Math.floor(Math.random() * (20 - 0)) + 0
    }

    //   this.MainValue=Math.floor(Math.random() * (this.state.max_value - this.state.min_value) + this.state.min_value)

  }

  componentDidMount() {
    console.log(this.state.MainValue)
  }



  getValue = (event) => {

    this.setState({
      val: event.target.value
    })


  }

  displayTry = () => {

    if (!isNaN(this.state.val) && this.state.val !== "") {
      console.log("LA VAL HYA", this.state.MainValue)
      this.setState(prevState => {

        return {
          ...prevState,
          data: prevState.data.concat(this.state.val),
          clicked: true,
          status: "wrong",
          showAlertMessage: this.state.val > this.state.MainValue ? `value < ${this.state.val}` :
            `value > ${this.state.val} `


        }

      })
    }

  }

  resetAllConfig = () => {
    this.setState({
      data: [],
      val: 0,
      clicked: false,
      showModal: false,
      result: false,
      showAlertMessage: "none",
      predef_max_val: 20,
      predef_min_val: 0,
      status: "none",
      MainValue: Math.floor(Math.random() * (20 - 0)) + 0

    })
  }

  rightAnswer = () => {
    this.setState({
      status: "right"
    })
  }

  tries = () => {
    this.setState(prevState => ({
      attempts: prevState.attempts + 1
    }))
  }

  test = () => {

    if (this.state.MainValue == this.state.val) {
      this.rightAnswer()
      this.activeSuccessModal()
      console.log('rak shih khou')
    } else {
      this.tries()
      console.log('rak ghalat')

      console.log('hadi hya la val nouh', this.state.MainValue)
      console.log('hadi hya laval ta3 val nouh', this.state.val)
      this.displayTry()
    }

  }



  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.test()

    }
  }

  activMod = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }


  activeSuccessModal = () => {
    this.setState({
      showSuccessModal: !this.state.showSuccessModal
    })
  }

  minValueChanger = (event) => {
    console.log(event.target.value)
    if (Number(event.target.value) >= Number(this.state.predef_max_val)) {
      this.setState({
        predef_min_val: Number(event.target.value),
        predef_max_val: Number(event.target.value) + 1
      })
    } else {
      this.setState({
        predef_min_val: event.target.value,

      })
    }

  }

  maxValueChanger = (event) => {
    console.log(event.target.value)
    if (Number(event.target.value) <= Number(this.state.predef_min_val)) {
      this.setState({
        predef_min_val: Number(event.target.value) - 1,
        predef_max_val: Number(event.target.value)
      })
    } else {
      this.setState({
        predef_max_val: event.target.value,

      })
    }
  }

  setFinalVal = () => {

    this.setState({

      MainValue: Math.floor(Math.random() * (Number(this.state.predef_max_val) - Number(this.state.predef_min_val))) + Number(this.state.predef_min_val),
      showModal: false
    })

  }

  Increment = () => {
    console.log('rani hna')
    this.setState({
      val: this.state.val + 1
    })
  }

  Decrement = (prevState => {
    if (this.state.val !== 0) {
      this.setState({
        val: this.state.val - 1
      })
    }
  })
  render() {

    return (
      <React.Fragment>



        <Row className="h-50  align-tems-center">

          <Col>
            <Value buttonFunction={this.test}
              inputFunction={this.getValue}
              keyFunction={this.handleKeyPress}
              ActiveModal={this.activMod}
              reset={this.resetAllConfig}
              defaultVal={this.state.val}
              increment={this.Increment}
              decrement={this.Decrement}

            />

          </Col>
        </Row>

        <Row className="mt-3  mt-sm-5 mt-md-0">
          <Col>
            <History num={this.state.val}
              isClicked={this.state.clicked}
              list={this.state.data}
              len={this.state.data.length}
              alert={this.state.status}
              message={this.state.showAlertMessage}
            ></History>
          </Col>
        </Row>


        <Modals show={this.state.showModal}
          EnableDisableSShow={this.activMod}
          minValListner={this.minValueChanger}
          maxValListner={this.maxValueChanger}
          buttonValidaion={this.setFinalVal}
          minVal={this.state.predef_min_val}
          maxVal={this.state.predef_max_val}
        ></Modals>

        <SuccessModal show={this.state.showSuccessModal}
          EnableOrDisable={this.activeSuccessModal}
          Tries={this.state.attempts}
        >
        </SuccessModal>
      </React.Fragment>
    )
  }
}


export default RootContainer;