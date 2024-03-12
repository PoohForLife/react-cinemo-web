import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Box, Grid, InputAdornment, TextField } from '@mui/material'
import { Container } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addMovies, addBookmark } from '../../store/reducer'
import MovieCard from '../../components/movieCard/movieCard'
import movieApi from '../../api/movieApi'
import ic_search from '../../assets/ic_search.png'

function MainPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { movies } = useSelector((state) => state.movies);
    const [search, setSearch] = useState('');
    const filteredMovies = movies.filter(movie => 
        movie.title_en.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await movieApi.get();
            setTimeout(() => {
                dispatch(addMovies(response.data.movies));
                setUserSession();
            }, 500);
        } 

        const setUserSession = () => {
            const user = JSON.parse(sessionStorage.getItem('user'));
            if (user) {
                if (user.bookmark && user.bookmark.length !== 0) {
                    user.bookmark.forEach((movie) => {
                        dispatch(addBookmark(movie));
                    });
                }
            } else {
                navigate('/login');
            }
        }
        
        fetchMovies();
    }, []);

    return (
        <Container>
            <Box sx={{ px: {xs: 2, md: 2, lg: 4}, pt: 2 }} >
                <TextField label='Search' fullWidth onChange={(e) => setSearch(e.target.value)} InputProps={{
                    startAdornment: <InputAdornment position='start'><Box component='img' src={ic_search} alt='search' sx={{ width: 24, height: 24 }} /></InputAdornment>
                }} />
            </Box>
            <Grid container spacing={3} padding={{xs: 2, md: 2, lg: 4}} sx={{display: "flex", justifyContent: "flex-start" }}>
                { filteredMovies && filteredMovies.map((movie) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                        <MovieCard movie={movie} />
                    </Grid> 
                ))}
            </Grid>
        </Container>
    )
}

export default MainPage