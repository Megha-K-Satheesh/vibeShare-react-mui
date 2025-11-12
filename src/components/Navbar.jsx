import { ArrowDropDownSharp } from "@mui/icons-material";
import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledToolbar = styled(Toolbar)(()=>(
  {
    display:"flex",
    justifyContent:"space-between",
    background: "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf)",
    padding:"10px",
   
      }
))


const UserBox = styled(Box )(()=>({
     alignItems:"center",
     gap:"20px",
     position:"relative"
}))


function Navbar(){
return(<>
    
    <AppBar position="sticky"sx={{backgroundColor:"yellow"}}>
     <StyledToolbar >
       <Typography variant="h4" sx={{fontFamily:"roboto"}}> VibeShare </Typography>
       <UserBox>
         <Avatar   src= "https://mui.com/static/images/avatar/4.jpg"   sx={{ width: 50,     height:50}}
             />
              
         <ArrowDropDownSharp sx={{position:'absolute',bottom:"-19px",
                left:"19px",
                color:"black",
                fontSize:"40px"
              }}/>

        </UserBox>
    
     </StyledToolbar>
  </AppBar>
  
 </>
  )
}
export default Navbar;

