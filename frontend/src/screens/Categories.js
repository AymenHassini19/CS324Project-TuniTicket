import React from 'react';
import { faMusic, faFutbol, faFilm, faFaceLaughBeam, faMasksTheater, faCubes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Categories.css'; 

const Categories = () => {
  const categories = [
    { icon: faMusic, label: 'Music', link: '/category/music' },
    { icon: faFutbol, label: 'Sport', link: '/category/sport' },
    { icon: faFilm, label: 'Movie', link: '/category/movie' },
    { icon: faMasksTheater, label: 'Theater', link: '/category/theater' },
    { icon: faFaceLaughBeam, label: 'Comedy', link: '/category/comedy' },
    { icon: faCubes, label: 'Others', link: '/category/others' },
  ];

  return (
    <div className="categories-container">
      <Row className="g-4">
        {categories.map((category, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <Card className="category-card">
              <Link to={category.link} className="category-link">
                <Card.Body className="category-card-body">
                  <FontAwesomeIcon icon={category.icon} size="4x" />
                  <Card.Title className="category-title">{category.label}</Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Categories;
