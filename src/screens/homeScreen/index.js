import React, { useEffect } from 'react'
import './_index.scss'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos } from '../../redux/actions/videos.action'
import Categories from './../../components/categories'
import VideosSection from './../../components/videosSection'
import InfiniteScroll from 'react-infinite-scroll-component'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const fetchData = () => {
    dispatch(getPopularVideos())
  }

  useEffect(() => {
    dispatch(getPopularVideos())
  }, [dispatch])

  const { videos } = useSelector((state) => state.homeVideos)
  return (
    <Container>
      <Categories />
      <Row>
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={<div className='spinner-border text-danger mx-auto'></div>}
        >
          {videos.map((video) => (
            <Col lg={3} md={4}>
              <VideosSection video={video} key={video.id} />
            </Col>
          ))}
        </InfiniteScroll>
      </Row>
    </Container>
  )
}

export default HomeScreen
