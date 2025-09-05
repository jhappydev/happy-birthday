import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import { gallery } from '../data.js';

function AboutUs() {
  const [flipped, setFlipped] = useState(Array(gallery.length).fill(false));

  const handleFlip = (index) => {
    const updated = [...flipped];
    updated[index] = !updated[index];
    setFlipped(updated);
  };
  
  return (
    <Container className="bg-white p-4 rounded shadow-sm">
      <div className="d-flex justify-content-end mb-4">
        <Button variant="secondary">🎁 선물 보러가기</Button>
      </div>

      {/* 프로필 생략 */}

      <Row xs={3} sm={3} md={3} className="g-3">
        {gallery.map((item, idx) => (
          <Col key={idx}>
            <div
              className={`flip-card ${flipped[idx] ? 'flipped' : ''}`}
              onClick={() => handleFlip(idx)}
            >
              <div className="flip-card-inner">
                {/* 앞면 */}
                <div className="flip-card-front">
                  <Card className="border-0 bg-transparent p-0">
                    <Card.Img variant="top" className="card-img-top" src={item.image} />
                    <Card.Body> 
                      <Card.Title className="fs-6 mb-1 text-start">{item.title}</Card.Title>
                      <Card.Text className="text-muted mb-0 text-end">
                        {item.date}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* 뒷면 */}
                <div className="flip-card-back">
                  <Card className="border-0 text-white bg-transparent p-0">
                    <Card.Body style={{ backgroundColor: '#CFB8A6', whiteSpace: 'pre-wrap' }}>
                      <Card.Text className="text-start">{item.letter}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AboutUs;
