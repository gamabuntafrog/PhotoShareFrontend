import {useEffect, useState} from "react";
import {postsApi} from "../redux/api/postsApi";
import {IToggleSaveProps, useToggleSaveReturnValue} from "../types/types";
import {collectionsApi} from "../redux/api/collectionsApi";
import {ICollection} from "../types/collection";
import {useAppDispatch} from "../redux/hooks";
import {IResponseNotification, pushResponse} from "../redux/slices/responseNotificationsSlice";


export default function useToggleSaveOfPostCreator({token}: { token: string }) {

    const [savePost] = postsApi.useSavePostMutation()
    const [unsavePost] = postsApi.useUnsavePostMutation()
    const {data: userCollections = [], isLoading, refetch} = collectionsApi.useGetCurrentQuery({token})
    const dispatch = useAppDispatch()

    function useToggleSave({savesCount, postId, skip}: IToggleSaveProps): useToggleSaveReturnValue {

        const findIsSaved = userCollections.some(({posts}) => posts.find((id) => id.toString() === postId))
        const getSavesInfo = userCollections.map(({title, posts, _id}) => {
            const findPost = posts.find((id) => id === postId)

            if (findPost) {
                return {postId: postId, savedInCollectionTitle: title, collectionId: _id, isSaved: true}
            } else {
                return {postId: postId, savedInCollectionTitle: title, collectionId: _id, isSaved: false}
            }
        })

        const [{isSaved, saves, savesInfo}, setSavesState] = useState({
            isSaved: findIsSaved,
            saves: savesCount,
            savesInfo: getSavesInfo
        });

        useEffect(() => {
            setSavesState(prev => {
                return {...prev, savesInfo: getSavesInfo, isSaved: findIsSaved}
            })
        }, [userCollections, skip]);

        const addCollectionInList = (newCollection: ICollection) => {

        }

        const toggleSave = async ({collectionId, isSavedInCollection}: { collectionId: string, isSavedInCollection: boolean }) => {
            try {
                if (isSavedInCollection) {
                    await savePost({postId, token, collectionId}).unwrap()

                    setSavesState(prev => {
                        return {
                            ...prev, isSaved: false, savesInfo: savesInfo.map((el) => {
                                if (el.collectionId === collectionId) {
                                    return {...el, isSaved: false}
                                } else {
                                    return el
                                }
                            })
                        }
                    })
                } else {
                    await unsavePost({postId, token, collectionId}).unwrap()

                    setSavesState(prev => {
                        return {
                            ...prev, isSaved: true, savesInfo: savesInfo.map((el) => {
                                if (el.collectionId === collectionId) {
                                    return {...el, isSaved: true}
                                } else {
                                    return el
                                }
                            })
                        }
                    })
                }
            } catch (e) {
                console.log(e)
                dispatch(pushResponse(e as IResponseNotification))
                // обробити так щоб приходило "Post already saved IN COLLECTION 'TITLE'"
            }
        }

        return [{isSaved, saves, savesInfo}, toggleSave, addCollectionInList] as const
    }

    return [{isLoading, refetch: () => {refetch()}}, useToggleSave] as const
}
