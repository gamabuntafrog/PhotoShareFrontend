import extendedPostsApi from "../extendedPostsApi";
import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";

interface IUseInfiniteScrollForSearchBuIdQueryProps {
    trigger: any,
    isLoading: boolean,
    isError: boolean,
    id: string,
    data: any[]
}

function useInfiniteScrollForSearchBuIdQuery({
                                                 trigger,
                                                 isLoading,
                                                 isError,
                                                 id,
                                                 data
                                             }: IUseInfiniteScrollForSearchBuIdQueryProps) {

    const [isEnd, setIsEnd] = useState(false);
    const [combinedValue, setCombinedValue] = useState(data);

    const {ref, inView} = useInView({
        threshold: 0,
        rootMargin: '500px'
    });

    useEffect(() => {
        setCombinedValue([])
        setIsEnd(false)
    }, [id]);

    useEffect(() => {
        if (isError) return;
        if (data.length < 1 || isLoading) return
        if (data.length < 1 && combinedValue.length > 0) {
            setIsEnd(true)
            return
        }
        if (data.length < 15) {
            setIsEnd(true)
        }

        setCombinedValue(prev => {
            if (prev.length < 1) return data

            const isNewDataNotSameToPrev = data.findIndex((el) => el._id === prev[prev.length - 1]._id) === -1
            if (isNewDataNotSameToPrev) {
                return [...prev, ...data]
            }

            return prev
        })
    }, [data]);

    useEffect(() => {
        if (isError) return;
        if (!inView || isLoading) return;
        if (isEnd) return;

        const arrayOfId = combinedValue.map((el) => el._id)
        trigger({arrayOfId, id})
    }, [inView, id]);

    return {paginatedData: combinedValue, ref, isEnd}
}

export default function useGetPostsByUserIdWithInfiniteScroll({id}: { id: string }) {

    const [trigger, {data = [], isLoading, isError}] = extendedPostsApi.useLazyGetPostsByUserIdQuery()

    const {paginatedData, ref, isEnd} = useInfiniteScrollForSearchBuIdQuery({trigger, isLoading, isError, id, data})

    return {data: paginatedData, isLoading, isError, ref, isEnd}
}