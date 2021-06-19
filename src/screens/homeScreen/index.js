import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Categories from './../../components/categories'
import VideosSection from './../../components/videosSection'

const HomeScreen = () => {
  return (
    <Container>
      <Categories />
      <Row>
        {[...new Array(20)].map(() => (
          <Col lg={3} md={4}>
            <VideosSection />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default HomeScreen
