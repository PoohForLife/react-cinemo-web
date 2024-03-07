import React, { useState } from 'react'
import { Container, Card, CardActions, CardMedia, CardContent, Button, Box, Typography, Tabs, Tab, Paper, ImageList } from '@mui/material'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Main() {
    const modelList = ["model 1", "model 2", "model 3"];
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const isLgScreen = useMediaQuery(theme.breakpoints.up('md'));

    const handleChange = (event, newValue) => {
      // event.type can be equal to focus with selectionFollowsFocus.
      if (
        event.type !== 'click' ||
        (event.type === 'click' && samePageLinkNavigation(event))
      ) {
        setValue(newValue);
      }
    };
  
    return (
        <Box sx={{height: "max-content", minHeight: "100vh", px: "16px", pb: "16px"}}>
            <Typography variant='h1' sx={{ textAlign: "center"}}>Pooh</Typography>
            <Box sx={{ display: "flex", flexDirection: {xs: "column", md: "row"}, justifyContent: "space-evenly", pt: 4, gap: 4}}>
                {modelList.map((item, index) => (
                    <Card key={index} sx={{width: {xs: 1, md: 320}}}>
                        <CardMedia sx={{ height: 140, backgroundColor: "backgroundColor.secondary" }} image="/static/images/cards/contemplative-reptile.jpg" title="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="body" component="div">{item}</Typography>
                            <Typography variant="body2" color="text.secondary">{item} are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>

            <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" role="navigation">
                <LinkTab label="Page One" href="/drafts" />
                <LinkTab label="Page Two" href="/trash" />
                <LinkTab label="Page Three" href="/spam" />
            </Tabs>

            <Box>   

                <ImageList sx={{height: 500, p:"16px"}} cols={isLgScreen ? 4 : 2} gap={16}>
                    {Array.from(Array(12)).map((_, index) => (
                        <Paper elevation={3} key={index} sx={{textAlign:"center", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>TEST {index}</Paper>
                    ))}
                </ImageList>
            </Box>

        </Box>
    )
}

export default Main

function samePageLinkNavigation(event) {
    if (
      event.defaultPrevented ||
      event.button !== 0 || // ignore everything but left-click
      event.metaKey ||
      event.ctrlKey ||
      event.altKey ||
      event.shiftKey
    ) {
      return false;
    }
    return true;
  }

function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          // Routing libraries handle this, you can remove the onClick handle when using them.
          if (samePageLinkNavigation(event)) {
            event.preventDefault();
          }
        }}
        aria-current={props.selected && 'page'}
        {...props}
      />
    );
  }

  LinkTab.propTypes = {
    selected: PropTypes.bool,
  };
