import  React from "react";
// import "../Secondscreen/settings.css";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";
import { Button } from "@mui/material";
// import rooka from "../images/rooka.png";

import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';


const drawerWidth = 250;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "83ch",
    },
  },
}));
const listArray = [
  { label:"Book An Appointment", icon:<EventAvailableIcon/>, link:"/dashboard/Signinform"},
  { label: "User profile", icon: <AccountCircleIcon />, link: "/dashboard/userprofile" },
  { label: "Payment history", icon: <MonetizationOnIcon />,link: "/dashboard/paymenthistory" },
  { label: "Contact us", icon: <ContactPhoneIcon />,link: "/contactus" },
];
const Dashboard = () => {
  const navigate = useNavigate();
  const activeClass=(e,link)=>{
    console.log("link",link)
    e.preventDefault()
    navigate(link)
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: 224,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
     <Box sx={{ overflow: "auto" }}>
          <List className="sidenavbar">
            {listArray.map((list, index) => (
              <ListItem key={index} disablePadding onClick={(e) =>  activeClass(e,list.link)}>
                <div className= {window.location.pathname == list.link ? "listitem activeItem" :"listitem"}>
                  <div className="listitemicon">{list.icon}</div>
                  <div> {list.label} </div>
                </div>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      
    </Box>
  );
};
export default Dashboard;
