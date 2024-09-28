
import { Box, Typography,Paper ,Card, Stack} from "@mui/material";
import { Link } from "react-router-dom";

const homeImg='src/assets/imgs/desscEdit.webp'
const Home = () => {
   return (<>
   
<Stack alignItems={'center'} spacing={3} >
   <img style={{borderBlock:'20%'}} src={homeImg}  width='60%' height='50%' alt="" />
   <Card>
   </Card>

<Box>
<Typography variant="h5" sx={{fontWeight:'bold'}}>
   Mission
</Typography>
  <Typography variant='subtitle2'>
     Provide quality full-service catering that meets your every need and exceeds your expectation.
   </Typography>
</Box>

<Box>
<Typography variant="h5" sx={{fontWeight:'bold'}}>
   Vision
</Typography>
  <Typography variant='subtitle2'>
    Returning Home-Style cooking back into catering by creating nutritious, delicious and classic menus
   </Typography>
</Box>

<Box>
<Typography variant="h5" sx={{fontWeight:'bold'}}>
   Our Commitment
   </Typography>   
   <Typography variant='subtitle2'>
    Locally sourced produce and the freshest ingredients means food
that is exceptional in taste.
   </Typography>
</Box>




</Stack>
</>
)};

export default Home;
