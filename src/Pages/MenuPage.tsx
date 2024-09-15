import { Typography,Box } from "@mui/material";
import dishes from "../components/Dishes";
console.log(dishes)
const MenuPage = () => {

   return(<Box>{
      dishes.map((i,id)=>
      
      <Typography key={id}>{i.category}</Typography >
   )
}
   </Box>
   )
};

export default MenuPage;
