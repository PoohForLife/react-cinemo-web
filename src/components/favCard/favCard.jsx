import React from 'react'
import { Card } from '@mui/material'
import { Typography } from '@mui/material'
import { Stack } from '@mui/material'
import { Box } from '@mui/material'

function FavCard({ movie }) {
    return (
        <Card component={Stack} spacing={3} direction="row" sx={{ px: 2, py: 2, width: { xs: '100vw', sm: '100vw', lg: '50vw' } }}>
            <Box component="img" src={movie.poster_url} alt="movie_poster" sx={{ width: '20%', aspectRatio: '1.5/2' }} />
            <Stack spacing={0.5}>
                <Typography variant="subtitle1">
                    {movie.title_en}
                </Typography>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                    {movie.genre}
                </Typography>
            </Stack>
        </Card>
    )
}

export default FavCard