import React from 'react'
import { Avatar } from '@mui/material'
import { Box } from '@mui/material'
import { IconButton } from '@mui/material'
import { Popover } from '@mui/material'
import { Typography } from '@mui/material'
import { Divider } from '@mui/material'
import { Badge } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../../store/reducer' 
import { useTheme } from '@mui/material/styles'
import FavCard from '../favCard/favCard'
import ic_bookmark_white from '../../assets/ic_bookmark_white.png'

function FavPopover() {
    const theme = useTheme();
    const dispatch = useDispatch();
    const { bookmarks } = useSelector((state) => state.bookmarks);
    const [open, setOpen] = useState(null);
    const clickOpenFav = (event) => {
        setOpen(event.currentTarget);
    }
    const clickCloseFav = () => {
        setOpen(null);
    }

    useEffect(() => {
        if (bookmarks.length === 0) {
            dispatch(fetchMovies(JSON.parse(sessionStorage.getItem('allMovies'))));
        }
    }, []);

    return (
        <>
            <IconButton onClick={clickOpenFav} sx={{ width: 40, height: 40, backgroundColor: theme.palette.background.transparent }}>
                <Badge badgeContent={bookmarks.length} color="error">
                    <Avatar src="" alt="" sx={{ width: 40, height: 40, border: "2px" }}>
                        <Box src={ic_bookmark_white} component="img" style={{height: 24, width: 24}} alt="bookmark" />
                    </Avatar>
                </Badge>
            </IconButton>

            <Popover 
                open={Boolean(open)}
                anchorEl={open}
                onClose={clickCloseFav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
                    <Box sx={{ my: 1.5, px: 2 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            Favorites
                        </Typography>
                    </Box>
                    <Divider sx={{ borderStyle: 'dashed' }} />
                    <Box sx={{ maxHeight: {xs: '80vh', md: '80vh'}, maxWidth: {xs: '100vw', sm: '80vw', md: '60vw', lg: '50vw'}, overflow: 'auto' }}>
                        {bookmarks && bookmarks.map((bookmark, index) => (
                            <FavCard key={index} movie={bookmark} />
                        ))}
                    </Box> 
            </Popover>
        </>
    )
}

export default FavPopover