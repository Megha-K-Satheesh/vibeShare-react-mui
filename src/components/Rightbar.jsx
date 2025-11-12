

import {
  Box,
  Typography
} from "@mui/material";
import SearchBar from "../components/SearchBar";
import AvatarWithNote from "./AvatarWithNotes";
import MessageList from "./MessageList";


function Rightbar ()  {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <SearchBar />

        <AvatarWithNote/>
     
        <Typography sx={{fontSize:"20px"}} mb={1}>
          Messages
        </Typography>

       <MessageList/>
      </Box>
    </Box>
  );
};

export default Rightbar;
