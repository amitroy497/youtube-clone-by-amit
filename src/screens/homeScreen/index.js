import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos } from '../../redux/actions/videos.action'
import Categories from './../../components/categories'
import VideosSection from './../../components/videosSection'

const HomeScreen = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPopularVideos())
  }, [dispatch])

  const { videos } = useSelector((state) => state.homeVideos)
  return (
    <Container>
      <Categories />
      <Row>
        {videos.map((video, i) => (
          <Col lg={3} md={4}>
            <VideosSection video={video} key={video.id} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default HomeScreen
