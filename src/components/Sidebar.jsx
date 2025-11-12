import { Explore, Home, Person2Outlined, Search } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SendIcon from "@mui/icons-material/Send";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { styled } from '@mui/material/styles';

import MenuIcon from "@mui/icons-material/Menu";
function Sidebar(){

  const  StyleListText = styled(ListItemText)({
       marginTop:"21px",
       marginLeft:"0px",
       
        "& .MuiTypography-root": {
    fontSize: "15px",}
  })
  



  return(<>
  <Box 
    bgcolor="background.default" 
    flex={1} 
    p={2} 
    
    sx={{display:{ xs:"none",sm:"block"},height:"100vh",
  }}
  >
     <Box position={"fixed"} >
       <List   sx={{
                 marginLeft:"40px",
                 "& .MuiListItemIcon-root > svg": {
                 fontSize: 28,
                 marginTop:"13px",
                 marginRight:"1px",
                 marginLeft:"15px",
                                            
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


