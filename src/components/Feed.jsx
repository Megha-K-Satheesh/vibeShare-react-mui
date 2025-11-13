import { Box, Skeleton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import Post from "./Post";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box flex={12} p={{ xs: 0, md: 2 }} sx={{backgroundColor:"#f7f6f2",
      flex:{xs:12,sm:4}
    }}>
      {loading ? (
        <Stack spacing={2}>
          {/* Skeleton placeholders for posts */}
          <Skeleton variant="text" height={40} />
          <Skeleton variant="text" height={20} width="80%" />
          <Skeleton variant="text" height={20} width="60%" />
          <Skeleton variant="rectangular" height={300} />
          <Skeleton variant="text" height={40} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
        
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </>
      )}
    </Box>
  );
};

export default Feed;
