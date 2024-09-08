import { Link } from "react-router-dom";
import {
   AppBar,
   Box,
   Button,
   List,
   ListItem,
   ListItemText,
   Stack,
   Typography,
   
} from "@mui/material";
import '@fontsource/pacifico/400.css'

const Nav = () => {
const logo = `src/assets/dees.webp`;
   const listItems = [
      { name: "Home", url: "/" },
      { name: "Menu", url: "/menu" },
      { name: "Services", url: "/services" },
      {name: "About Us",url: "/aboutUs",},
   ].map((value, i) => (
                  <Link key={i} style={{textDecoration:'none',color:'black'}} to={value.url}>
               <Button variant="text">
                  {value.name}
               </Button>
                  </Link>
   ));

   return (
      <Box component="nav" >
         <AppBar sx={{ bgcolor: "transparent", boxShadow:'none',position:'static',}}>
              <Box component="div" sx={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}} >
                  <Link  to="/">
                     <img style={{borderRadius:'50%'}} width={60} src={logo} alt="logo" />
                  </Link>
               <Typography gutterBottom variant='h5' sx={{ fontFamily: 'pacifico,cursive,arial',color:'black',}} >Dees Catering Services</Typography>
               </Box>
                 <Stack spacing={2} direction='row'>
                  {listItems}
            </Stack>
         </AppBar>
      </Box>
   );
};

export default Nav;
