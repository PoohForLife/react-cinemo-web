import React from 'react'
import { AppBar } from '@mui/material'
import { IconButton } from '@mui/material'
import { Toolbar } from '@mui/material'
import { Box } from '@mui/material'
import { NAV, HEADER } from '../../utils/config-layout'
import { useResponsive } from '../../utils/config-responsive'
import { Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import FavPopover from '../favPopover/favPopover'
import AccountPopover from '../accountPopover/accountPopover'
import ic_side_menu from '../../assets/ic_side_menu.png'

function NavigationBar({ openSideBar }) {

    const theme = useTheme();
    const upLg = useResponsive('up', 'lg');
    const renderContent = (
        <>
            {!upLg && (
                <IconButton onClick={openSideBar} sx={{ mr: 1 }}>
                    <Box component="img" alt="side_menu" src={ic_side_menu} sx={{ width: 24, height: 24 }} />
                </IconButton>
            )}
            
            <Box sx={{ flexGrow: 1 }} />
            <Stack spacing={2} display='flex' direction='row'>
                <FavPopover />
                <AccountPopover />
            </Stack>
        </>
      );

    return (
        <AppBar sx={{
            boxShadow: 'none',
            height: HEADER.H_MOBILE,
            backgroundColor: theme.palette.background.navBarGrey,
            transition: 4,
            // opacity: 0.8,
            zIndex: 1000,
            ...(upLg && {
                width: `calc(100% - ${NAV.WIDTH + 1}px)`,
                height: HEADER.H_DESKTOP,
            }),
        }}>
            <Toolbar sx={{ height: 1, px: {lg: 5} }}>
                {renderContent}
            </Toolbar>
        </AppBar>
    )
}

export default NavigationBar
