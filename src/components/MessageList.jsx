
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";

function MessageList() {
  const messages = [
    {
      name: "Liam_Miller",
      avatar: "https://material-ui.com/static/images/avatar/3.jpg",
      status: "Active 1m ago",
    },
    {
      name: "Ethan_Davis",
      avatar: "https://material-ui.com/static/images/avatar/2.jpg",
      status: "Active 5m ago",
    },
    
    {
      name: "Mason_Clark",
      avatar: "https://material-ui.com/static/images/avatar/5.jpg",
      status: "Active 5m ago",
    },
    {
      name: "Noah_Bennett",
      avatar: "https://material-ui.com/static/images/avatar/6.jpg",
      status: "Active 7m ago",
    },
   
  ];

  return (
    <List sx={{ width: "100%",maxWidth: 360, bgcolor: "background.paper" }}>
      {messages.map((msg, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar src={msg.avatar} sx={{ width: 55, height: 55 }} />
          </ListItemAvatar>

          <ListItemText
            primary={
              <Typography sx={{ fontWeight: "bold" ,marginLeft:"8px" ,fontSizeAdjust:"0.5"}}>
                {msg.name}
              </Typography>
            }
            secondary={
              <Typography variant="body2" color="text.secondary" sx={{marginLeft:"8px"}}>
                {msg.status}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}

export default MessageList;


