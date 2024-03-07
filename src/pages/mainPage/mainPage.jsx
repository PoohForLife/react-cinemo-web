import React from 'react'
import { useEffect } from 'react'
import { Grid } from '@mui/material'
import { Container } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addMovies, addBookmark } from '../../store/reducer'
import MovieCard from '../../components/movieCard/movieCard'
import movieApi from '../../api/movieApi'

function MainPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { movies } = useSelector((state) => state.movies);

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
            <Grid container spacing={3} padding={{xs: 2, md: 2, lg: 4}} sx={{display: "flex", justifyContent: "flex-start" }}>
                {movies && movies.map((movie) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                        <MovieCard movie={movie} />
                    </Grid>  
                ))}
            </Grid>
        </Container>
    )
}

export default MainPage