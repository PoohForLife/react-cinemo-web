import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import { useResponsive } from '../../utils/config-responsive'
import { HEADER, NAV, SPACING } from '../../utils/config-layout'
import NavigationBar from '../navigationBar/navigationBar'
import SideBar from '../sideBar/sideBar'


function MenuBar({ children }) {

    const lgUp = useResponsive('up', 'lg');
    const [openSideBar, setOpenSideBar] = useState(false);
    return (
        <>
            <NavigationBar openSideBar={() => setOpenSideBar(true)} />
            <Box  
                sx={{
                    minHeight: 1,
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
            }}>
                <SideBar openSideBar={openSideBar} onCloseSideBar={() => setOpenSideBar(false)} />
                <Box 
                    component='main' 
                    sx={{ 
                        minHeight: 1, 
                        display: 'flex', 
                        flexDirection: { xs: 'column', lg: 'row' },
                        py: `${HEADER.H_MOBILE + SPACING}px`,
                        ...(lgUp && {
                            px: 2,
                            py: `${HEADER.H_DESKTOP + SPACING}px`,
                            width: `calc(100% - ${NAV.WIDTH}px)`,
                        }),
                    }}>
                    {children}
                </Box>
            </Box>
        </>
    )
}

export default MenuBar