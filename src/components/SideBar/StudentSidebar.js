import { Box } from "@mui/system";
import { useContext } from "react";
import {
  List,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Avatar,
} from "@mui/material";
import {Link } from "react-router-dom";
import profileImage from "../../images/avatar_default.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import DataContext from "../../context/DataContext";

const menuItems = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    path: "/student",
  },


];
const SideBar = () => {
  const ctx = useContext(DataContext);
  return (
    <Box>
      {/* Logo */}
      <Box sx={{ padding: "24px 20px" }}>
        <IconButton>
          <LogoDevIcon />
        </IconButton>
      </Box>
      {/* Name and profile avatar */}
      <Box
        sx={{
          mb: "40px",
          ml: "20px",
          mr: "20px",
          display: "flex",
          alignItems: "center",
          padding: "16px 20px",
          borderRadius: "10px",
          backgroundColor: "rgba(145, 158, 171, 0.25)",
          width: "80%",
        }}
      >
        <Avatar
          alt='User'
          src={profileImage}
          sx={{ width: "40px", height: "40px" }}
        />
        <Typography
          variant='h6'
          sx={{ ml: "16px", fontSize: "0.875rem", fontWeight: "600" }}
        >
        {ctx.manage.userdetails.username}
        </Typography>
      </Box>

      {/* Navigation items */}
      <List>
        {menuItems.map((item) => {
          return (
            <ListItem key={item.name} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <Link to={item.path} style={{ textDecoration: "none" }}>
                  <ListItemText primary={item.name} />
                </Link>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Upgrade */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
   
      </Box>
    </Box>
  );
};

export default SideBar;

//
