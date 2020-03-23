import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import DareQuiz from './components/DareQuiz';

class App extends React.PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <DareQuiz />
          </Col>
        </Row>
      </Container>
    );
  }
}
 
export default App;