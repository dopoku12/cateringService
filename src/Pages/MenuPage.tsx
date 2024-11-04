import { Box, Stack, Chip, Avatar, Typography } from "@mui/material";
import dishes from "../components/Dishes";
import { useState } from "react";
console.log(dishes)

const MenuPage = () => {
const [cat,setCat]=useState('')

const menuItems= dishes.map(
   (i,id)=>{
   const category=i.category
   const items=i.items.map((food,index)=>(
                     <Typography key={index} variant="h6">
                        {food.name}
                        <Typography variant="subtitle2" children={food.description}/>
                     </Typography>
                     ))       

      
            return(
               <Box key={id}>
                  <Typography variant="h5" children={category}/> 
                  {items}
               </Box>
               )
         
   }
)


   return(
<Box>
   <Stack direction='row' spacing={1.2}>
      {
         dishes.map((i,id)=><Chip 
         key={id} label={i.category} 
         variant='outlined' size="small" 
         avatar={<Avatar src={i.img}/>} 
         onClick={()=>setCat(i.category)}
      />)
      }
   </Stack>
      
   <Stack direction='column' spacing={4}>
      {menuItems}
   </Stack>
 </Box>
   )
};

export default MenuPage;
