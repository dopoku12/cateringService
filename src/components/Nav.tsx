import { Link } from "react-router-dom";
import {
   AppBar,
   Box,
   Button,
   Stack,
   Typography,
   Tooltip,
   Link as MuiLink 
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

const logo = `src/assets/dees.webp`;
   const listItems = [
      { name: "Home", url: "/" },
      { name: "Menu", url: "/menu" },
      // { name: "Services", url: "/services" },
      {name: "About Us",url: "/aboutUs",},
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
             <Stack spacing={2} direction='row'marginTop={1} marginBottom={3}>
                  {listItems}
                   <Tooltip title="call us!">
                  <MuiLink href="tel:+1 301-675-3848">
                     <PhoneIcon  color="warning"/>
                  </MuiLink>
               </Tooltip>
            </Stack>
         <AppBar sx={{ bgcolor: "transparent", boxShadow:'none',position:'static',}}>
            <Stack spacing={2} component="div" sx={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}} >
                  <Link  to="/">
                     <img style={{borderRadius:'50%'}} width={60} src={logo} alt="logo" />
                  </Link>
                  <Typography variant='h5' sx={{ fontFamily: 'pacifico,cursive,arial',color:'black',}} children="Dees Catering Services" />
                 <Typography variant="subtitle2" children="Redefining Food & Event Production"/>
                  <Stack spacing={2} direction='row' children= {listItems}/>
            </Stack>
         </AppBar>
      </Box>
   );
};

export default Nav
