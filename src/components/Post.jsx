
// Post.js
import { Bookmark, Favorite, FavoriteBorder, MoreVert } from "@mui/icons-material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, ListItemText, styled, Typography } from "@mui/material";
import PostImg from "../assets/sean-oulashin-KMn4VEeEPR8-unsplash (1).jpg";
function Post () {

  const StyledIcon =styled(IconButton)(({theme})=>({
        "& svg":{
          fontSize:"25px",
        
        },
      
        
       [theme.breakpoints.down("sm")]:{
        "& svg":{
          fontSize:"14px",
          marginTop:"-20px",
          
        }
          
       }
  }))

  return (
    <Card sx={{ margin: {xs:2,sm:4} }}>
    
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
        
        
        image={PostImg} 
        alt="Example Image"
        sx={{height:{sm:380,xm:300}}}
      />

     <Box sx={{ height:{xs:"20px",sm:"60px"}}}>

      <CardActions sx={{marginLeft:"-15px"}}>
        
        <StyledIcon aria-label="like">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
           <ListItemText   secondary="300 likes"
  sx={(theme) => ({
    margin: { xs: "-18px 0px 0px -8px",sm:"7px 0px 0px -8px" },
    "& .MuiTypography-root": {
      fontSize: "7px", // default for xs
      [theme.breakpoints.up("sm")]: {
        fontSize: "12px", // for small and above
      },
    },
  })} />
        </StyledIcon>

       <StyledIcon >
          <ChatBubbleOutlineIcon  sx={{borderRadius:"100px"}} />
            <ListItemText secondary="200" sx={(theme) => ({
    margin: { xs: "-18px 0px 0px 2px",sm:"7px 0px 0px 0px" },
    "& .MuiTypography-root": {
      fontSize: "7px", 
      [theme.breakpoints.up("sm")]: {
        fontSize: "12px", 
      },
    },
  })} 
            />
        </StyledIcon>
        <StyledIcon>
          <SendIcon/>
        </StyledIcon>
          <StyledIcon >
          <Bookmark sx={{marginLeft:{xs:"150px",sm:"485px"}}}/>
        </StyledIcon>
      </CardActions>
      </Box>

      

       {/* Post Content */}
       <CardActions>
         <CardContent  >
        <Typography  color="text.secondary" sx={{ fontSize:{xs:"13px",sm:"18px"}}}>
         "Sandy toes, sun-kissed nose, and a mind full of code—finding the perfect balance between debugging life and chasing sunsets.   <br />
          #BeachVibes #WomenInTech #CodeAndCoast
        </Typography>
      </CardContent>

       </CardActions>
      
    </Card>
  );
};

export default Post;
