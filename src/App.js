
import './app.css'
import RootContainer from './pages/mainContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import Logo from './components/logo/logo'
import AboutDev from './pages/aboutDeveloper'
import AboutGame from './pages/aboutGame'
function App() {
  return (

    <Container className="container-sm Maincontainer">

      <Row className="h-auto mt-sm-5 align-tems-center">
        <Col className="bg-white align-self-center">
          <Logo />
        </Col>
      </Row>
      {/* If you are here LOL dont forget to subscribe to my youtube channel :==> Nouhack */}
      <Route path="/" exact component={RootContainer}></Route>
      <Route path="/aboutDev" exact component={AboutDev}></Route>
      <Route path="/aboutGame" exact component={AboutGame}></Route>
    </Container>

  );
}

export default App;
