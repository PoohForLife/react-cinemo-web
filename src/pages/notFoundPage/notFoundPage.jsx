import React from 'react'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { useResponsive } from '../../utils/config-responsive'

import ic_error_404 from '../../assets/ic_error_404.svg'

function NotFoundPage() {
    const upLg = useResponsive('up', 'lg');

    return (
        <Box sx={{
            mx: 'auto',
            maxWidth: '80vw',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            flexDirection: upLg ? 'row' : 'column',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <Box component='img' src={ic_error_404} width='100%' />
            <Box display='flex' flexDirection='column' sx={{ textAlign: 'center' }}>
                <Typography variant='h2'>404</Typography>
                <Typography variant='h4'>Page Not Found</Typography>
                <Typography variant='body1'>Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.</Typography>
                <Button href="/"> Back to Home </Button>
            </Box>
        </Box>
    )
}

export default NotFoundPage