

 import { Avatar, Box, Typography } from "@mui/material";

function AvatarWithNote() {
  
  const avatars = [
    {
      id: 1,
      src: "https://mui.com/static/images/avatar/4.jpg",
      note: "What's on your mind?",
      label: "Vibe note",
    },
    {
      id: 2,
      src: "https://mui.com/static/images/avatar/2.jpg",
      user: "Ethan ",
      thought: "Weekend mode on😎",
    },
    {
      id: 3,
      src: "https://mui.com/static/images/avatar/3.jpg",
      user: "Lian ",
      thought: "Coding all day 💻",
    },
    {
      id: 4,
      src: "https://mui.com/static/images/avatar/1.jpg",
      user: "Lucas",
      thought: "Coffee + chill ☕",
    },
    
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        columnGap: "29px",
        marginBottom: "15px",
         
      }}
    >
      {avatars.map((avatar, index) => (
        <Box
          key={avatar.id}
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
         
          <Box
            sx={{
              position: "absolute",
              top: 6,
              borderRadius: "9px",
              backgroundColor: "#F9F8F6",
              boxShadow: 1,
              zIndex: 1,
              height: "30px",
              width: "70px",
              textAlign: "center",
              padding: "2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontSize: "7px", lineHeight: "9px", px: "2px" }}
            >
          
              {index === 0 ? avatar.note : avatar.thought}
            </Typography>
          </Box>

      
          <Avatar
            src={avatar.src}
            sx={{ width: 70, height: 70, mt: 2 }}
          />

   
          <Typography
            variant="body2"
            sx={{
              marginTop: "6px",
              fontSize: "0.8rem",
              color: "text.secondary",
            }}
          >
           
            {index === 0 ? avatar.label : avatar.user}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default AvatarWithNote;
