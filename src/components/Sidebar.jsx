import { Explore, Home, Person2Outlined, Search } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SendIcon from "@mui/icons-material/Send";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { styled } from '@mui/material/styles';

import MenuIcon from "@mui/icons-material/Menu";
function Sidebar(){

  const  StyleListText = styled(ListItemText)(({theme})=>({
       marginTop:"21px",
       marginLeft:"-15px",
       
       
        "& .MuiTypography-root": {

    fontSize: "15px",},
    [theme.breakpoints.down("sm")]:{
      display:"none"
    }
  
  }))
  



  return(<>
  <Box 
    bgcolor="background.default" 
    position={"relative"}
   
    
    sx={{display:{ sm:"block"},height:"100vh",
  
    flex:{xs:0.6,sm:1},
    p:{xs:1,sm:2}
  }}
  >
     <Box position="fixed" sm={{ background: "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf)",}}>
       <List   sx={{
                 marginLeft:{xs:"0",sm:"40px"},
                 position:"absolute",
                 left:{xs:"-10px",sm:"-26px"}
                 ,
                 top:"-10px",
                  
                  width:{xs:"52px"},
                  height:{xs:"100vh"},
                    background:{xs:"linear-gradient(45deg, #962fbf, #d62976, #fa7e1e, #feda75)",sm:"white"},
                 "& .MuiListItemIcon-root > svg": {
                 fontSize: {xs:26,sm:28},
                 marginTop:"13px",
                
                 
                                            
                  },
             }}>
             <ListItem disablePadding >
               <ListItemButton>
                 <ListItemIcon>
                    <Home/>
                 </ListItemIcon>
                 <StyleListText primary="Home" sx={{ color: 'text.primary'  }}/>
               </ListItemButton>
             </ListItem>
             <ListItem disablePadding >
               <ListItemButton>
                 <ListItemIcon>
                    <Search/>
                 </ListItemIcon>
                 < StyleListText primary="Search" sx={{ color: 'text.primary'   }}/>
               </ListItemButton>
             </ListItem>
             <ListItem disablePadding>
               <ListItemButton>
                 <ListItemIcon>
                    <Explore/>
                 </ListItemIcon>
                 < StyleListText primary="Explore" sx={{ color: 'text.primary' }}/>
               </ListItemButton>
             </ListItem>
             <ListItem disablePadding>
               <ListItemButton>
                 <ListItemIcon>
                    <VideoLibraryIcon />
                 </ListItemIcon>
                 < StyleListText
                  primary="Vibes" sx={{ color: 'text.primary'}}/>
               </ListItemButton>
             </ListItem>
             <ListItem disablePadding>
               <ListItemButton>
                 <ListItemIcon>
                   <SendIcon/>
                 </ListItemIcon>
                 < StyleListText primary="Messages" sx={{ color: 'text.primary' }}/>
               </ListItemButton>
             </ListItem>
             <ListItem disablePadding>
               <ListItemButton>
                 <ListItemIcon>
                  <FavoriteIcon />
                    
                 </ListItemIcon>
                 < StyleListText primary="Notification" sx={{ color: 'text.primary' }}/>
               </ListItemButton>
             </ListItem>

             <ListItem disablePadding>
               <ListItemButton>
                 <ListItemIcon>
                    <AddIcon/>
                 </ListItemIcon>
                 <StyleListText    primary="Create" sx={{ color: 'text.primary' }}/>
               </ListItemButton>
             </ListItem>

             <ListItem disablePadding>
               <ListItemButton>
                 <ListItemIcon>
                    <Person2Outlined/>
                 </ListItemIcon>
            < StyleListText primary="Profile" sx={{ color: 'text.primary'  }}/>
               </ListItemButton>
             </ListItem>
              <ListItem disablePadding>
               <ListItemButton>
                 <ListItemIcon>
                    <MenuIcon/>
                 </ListItemIcon>
                  <StyleListText primary="More" sx={{ color: 'text.primary' }}/>
               </ListItemButton>
             </ListItem>
             
          </List>
     </Box>
</Box>

  </>)
}

export default Sidebar;


