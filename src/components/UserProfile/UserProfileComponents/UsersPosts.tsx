import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import MiniLoader from '../../Loaders/MiniLoader'
import { Box, ImageList, Typography } from '@mui/material'
import usePostsActions from '../../../hooks/usePostsActions'
import useSx from '../../../hooks/useSx'
import postsStyles from '../../Posts/postsStyles'
import useShortTranslation from '../../../hooks/useShortTranslation'
import MasonryPostsDrawer from '../../MasonryPostsDrawer'
import useGetPostsByUserIdWithInfiniteScroll from '../../../redux/api/hooks/useGetPostsByUserIdWithInfiniteScroll'
import FullScreenLoader from '../../Loaders/FullScreenLoader'

export default function UsersPosts() {
  const { id = '' } = useParams<{ id: string }>()!

  const { data, isLoading, isEnd, isError, ref, isNextPostsLoading} = useGetPostsByUserIdWithInfiniteScroll({ id })

  const [posts, postsActions] = usePostsActions({ initPosts: data })
  const styles = useSx(postsStyles)

  const t = useShortTranslation({ componentNameKey: 'UserProfile.UserPosts' })
  if (isLoading) {
    return <FullScreenLoader smaller />
  }

  if (isError) {
    return (
      <Typography textAlign="center" variant="h1">
        {t('error')}
      </Typography>
    )
  }

  if (!posts) {
    return (
      <Typography textAlign="center" variant="h1">
        {t('noPostsMessage')}
      </Typography>
    )
  }

  return (
    <>
      <Box sx={styles.container}>
        <MasonryPostsDrawer isNextPostsLoading={isNextPostsLoading} posts={posts} postsActions={postsActions} />
      </Box>
      <div ref={ref} />
    </>
  )
}
