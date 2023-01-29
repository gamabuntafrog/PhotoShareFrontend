import useAnchorEl from "../../../hooks/useAnchorEl";
import {Box, Button, Menu, MenuItem, Typography} from "@mui/material";
import React from "react";
import useSx from "../../../hooks/useSx";
import collectionStyles from "../collectionStyles";
import {extendedCollectionsApi} from "../../../redux/api/rootApi";

interface ICollectionContextMenuProps {
    openAddAuthorModal: () => void,
    openDeleteAuthorModal: () => void,
    deleteCurrentUserFromCollectionCallback: () => void,
    collectionId: string,
    isAdmin: boolean,
    isAuthor: boolean
}

export default function CollectionContextMenu(
    {
        openAddAuthorModal,
        openDeleteAuthorModal,
        deleteCurrentUserFromCollectionCallback,
        collectionId,
        isAdmin,
        isAuthor
    }: ICollectionContextMenuProps) {

    const [deleteColl] = extendedCollectionsApi.useDeleteCollectionMutation()
    const deleteCollection = async () => {
        await deleteColl({id: collectionId})
    }

    const {anchorEl, isAnchorEl, handleClick, handleClose} = useAnchorEl()

    const {contextMenu: styles} = useSx(collectionStyles)

    return (
        <Box
            sx={styles.openButton}
        >

            <Button
                id="basic-button"
                aria-controls={isAnchorEl ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isAnchorEl ? 'true' : undefined}
                onClick={handleClick}
                variant='contained'
            >
                Settings
            </Button>
            {isAdmin && (
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={isAnchorEl}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    sx={styles.menuList}
                >
                    <MenuItem
                        sx={styles.menuItem}
                        onClick={() => {
                            deleteCurrentUserFromCollectionCallback()
                            handleClose()
                        }}>
                        <Typography color='error'>Stop being an author</Typography>
                    </MenuItem>
                    <MenuItem
                        sx={styles.menuItem}
                        onClick={() => {
                            openAddAuthorModal()
                            handleClose()
                        }}
                    >
                        Add new author
                    </MenuItem>
                    <MenuItem
                        sx={styles.menuItem}
                        onClick={() => {
                            openDeleteAuthorModal()
                            handleClose()
                        }}>
                        <Typography color='error'>Delete author</Typography>
                    </MenuItem>
                    <MenuItem
                        sx={styles.menuItem}
                        onClick={() => {
                            deleteCollection()
                            handleClose()
                        }}>
                        <Typography color='error'>Delete collection</Typography>
                    </MenuItem>
                </Menu>
            )}
            {(isAuthor && !isAdmin) && (
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={isAnchorEl}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    sx={styles.menuList}
                >
                    <MenuItem
                        sx={styles.menuItem}
                        onClick={() => {
                            deleteCurrentUserFromCollectionCallback()
                            handleClose()
                        }}>
                        <Typography color='error'>Stop being an author</Typography>
                    </MenuItem>
                </Menu>
            )}
        </Box>
    )
}