import React, { useEffect } from 'react'
import './_index.scss'
import { Container, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  getPopularVideos,
  getVideosByCategory,
} from '../../redux/actions/videos.action'
import Categories from './../../components/categories'
import VideosSection from './../../components/videosSection'
import InfiniteScroll from 'react-infinite-scroll-component'
import SkeletonVideo from '../../components/skeletons'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  )

  const fetchData = () => {
    if (activeCategory === 'All') {
      dispatch(getPopularVideos())
    } else {
      dispatch(getVideosByCategory(activeCategory))
    }
  }

  useEffect(() => {
    dispatch(getPopularVideos())
  }, [dispatch])

  return (
    <Container>
      <Categories />
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={<div className='spinner-border text-danger mx-auto'></div>}
        className='row'
      >
        {!loading
          ? videos.map((video) => (
              <Col lg={3} md={4}>
                <VideosSection video={video} key={video.id} />
              </Col>
            ))
          : [...Array(20)].map(() => (
              <Col lg={3} md={4}>
                <SkeletonVideo />
              </Col>
            ))}
      </InfiniteScroll>
    </Container>
  )
}

export default HomeScreen
