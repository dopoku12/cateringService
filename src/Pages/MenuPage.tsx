import { Typography,Box, Stack, Chip } from "@mui/material";
import dishes from "../components/Dishes";
console.log(dishes)
console.log(dishes)
const MenuPage = () => {

   return(<Box>
      <Stack direction='row' spacing={2}>
      {
      dishes.map((i,id)=>
      <Chip label={i.category} variant="outlined" key={id}></Chip >
   )
}
</Stack>
      
      {/* <Typography>
         {
            .items.map((items,id)=>(

<Typography component={'h2'}>{items.name}</Typography>
            ))
   
   }
      </Typography>
          */}
   </Box>
   )
};

export default MenuPage;
