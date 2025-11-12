import SearchIcon from "@mui/icons-material/Search";
import { Box, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

const SearchContainer = styled(Box)(( ) => ({
  backgroundColor: "white",
  padding: "8px 10px",
  borderRadius:6,
  display: "flex",
  alignItems: "center",
  border: "1px solid #ccc",
  width: "350px",
 
  height:"15px",
  marginTop:"20px",
  marginBottom:"20px",
  
}));

function SearchBar() {
  return (
    <SearchContainer>
      <SearchIcon sx={{ color: "gray", mr: 1  }} />
      <InputBase placeholder="Search..." fullWidth />
    </SearchContainer>
  );
}

export default SearchBar;

