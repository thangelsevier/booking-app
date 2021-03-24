
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';

function About() {
    return (
      <div className="About">
        <Container fluid className="bg-dark">
            <h1>Sushi Booking</h1>
            <Button variant="primary">Phone <Badge variant="light">0368639868</Badge>
            <span className="sr-only">unread messages</span>
            </Button>
        </Container>
      </div>
    );
}

export default About;
