import React from 'react'
import { NAV } from '../../utils/config-layout'
import { Drawer, IconButton } from '@mui/material'
import { Box } from '@mui/material'
import { useResponsive } from '../../utils/config-responsive'
import SideBarItem from '../sideBarItem/sideBarItem'
import { Stack } from '@mui/material'
import { Divider } from '@mui/material'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Container } from '@mui/material'
import ic_side_menu_dot from '../../assets/ic_side_menu_dot.png'
import ic_logo from '../../assets/ic_logo.png'

function SideBar({ openSideBar, onCloseSideBar }) {    
    const LIST_MENU = [
        {
            title: 'Home',
            path: '/',
            icon: ic_side_menu_dot,
        },
        {
            title: 'Search',
            path: '/search',
            icon: ic_side_menu_dot,
        },
        {
            title: 'Top Movies',
            path: '/top-movies',
            icon: ic_side_menu_dot,
        }
    ];
    
    const theme = useTheme();
    const upLg = useResponsive('up', 'lg');

    const renderLogo = (
        <Stack direction='row' spacing={2} sx={{ m: 2 }}>
            <IconButton sx={{ width: 50, height: 50, display: 'inline-flex' }}>
                <Box component='img' src={ic_logo} alt='logo' sx={{ width: '100%', height: '100%'}} />
            </IconButton>
            <Typography variant="h4" color={theme.palette.text.primaryRed} fontWeight="800" alignSelf="center">
                Cinemo Web
            </Typography>
        </Stack>
    );

    const renderMenu = (
        <Stack spacing={1} sx={{ px: 2 }}>
            {LIST_MENU.map((menu, index) => (
                <SideBarItem key={index} item={menu} />
            ))}
        </Stack>
    );

    const renderContent = (
        <Box sx={{ height: 1 }}>
            {renderLogo}
            <Divider sx={{ borderStyle: 'none', mb: 2 }} />
            {renderMenu}
        </Box>
    );

    return (
        <Box sx={{ 
            flexShrink: {lg: 0}, 
            width: {lg: NAV.WIDTH}, 
            height: '100%'
        }}>
            {upLg ? 
                <Box sx={{ height: 1, position: 'fixed', width: NAV.WIDTH, borderRight: 'dashed 0.5px', backgroundColor: theme.palette.background.sideBarGrey}}>
                    {renderContent}
                </Box> 
                :  
                <Drawer open={openSideBar} onClose={onCloseSideBar} PaperProps={{ sx: { width: NAV.WIDTH }}}>
                    {renderContent}
                </Drawer>
            }
        </Box>
    )
}

export default SideBar