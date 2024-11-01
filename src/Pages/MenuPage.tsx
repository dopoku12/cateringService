import { Box, Stack, Chip, Avatar } from "@mui/material";
import dishes from "../components/Dishes";
console.log(dishes)
console.log(dishes)
const MenuPage = () => {

   return(<Box>
      <Stack direction='row' spacing={2}>
      {
      dishes.map((i,id)=>(<Chip label={i.category} variant='outlined' size="medium" avatar={<Avatar src={i.img}/>} key={id}/>))
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
