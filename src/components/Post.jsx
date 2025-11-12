
// Post.js
import { Bookmark, Favorite, FavoriteBorder, MoreVert } from "@mui/icons-material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, ListItemText, Typography } from "@mui/material";
import PostImg from "../assets/sean-oulashin-KMn4VEeEPR8-unsplash (1).jpg";
function Post () {
  return (
    <Card sx={{ margin: 4 }}>
    
      <CardHeader
        avatar={
          <Avatar  src= "https://mui.com/static/images/avatar/4.jpg"     aria-label="user-avatar">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Emma Watson"
        subheader="November 7, 2025"
      />

  
    <CardMedia
        component="img"
        height="350"
        image={PostImg} // 
        alt="Example Image"
      />

     <Box sx={{height:"60px"}}>

      <CardActions disableSpacing>
        
        <IconButton aria-label="like">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
            <ListItemText secondary="300 likes"/>
        </IconButton>

       <IconButton >
          <ChatBubbleOutlineIcon sx={{borderRadius:"100px"}} />
            <ListItemText secondary= " 200"/>
        </IconButton>
        <IconButton>
          <SendIcon/>
        </IconButton>
        <IconButton sx={{marginLeft:{xs:"13%",sm:"45%",md:"60%"}}}>
          <Bookmark/>
        </IconButton>
      </CardActions>
      </Box>

      

       {/* Post Content */}
       <CardActions>
         <CardContent  >
        <Typography  variant="body1" color="text.secondary">
         "Sandy toes, sun-kissed nose, and a mind full of code—finding the perfect balance between debugging life and chasing sunsets.   <br />
          #BeachVibes #WomenInTech #CodeAndCoast
        </Typography>
      </CardContent>

       </CardActions>
      
    </Card>
  );
};

export default Post;
