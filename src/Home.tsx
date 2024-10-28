
import { Box,Stack,Typography, } from "@mui/material";

const mainimg="src/assets/desscEdit.webp" 

const statment=[
   {
      title:'Mission',
      body:' Provide quality full-service catering that meets your every need and exceeds your expectation.'

   },
   {
      title:'Vision',
      body:'Returning Home-Style cooking back into catering by creating nutritious, delicious and classic menus'

   },
   {
      title:'Our Commitment',
      body:"Locally sourced produce and the freshest ingredients mean's food that is exceptional in taste."
   }
   ].map((items,id)=>(
      <Box key={id}>
      <Typography  variant="h5" >
         {items.title}
      </Typography>
         <Typography variant="subtitle2" children={items.body} />
      </Box>
   ))


const Home = () => {
   return <Box>
   <Stack spacing={4}>
      <img src={mainimg} alt="" width="100%"/>
      {statment}
   </Stack>
   </Box>;
};

export default Home;
