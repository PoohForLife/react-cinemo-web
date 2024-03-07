import React from 'react'
import { ListItemButton } from '@mui/material'
import { Box } from '@mui/material'
import { usePathname } from '../../utils/config-pathname'
import { useTheme } from '@mui/material/styles'

function SideBarItem({ item }) {
    const theme = useTheme();
    const pathname = usePathname();
    const active = item.path === pathname

    return (
      <ListItemButton
        href={item.path}
        sx={{
          minHeight: 44,
          borderRadius: 0.75,
          typography: 'subtitle2',
          color: theme.palette.text.secondary,
          ...(active && {
            color: theme.palette.text.sideBarActive,
            backgroundColor: theme.palette.background.sideBarActive,
            fontWeight: 'fontWeightSemiBold',
          }),
          ':hover': {
            color: theme.palette.text.sideBarHover,
            backgroundColor: theme.palette.background.sideBarHover,
          },
        }}
      >
        <Box component="img" src={item.icon} sx={{ width: 24, height: 24, mr: 2 }} />
        <Box component="span">{item.title} </Box>
      </ListItemButton>
    );
}

export default SideBarItem