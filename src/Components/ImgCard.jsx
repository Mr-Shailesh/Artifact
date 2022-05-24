import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowMasonryImageList(props) {
  return (
    <Box sx={{ width: "100%", textAlign: "center"}}>
      <ImageList variant="masonry" cols={4} gap={8}>
        {props.imageList.map((item, index) => (
          
        <ImageListItem key={index}>
        <img
          src={`${item}?w=248&fit=crop&auto=format`}
          srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={item.email}
          loading="lazy"
        />
        <ImageListItemBar position="below" title={item.email} />
      </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

