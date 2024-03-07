import React from 'react'
import { Avatar } from '@mui/material'
import { Box } from '@mui/material'
import { IconButton } from '@mui/material'
import { Popover } from '@mui/material'
import { Typography } from '@mui/material'
import { Divider } from '@mui/material'
import { useState } from 'react'
import { MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearData } from '../../store/reducer'
import { useTheme } from '@mui/material/styles'

function AccountPopover() {

    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = useState(null);
    const user = JSON.parse(sessionStorage.getItem('user'));

    const clickOpenAccount = (event) => {
        setOpen(event.currentTarget);
    }
    const clickCloseAccount = () => {
        setOpen(null);
    }
    const clickLogout = () => {
        clickCloseAccount();
        dispatch(clearData());
        navigate('/login');
    }
    
    return (
        <>
            <IconButton onClick={clickOpenAccount} sx={{ width: 40, height: 40, backgroundColor: theme.palette.background.transparent }}>
                <Avatar str="" alt="account" sx={{ width: 40, height: 40, border: "2px" }} />
            </IconButton>

            <Popover 
                open={Boolean(open)}
                anchorEl={open}
                onClose={clickCloseAccount}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
                    <Box sx={{ my: 1.5, px: 2, minWidth: {xs: '20vw', md: '10vw'} }}>
                        <Typography variant="subtitle1" noWrap>
                            {user && user.username}
                        </Typography>
                    </Box>
                    <Divider sx={{ borderStyle: 'dashed', m: 0 }} />
                    <MenuItem disableRipple disableTouchRipple onClick={clickLogout} sx={{ typography: 'body2', color: theme.palette.text.primaryRed, py: 1.5 }}>
                        Logout
                    </MenuItem>
            </Popover>
        </>
    )
}

export default AccountPopover