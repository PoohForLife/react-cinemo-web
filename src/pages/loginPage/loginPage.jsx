import React from 'react'
import { useState } from 'react'
import { IconButton } from '@mui/material'
import { Stack } from '@mui/material'
import { TextField } from '@mui/material'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { Card } from '@mui/material'
import { Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import ic_password_hide from '../../assets/ic_password_hide.png'
import ic_password_show from '../../assets/ic_password_show.png'
import bg_login from '../../assets/bg_login.jpg'

function LoginPage() {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const clickLogin = () => {
        setUserSession();
        navigate('/');
    };

    function setUserSession() {
        const bookmark = JSON.parse(sessionStorage.getItem('user'))?.bookmark || []
        sessionStorage.setItem('user', JSON.stringify({
            username: username,
            password: password,
            bookmark: bookmark
        }));
    }

    const renderInputView = (
        <Stack spacing={2}>
            <TextField name='username' label='Username' variant='outlined' onChange={e => setUsername(e.target.value)} fullWidth />
            <TextField 
                name='password' 
                label='Password' 
                variant='outlined' 
                type={showPassword ? 'text' : 'password'} 
                fullWidth 
                onChange={e => setPassword(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                            <Box component="img" alt="password" src={showPassword ? ic_password_show : ic_password_hide} sx={{ width: 24, height: 24 }} />
                        </IconButton>
                    )
                }}/>
        </Stack>
    );

    return (
        <Box 
        display='flex' 
        justifyContent='center' 
        alignItems='center' 
        sx={{ 
            height: '100vh', 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg_login})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <Stack alignItems='center' justifyContent='center' sx={{ height: 1 }}>
                <Card sx={{ p: 2, width: 1, maxWidth: 420}}>
                    <Typography variant='h5'>Login</Typography>
                    <Divider sx={{ my: 3 }}></Divider>
                    {renderInputView}
                    <Button onClick={clickLogin} variant='contained' color='primary' sx={{ marginTop: 2 }} fullWidth>Login</Button>
                </Card>
            </Stack>
        </Box>
    )
}

export default LoginPage