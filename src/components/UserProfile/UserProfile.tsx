import {
    Avatar,
    Box,
    Button,
    Container,
    FormGroup, Grid, ImageList, ImageListItem,
    Input,
    InputLabel,
    List,
    ListItem,
    OutlinedInput,
    Typography
} from "@mui/material";
import {NavLink, useParams} from "react-router-dom";
import {usersApi} from "../../redux/api/usersApi";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {IUserSliceAuthorized} from "../../types/userSlice";
import {ChangeEvent, useEffect, useState} from "react";
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import convertImageToString from "../../utils/convertImageToString";
import setPreviewImage from "../../utils/setPreviewImage";
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import {collectionsApi} from "../../redux/api/collectionsApi";
import {skipToken} from "@reduxjs/toolkit/query";
import {IResponseNotification, pushResponse} from "../../redux/slices/responseNotificationsSlice";
import {changeProfileValidationSchema} from "../../utils/validationSchemas";
import {extendedUsersApi} from "../../redux/api/rootApi";


interface IFormData {
    imageList: FileList,
    username: string
}

export default function UserProfile() {
    const {id = ''} = useParams<{ id: string }>()!

    const {token, user: currentUser} = useAppSelector(state => state.userReducer) as IUserSliceAuthorized

    const {data: user, isLoading, error} = extendedUsersApi.useGetUserByIdQuery({id})
    console.log(user)

    const [updateUser] = usersApi.useUpdateCurrentMutation()
    const [subscribe] = usersApi.useSubscribeMutation()
    const [unsubscribe] = usersApi.useUnsubscribeMutation()

    const {
        register,
        setValue,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm<IFormData>({
        resolver: yupResolver(changeProfileValidationSchema),
        mode: 'all'
    });
    const {username: usernameError, imageList: avatarError} = errors
    const isErrors = !!(usernameError || avatarError)
    // console.log(isErrors)
    const theme = useTheme();
    const {palette: {primary: {main}}} = theme

    const isSmallerLaptop = useMediaQuery(theme.breakpoints.down('laptop'));
    const isSmallerTablet = useMediaQuery(theme.breakpoints.down('tablet'));
    const isSmallerMobile = useMediaQuery(theme.breakpoints.down('mobile'));


    const [avatarFile, setAvatarFile] = useState<null | string>(null);
    const [isChangingMode, setIsChangingMode] = useState(false);

    const dispatch = useAppDispatch()

    const saveChanges = async ({username, imageList}: { username: string, imageList: FileList }) => {
        const avatar = imageList.length ? await convertImageToString(imageList) : ''

        try {
            const response = await updateUser({token, body: {username, avatar}}).unwrap()

            dispatch(pushResponse(response as IResponseNotification))

            setIsChangingMode(false)

            document.location.reload()
        } catch (e) {
            dispatch(pushResponse(e as IResponseNotification))

        }
    }

    const onSubmit = handleSubmit(({username, imageList}) => saveChanges({username, imageList}));

    const toggleSubscribe = async (userId: string, token: string, isSubscribed: boolean) => {
        isSubscribed ? unsubscribe({userId, token}) : subscribe({userId, token})
    }

    useEffect(() => setPreviewImage(watch('imageList'), setAvatarFile), [watch('imageList')]);

    if (isLoading) {
        return (
            <Box sx={{
                bgcolor: 'background.default',
                color: 'var(--text-primary)',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography variant='h1'>Loading...</Typography>
            </Box>
        )
    }

    if (!user || error || !currentUser) {
        return (
            <Box sx={{
                bgcolor: 'background.default',
                color: 'var(--text-primary)',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography variant='h1'>404</Typography>
            </Box>
        )
    }


    const {avatar, username, email, createdAt, _id: userId, subscribesCount, subscribersCount, postsCount, collections} = user
    const avatarURL = avatar || ''
    const [month, day, year] = new Date(createdAt).toLocaleDateString('en-US').split('/')
    const formattedCreatedAt = [day, month, year].join('.')

    const {_id: currentUserId} = currentUser

    const isProfileOfCurrentUser = currentUserId === userId
    const isSubscribed = false
    // !!subscribers.find((id) => id === currentUserId)
    const turnOnChangingMode = () => setIsChangingMode(true)
    const turnOffChangingMode = () => {
        setAvatarFile(null)
        setValue('username', username)
        setIsChangingMode(false)
    }

    const calculateRows = (isSmallerLaptop ? isSmallerTablet ? isSmallerMobile ? 1 : 2 : 3 : 5)

    return (
        <Box
            sx={{overflowY: 'auto', height: '92vh'}}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    my: 3
                }}
            >
                <Avatar sx={{width: '200px', height: '200px'}} src={avatarFile || avatarURL}/>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        ml: 2
                    }}
                >
                    {isChangingMode ? <FormGroup
                            sx={{
                                ml: 1
                            }}
                        >
                            <Button
                                type='button'
                                sx={{my: 1}}
                            >
                                <InputLabel sx={{cursor: 'pointer', color: 'inherit', width: '100%'}} htmlFor='avatar'>
                                    Change avatar
                                </InputLabel>
                                <input
                                    {...register('imageList')}
                                    id='avatar'
                                    type='file'
                                    accept="image/*"
                                    hidden
                                />
                            </Button>

                            <InputLabel error={!!usernameError} htmlFor='username'>{usernameError?.message || 'Username'}</InputLabel>
                            <OutlinedInput defaultValue={username} error={!!usernameError} {...register('username')}
                                           id='username' sx={{
                                my: 1
                            }}/>
                            <Button
                                type='button'
                                color='error'
                                sx={{mb: 1}}
                                onClick={turnOffChangingMode}
                            >
                                Cancel Changing
                            </Button>
                            <Button
                                disabled={isErrors}
                                type='submit'
                                onClick={onSubmit}>
                                Save changes
                            </Button>
                        </FormGroup>
                        :
                        <>
                            <Typography variant='h4'>{username}</Typography>
                            <Typography variant='body1'>{email}</Typography>
                            <Box sx={{display: 'flex', margin: 1}}>
                                <Typography sx={{mx: 1}}>{postsCount} posts</Typography>
                                <Typography sx={{mx: 1}}>{subscribesCount} subscribes</Typography>
                                <Typography sx={{mx: 1}}>{subscribersCount} subscribers</Typography>
                            </Box>
                            <Typography>Created at {formattedCreatedAt}</Typography>
                        </>
                    }
                    {isProfileOfCurrentUser && !isChangingMode &&
                        <Button onClick={turnOnChangingMode}>Change profile</Button>}
                    {!isProfileOfCurrentUser &&
                        <Button
                            variant='outlined'
                            sx={{mt: 1}}
                            onClick={() => toggleSubscribe(id, token, isSubscribed)}>
                            {!isSubscribed ? 'Subscribe' : 'Unsubscribe'}
                        </Button>
                    }

                </Box>
            </Box>
            <Box
                sx={{
                    width: '95%',
                    // maxWidth: '1000px',
                    mx: 'auto',
                    mb: 4
                }}
            >
                {collections.length > 0 ?
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: `repeat(${calculateRows}, 1fr)`,
                            gap: 3,

                        }}
                    >
                        {collections.map((collection, i) => {
                            const {_id: collectionId, title, posts} = collection

                            return (
                                <NavLink style={{
                                    position: 'relative',
                                    backgroundColor: theme.palette.primary.main,
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    minHeight: isSmallerTablet ? '150px' : '300px'

                                }} key={collection._id} to={`/collections/${collection._id}`}>
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            width: '100%',
                                            height: '100%',
                                            background: 'rgba(0, 0, 0, 0.2)',
                                            zIndex: '99',
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            position: 'absolute',
                                            top: '0px',
                                            left: '0px',
                                            textAlign: 'center',
                                            zIndex: '100',
                                            padding: 1,

                                        }}
                                        variant='h4'
                                    >
                                        {collection.title}
                                    </Typography>
                                    <ImageList
                                        cols={2}
                                        rowHeight={150}
                                        sx={{
                                            overflow: 'hidden',
                                            margin: 0,
                                            background: 'rgba(0, 0, 0, 1)',
                                        }}
                                    >
                                        {posts.map((post, i) => {
                                            const isLengthSmall = posts.length < 2
                                            const rows = i === 0 ? isLengthSmall ? 2 : 2 : 1
                                            const cols = i === 0 ? isLengthSmall ? 2 : 1 : 1

                                            return (
                                                <ImageListItem
                                                    sx={{bgcolor: 'primary.main', overflow: 'hidden'}}
                                                    rows={rows}
                                                    cols={cols}
                                                    key={i}
                                                >
                                                    <img src={post.image}/>
                                                </ImageListItem>
                                            )
                                        })}
                                    </ImageList>
                                </NavLink>
                            )
                        })}
                    </Box>
                    :
                    <Typography variant='h3' sx={{mt: '150px'}} textAlign='center'>
                        There already no collections yet
                    </Typography>
                }
            </Box>
        </Box>
    )
}

// {posts.map((post) => {
//
//     const {_id: postId, author, title, body, tags, image: {url}} = post
//     const formattedTags = tags.join(' ')
//
//     return (
//         <Box
//             key={postId}
//             sx={{
//                 display: 'inline-block',
//                 width: '100%',
//                 mb: 1,
//                 borderRadius: '8px',
//
//             }}
//         >
//             <Button sx={{color: 'red'}} onClick={() => {
//
//             }}>
//                 Delete
//             </Button>
//             <img
//                 src={url}
//                 style={{
//                     width: '100%',
//                     objectFit: 'cover',
//                     borderRadius: '8px',
//                     backgroundColor: main
//                 }}
//             />
//             <Box
//                 sx={{
//                     px: 0.5
//                 }}
//             >
//                 <Typography variant='h6'>{title}</Typography>
//                 <Typography variant='body1'>{formattedTags}</Typography>
//             </Box>
//         </Box>
//     )
//
// })}