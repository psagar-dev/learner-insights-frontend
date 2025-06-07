import React from "react";
import {
  Drawer,
  AppBar,
  Toolbar,
  Box,
  IconButton,
  InputBase,
  Badge,
  styled,
  alpha
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SideBar from "../SideBar/sideBar";
import AccountPopover from "./AccountPopover";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '12px',
  backgroundColor: alpha(theme.palette.common.black, 0.04),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  maxWidth: '320px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary,
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5, 1.5, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    fontSize: '0.875rem',
    [theme.breakpoints.up('md')]: {
      width: '28ch',
      '&:focus': {
        width: '34ch',
      },
    },
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 3),
  height: 64,
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(0, 5),
  },
}));

const NavBar = () => {
  const drawerWidth = 280;

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          backgroundColor: "rgb(255, 255, 255)",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
        }}
      >
        <StyledToolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              size="large"
              color="default"
              sx={{
                backgroundColor: alpha('#000', 0.04),
                '&:hover': {
                  backgroundColor: alpha('#000', 0.08),
                },
              }}
            >
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <AccountPopover />
          </Box>
        </StyledToolbar>
      </AppBar>

      <nav
        style={{
          width: `${drawerWidth}px`,
        }}
      >
        <Drawer
          variant="permanent"
          open
          PaperProps={{
            sx: {
              backgroundColor: "rgb(255, 255, 255)",
              width: `${drawerWidth}px`,
              overflow: "auto",
              height: "100%",
              borderRight: '1px solid rgba(0, 0, 0, 0.08)',
            },
          }}
        >
          <SideBar />
        </Drawer>
      </nav>
    </>
  );
};

export default NavBar;
