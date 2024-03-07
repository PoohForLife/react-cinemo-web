import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useResponsive } from '../../utils/config-responsive'
import { useDispatch } from 'react-redux'
import { toggleBookmark } from '../../store/reducer'

import ic_bookmark_active from '../../assets/ic_bookmark_active.png'
import ic_bookmark_inactive from '../../assets/ic_bookmark_inactive.png'

function MovieDetailPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { movies } = useSelector(state => state.movies);
    const [movie, setMovie] = useState(null);
    const upMd = useResponsive('up', 'sm');

    useEffect(() => {
        if (movies.length === 0) {
            const movie = JSON.parse(sessionStorage.getItem('allMovies')).find(movie => movie.id === parseInt(id));
            setMovie(movie);
        } else {
            const movie = movies.find(movie => movie.id === parseInt(id));
            setMovie(movie);
        }
    },[]);

    const clickBookmark = () => {
        dispatch(toggleBookmark(movie));
        setMovie(movie => ({ ...movie, isBookmarked: !movie.isBookmarked }));
    };

    const renderBookmark = (
        <Box 
            onClick={clickBookmark}
            component="img"
            alt="bookmark"
            src={movie?.isBookmarked ? ic_bookmark_active : ic_bookmark_inactive}
            sx={{
            zIndex: 9,
            top: 8,
            right: 8,
            width: 32,
            height: 32,
        }} />
    );

    return (
        <Container>
            {movie && (
                <Box sx={{ display: 'flex', flexDirection: upMd ? 'row' : 'column', justifyContent: 'center', m: 2 }}>
                    <Stack direction='column'>
                        <Stack direction='row' sx={{ mb: 2 }}>
                            <Box component='img' src={movie.poster_url} alt='movie_poster' draggable='false' sx={{
                                width: upMd ? '20%' : '40%',
                                height: '100%',
                            }} />
                            <Box sx={{ flexGrow: 1 }} />
                            {renderBookmark}
                        </Stack>
                        <Typography variant='h5'>
                            {movie.title_en}
                        </Typography>
                        <Typography variant='caption'>
                            {movie.genre}
                        </Typography>
                        <Typography variant='subtitle2'>
                            Descriptions:
                        </Typography>
                        <Typography variant='caption'>
                            {movie.synopsis_en}
                        </Typography>
                        <Typography variant='subtitle2' display='flex' justifyContent='flex-end'>
                            Release Date: {movie.release_date}
                        </Typography>
                    </Stack>
                </Box>
                
            )}
        </Container>
    )
}

export default MovieDetailPage