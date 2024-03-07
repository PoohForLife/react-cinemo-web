import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useDispatch } from 'react-redux'
import { toggleBookmark } from '../../store/reducer'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import ic_bookmark_active from '../../assets/ic_bookmark_active.png'
import ic_bookmark_inactive from '../../assets/ic_bookmark_inactive.png'

function MovieCard({ movie }) {
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const clickBookmark = (e) => {
        e.stopPropagation();
        dispatch(toggleBookmark(movie));
    };

    const clickMovie = () => {
        navigate('/movie/' + movie.id);
    }

    const renderBookmark = (
        <Box 
            onClick={clickBookmark}
            component="img"
            alt="bookmark"
            src={movie.isBookmarked ? ic_bookmark_active : ic_bookmark_inactive}
            sx={{
            zIndex: 9,
            top: 8,
            right: 8,
            position: 'absolute',
            width: 32,
            height: 32,
        }} />
    );

    const renderImg = (
        <Box
            component="img"
            alt="movie_poster"
            src={movie.poster_url}
            draggable="false"
            sx={{            
                top: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                ':hover': {
                    filter: 'blur(0.5px)',
                }
            }}/>
    );

    return (
        <Card>
            <Box 
                onClick={clickMovie}
                sx={{ 
                    pt: '140%',
                    position: 'relative',
                    transition: '0.5s',
                    ':hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 0 10px rgba(0,0,0,0.5)'
            }}}>
                {renderBookmark}
                {renderImg}
                <Stack 
                    sx={{ 
                        p: 1, 
                        position: 'absolute', 
                        height: '20%', 
                        width: '100%', 
                        bottom: 1, 
                        background: theme.palette.background.movieCard
                }}>
                    <Typography variant="overline" fontWeight={600} sx={{ m: 1, mt: 0 }}>
                        {movie.title_en}
                    </Typography>
                </Stack>
            </Box>
        </Card>
    );
}

export default MovieCard