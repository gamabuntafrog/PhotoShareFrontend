import {Box, ImageList, ImageListItem, styled, Typography} from "@mui/material";
import {ICollectionForIUser} from "../../../types/user";
import useSx from "../../../hooks/useSx";
import userProfileStyles, {StyledCollectionItem} from "../userProfileStyles";
import useShortTranslation from "../../../hooks/useShortTranslation";

interface ICollectionItemProps {
    collections: ICollectionForIUser[]
}


export default function Collections({collections}: ICollectionItemProps) {

    const {collections: styles} = useSx(userProfileStyles)
    const t = useShortTranslation({componentNameKey: 'UserProfile.Collections'})

    if (collections.length === 0) {
        return (
            <Box
                sx={styles.container}
            >
                <Typography variant='h5' sx={{mt: 8}} textAlign='center'>
                    {t('noCollectionsMessage')}
                </Typography>
            </Box>
        )
    }

    return (
        <Box
            sx={styles.container}
        >
            <Box
                sx={styles.wrapper}
            >
                {collections.map(({_id: collectionId, title, posts}) => {
                    return (
                        <StyledCollectionItem key={collectionId} to={`/collections/${collectionId}`}>
                            <Box
                                sx={styles.itemWrapper}
                            />
                            <Typography
                                sx={styles.title}
                                variant='h4'
                            >
                                {title}
                            </Typography>
                            <ImageList
                                cols={2}
                                sx={styles.postsList}
                            >
                                {posts.map((post, i) => {
                                    const isPostsAmountSmall = posts.length < 2
                                    const rows = i === 0 ? isPostsAmountSmall ? 2 : 2 : 1
                                    const cols = i === 0 ? isPostsAmountSmall ? 2 : 1 : 1

                                    return (
                                        <ImageListItem
                                            sx={styles.postItem}
                                            rows={rows}
                                            cols={cols}
                                            key={i}
                                        >
                                            <img src={post.image}/>
                                        </ImageListItem>
                                    )
                                })}
                            </ImageList>
                        </StyledCollectionItem>
                    )
                })}
            </Box>
        </Box>
    )
}