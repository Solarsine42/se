import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import HomeIcon from "@material-ui/icons/Home";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import MoodBadIcon from "@material-ui/icons/MoodBad";

import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import AutoLiability from "../Views/Auto/AutoLiability";
import AutoExtras from "../Views/Auto/AutoExtras";
import AutoMedical from "../Views/Auto/AutoMedical";
import AutoPDC from "../Views/Auto/AutoPDC";
import AutoLandingPage from "../Views/Auto/AutoLandingPage";
import HomeownersLandingPage from "../Views/Homeowners/HomeownersLandingPage";
import UmbrellaLandingPage from "../Views/Umbrella/UmbrellaLandingPage";
import VPPLandingPage from "../Views/VPP/VPPLandingPage";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Service Excellence
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon />
            <ListItemText>
              <Link to="/" onClick={handleDrawerClose}>
                Home Page
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DirectionsCarIcon />
            </ListItemIcon>
            <ListItemText>
              <Link to="/auto">Auto</Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>
              <Link to="/homeowners">Homeowners</Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BeachAccessIcon />
            </ListItemIcon>
            <ListItemText>
              <Link to="/umbrella">Umbrella</Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MonetizationOnIcon />
            </ListItemIcon>
            <ListItemText>
              <Link to="/vpp">VPP</Link>
            </ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <LiveHelpIcon />
            </ListItemIcon>
            <ListItemText primary="Claims FAQs" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LiveHelpIcon />
            </ListItemIcon>
            <ListItemText primary="Contract FAQs" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MoodBadIcon />
            </ListItemIcon>
            <ListItemText primary="Coverage Dispute Process" />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* Auto routes linked */}
            <Route path="/auto" component={AutoLandingPage} />
            <Route path="/auto_liability" component={AutoLiability} />
            <Route path="/auto_medical" component={AutoMedical} />
            <Route path="/auto_pdc" component={AutoPDC} />
            <Route path="/auto_extras" component={AutoExtras} />

            <Route path="/homeowners" component={HomeownersLandingPage} />
            <Route path="/umbrella" component={UmbrellaLandingPage} />
            <Route path="/vpp" component={VPPLandingPage} />
          </Switch>
        </main>
      </main>
    </div>
  );
}
