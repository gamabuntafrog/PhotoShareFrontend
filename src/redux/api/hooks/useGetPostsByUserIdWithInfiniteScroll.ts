import extendedPostsApi from '../extendedPostsApi'
import useInfiniteScrollForSearchByIdQuery from '../../../hooks/useInfiniteScrollForSearchByIdQuery'
import { useState } from 'react'

export default function useGetPostsByUserIdWithInfiniteScroll({ id }: { id: string }) {
  const [trigger, { data = [], isLoading, isError }] =
    extendedPostsApi.useLazyGetPostsByUserIdQuery()
  const [isNextPostsLoading, setIsNextPostsLoading] = useState(false)
  
  const { paginatedData, ref, isEnd } = useInfiniteScrollForSearchByIdQuery({
    trigger: (data: any) => {
      setIsNextPostsLoading(true)
      trigger(data).then(() => setIsNextPostsLoading(false))
    },
    isLoading,
    isError,
    id,
    data,
  })
  console.log(isLoading)
  return { data: paginatedData, isLoading, isError, ref, isEnd, isNextPostsLoading}
}
