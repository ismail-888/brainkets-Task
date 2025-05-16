"use client";
import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Avatar from "@mui/material/Avatar";
import { Badge } from "@mui/material";
import ProfileHeader from "./ProfileHeader";
import SummaryCards from "./SummaryCards";
import TabNavigation from "./TabNavigation";
const drawerWidth = 240;

const drawerItems = [
  { text: "Dashboard", icon: <DashboardOutlinedIcon /> },
  { text: "Timeline", icon: <CloudOutlinedIcon /> },
  { text: "Personal Info", icon: <PermIdentityOutlinedIcon /> },
  { text: "Compensation", icon: <AccountBalanceOutlinedIcon /> },
  { text: "Time Management", icon: <CalendarTodayOutlinedIcon /> },
  { text: "Holidays", icon: <BeachAccessIcon /> },
  { text: "Leaves", icon: <DescriptionOutlinedIcon /> },
  { text: "Job Data", icon: <WorkOutlineOutlinedIcon /> },
  { text: "Learning & Development", icon: <SchoolOutlinedIcon /> },
  { text: "Settings", icon: <SettingsOutlinedIcon /> },
];

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        open={open}
        elevation={0}
        sx={{
          backgroundColor: "#fff", // example: MUI default primary blue
          color: "black", // white text/icons for contrast
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Side */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[{ marginRight: 2 }, open && { display: "none" }]}
            >
              <MenuIcon />
            </IconButton>
            <SpaceDashboardOutlinedIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              component="div"
              fontWeight="bold"
              sx={{ color: "#444" }}
            >
              Employee Dashboard
            </Typography>
          </Box>

          {/* Right Side */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <LightModeOutlinedIcon />
            {/* Notifications */}
            <Badge
              badgeContent={3}
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  top: 6,
                  right: 4,
                },
              }}
            >
              <NotificationsOutlinedIcon />
            </Badge>

            {/* Avatar and Info */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar
                alt="Jane Doe"
                src="/images/avatar1.jpg"
                sx={{ width: 36, height: 36 }}
              />
              <Box sx={{ lineHeight: 1 }}>
                <Typography variant="body1" fontWeight="medium">
                  Jane Doe
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Product Design
                </Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "#F9F9F9", // light color for sidebar
            color: "black", // optional, text color for sidebar
          },
        }}
      >
        <DrawerHeader>
          <Box
            sx={{ display: "flex", alignItems: "center", flexGrow: 1, pl: 2 }}
          >
            <HomeOutlinedIcon fontSize="large" sx={{ mr: 1 }} />{" "}
            {open && (
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", fontSize: 20, color: "grey.800" }}
              >
                WorkPortal
              </Typography>
            )}
          </Box>

          {/* Close button */}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}

        {open && (
          <Typography
            variant="caption"
            sx={{
              pl: 3,
              pt: 2,
              color: "text.secondary",
              fontWeight: "bold",
            }}
          >
            Main Menu
          </Typography>
        )}
        <List>
          {drawerItems.map(({ text, icon }) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={[
                  { minHeight: 48, px: 2.5 },
                  open
                    ? { justifyContent: "initial" }
                    : { justifyContent: "center" },
                ]}
              >
                <ListItemIcon
                  sx={[
                    { minWidth: 0, justifyContent: "center" },
                    open ? { mr: 1 } : { mr: "auto" },
                  ]}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Box sx={{ marginBottom: 2 }}>
          <ProfileHeader />
          <SummaryCards/>
          <TabNavigation/>
        </Box>
      </Box>
    </Box>
  );
}
