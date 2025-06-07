import { Box } from "@mui/system";
import React, { useContext } from "react";
import {
  List,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  IconButton,
  styled,
  alpha,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import profileImage from "../../images/avatar_default.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import DataContext from "../../context/DataContext";

const menuItems = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
  },
  {
    name: "Students",
    icon: <AccountBoxIcon />,
    path: "/users",
  },
  {
    name: "Faculty",
    icon: <AccountBoxIcon />,
    path: "/faculty",
  },
  {
    name: "CareerServices",
    icon: <AccountBoxIcon />,
    path: "/career",
  },
  {
    name: "UserRegister",
    icon: <AccountBoxIcon />,
    path: "/registerUser",
  },
];

const StyledListItemButton = styled(ListItemButton)(({ theme, active }) => ({
  margin: "4px 8px",
  borderRadius: "12px",
  backgroundColor:
    active === 1
      ? alpha(theme.palette.primary.main, 0.08)
      : "transparent",
  color: active === 1 ? theme.palette.primary.main : theme.palette.text.primary,
  "&:hover": {
    backgroundColor:
      active === 1
        ? alpha(theme.palette.primary.main, 0.12)
        : alpha(theme.palette.primary.main, 0.04),
  },
  "& .MuiListItemIcon-root": {
    color: active === 1 ? theme.palette.primary.main : theme.palette.text.secondary,
  },
}));

const StyledLogo = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 2.5),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  "& .MuiIconButton-root": {
    color: theme.palette.primary.main,
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(0, 2, 4),
  padding: theme.spacing(2),
  borderRadius: "16px",
  backgroundColor: alpha(theme.palette.primary.main, 0.04),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const SideBar = () => {
  const ctx = useContext(DataContext);
  const location = useLocation();

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <StyledLogo>
        <IconButton size='large'>
          <LogoDevIcon sx={{ fontSize: 32 }} />
        </IconButton>
        <Typography variant='h6' color='primary.main' fontWeight={700}>
          HeroVired
        </Typography>
      </StyledLogo>

      <UserBox>
        <Avatar
          src={profileImage}
          sx={{
            width: 40,
            height: 40,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        />
        <Box>
          <Typography variant='subtitle1' fontWeight={600} noWrap>
            {ctx.manage.userdetails.username}
          </Typography>
          <Typography variant='caption' color='text.secondary' noWrap>
            Administrator
          </Typography>
        </Box>
      </UserBox>

      <List sx={{ px: 2, flexGrow: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ mb: 1 }}>
            <StyledListItemButton
              active={location.pathname === item.path ? 1 : 0}
              component={Link}
              to={item.path}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  fontSize: "0.875rem",
                  fontWeight: location.pathname === item.path ? 600 : 400,
                }}
              />
            </StyledListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;

