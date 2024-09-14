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
   Tooltip,
   Link as MuiLink 

} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";


const logo = `src/assets/dees.webp`;

const listItems = [
   { name: "Home", url: "/" },
   { name: "Services", url: "/services" },
   { name: "Menu", url: "/menu" },
   {name: "About",url: "/aboutUs",},
   ].map((value, i) => (
                  <Link  key={i} style={{textDecoration:'none',color:'black'}} to={value.url}>
               <Button size="small" variant="text" color="warning" sx={{color:'ButtonText'}}>
                  <Typography  fontWeight='bold' fontSize='12px'>
                  {value.name}
                  </Typography>
               </Button>
                  </Link>
   ));
   
   const Nav = () => {
   return (
      <Box component="nav" >
             <Stack spacing={2} direction='row' marginBottom={6}>
                  {listItems}
                   <Tooltip title="call us!">
                  <MuiLink href="tel:+1 301-675-3848">
                     <PhoneIcon  color="warning"/>
                  </MuiLink>
               </Tooltip>
            </Stack>
         <AppBar sx={{ bgcolor: "transparent", boxShadow:'none',position:'static',}}>
              <Box component="div" sx={{display:'flex', flexDirection:'column',justifyContent:'space-between', alignItems:'center'}} >
                  <Link  to="/">
                     <img style={{borderRadius:'50%'}} width={60} src={logo} alt="logo" />
                  </Link>
               <Typography  variant='h5' sx={{ fontFamily: 'pacifico,cursive,arial',color:'black', marginBottom:3}} >
                  Dees Catering Services
                  </Typography>
                  <Typography variant="subtitle2" sx={{  marginBottom:4}}>
                     Redefining Food & Event Production
                  </Typography>
               </Box>

         </AppBar>
      </Box>
   );
};

export default Nav;
