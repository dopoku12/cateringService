import { Box, Stack, Chip, Avatar, Typography, List, ListItemText, Divider } from "@mui/material";
import dishes from "../components/Dishes";
import { useState } from "react";
console.log(dishes)

const MenuPage = () => {
const [cat,setCat]=useState('')

const menuItems= dishes.map(
   (i,id)=>{
   const category=i.category
   const items=i.items.map((food,index)=>(
               <List key={index}>
                  <ListItemText primary={food.name}/>
                  <ListItemText secondary={<Typography variant="subtitle2">{food.description}</Typography>}/>
                  <Divider/>
               </List>
                     ))       

      
            return(
               <Stack key={id}>
                  <Typography variant="h6" children={category}/> 
                  {items}
               </Stack>
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
