import { Link } from "react-router-dom";
import {
   AppBar,
   Box,
   Toolbar,
   List,
   ListItem,
   ListItemText,
   Typography,
   IconButton,
   Drawer,
   Tooltip,
} from "@mui/material";

import { Link as MuiLink } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";

import { useState } from "react";

const logo = `src/assets/dees_logo.png`;

const Nav = () => {
   const [toogleDrawer, setToogleDrawer] = useState(false);

   const listItems = [
      { name: "Menu", url: "/menu" },
      { name: "Services", url: "/services" },
      {
         name: "About Us",
         url: "/aboutUs",
      },
   ].map((value, i) => (
      <Typography key={i}>
         <List>
            <ListItem>
               <ListItemText>
                  <Link to={value.url}>{value.name}</Link>
               </ListItemText>
            </ListItem>
         </List>
      </Typography>
   ));

   return (
      <Box component="nav">
         <AppBar sx={{ bgcolor: "transparent" }}>
            <Toolbar>
               <IconButton onClick={() => setToogleDrawer(true)}>
                  <MenuIcon />
               </IconButton>
               <Drawer
                  open={toogleDrawer}
                  onClose={() => setToogleDrawer(false)}
               >
                  {listItems}
               </Drawer>
               <Box component="div">
                  <Link to="/">
                     <img width={200} src={logo} alt="logo" />
                  </Link>
               </Box>
               <h1>DEES CATERING SERVICES</h1>
            </Toolbar>

            <Toolbar>
               <Tooltip title="call us!">
                  <MuiLink href="tel:+1 301-675-3848">
                     <PhoneIcon />
                  </MuiLink>
               </Tooltip>
               <IconButton>
                  <MuiLink
                     href="https://www.instagram.com/deescateringservices/"
                     target="_blank"
                  >
                     <InstagramIcon />
                  </MuiLink>
               </IconButton>
               <IconButton>
                  <MuiLink
                     href="https://www.facebook.com/people/Dees-Catering-Services/100063473123483/"
                     target="_blank"
                  >
                     <FacebookIcon />
                  </MuiLink>
               </IconButton>
            </Toolbar>
         </AppBar>
      </Box>
   );
};

export default Nav;
