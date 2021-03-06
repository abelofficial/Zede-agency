import Link from "next/link";
import PropTypes from "prop-types";

// Material-ui components
import {
  Button,
  ClickAwayListener,
  Fade,
  Hidden,
  IconButton,
  makeStyles,
  Paper,
  Slide,
  Tab,
  Tabs,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
// Core components
import NavLink from "./NavLink/NavLink";
import { useState } from "react";
import { Router, useRouter } from "next/router";
import { ReactSVG } from "react-svg";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    padding: 0,
    margin: 0,
    width: "100vw",
    maxWidth: "100%",
  },
  appBar: {
    // position: "relative",
    height: "fit-content",

    width: "100%",
    overflow: "hidden",
  },
  toolbar: {
    display: "flex",
    flexDirections: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
  },
  linkWrapper: {
    display: "flex",
    flexDirection: "row",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      // width: "100%",
    },
  },

  mobNavWrapper: {
    position: "fixed",
    zIndex: 200,

    display: "flex",
    width: "100%",
    flexDirection: "column",
    clor: "inherit",
    backgroundColor: theme.palette.primary.light,
    paddingTop: theme.spacing(16),
    paddingLeft: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    boxShadow: theme.shadows[0],
    border: "none",
    borderRadius: 0,
  },
  svgContainer: {
    "& svg": {
      width: "64px",
      height: "64px",
      justifySelf: "flex-end",
      fill: theme.palette.secondary.dark,
      "& #ze": {
        stroke: theme.palette.primary.dark,
      },
      "& #de": {
        stroke: theme.palette.secondary.dark,
      },
    },
  },
}));

const navigation = (props) => {
  const classes = useStyle();
  const [showMobNav, setShowMobNav] = useState(false);
  const route = useRouter();
  const trigger = useScrollTrigger();
  const clicked = (path) => {
    route.push(path);
  };
  const navLinks = (
    <div
      className={classes.linkWrapper}
      onClickCapture={() => setShowMobNav(false)}
    >
      <NavLink path='/' underLine>
        <Typography>Home</Typography>
      </NavLink>
      <NavLink path='/about' underLine>
        <Typography>About Us</Typography>
      </NavLink>
      <NavLink path='/team' underLine>
        <Typography>Our Team</Typography>
      </NavLink>
      <NavLink path='/portfolios' underLine>
        <Typography>Portfolio</Typography>
      </NavLink>
      <NavLink path='/contact' underLine>
        <Typography>Contact Us</Typography>
      </NavLink>
    </div>
  );
  return (
    <Slide
      appear={false}
      direction='down'
      in={!trigger}
      className={classes.wrapper}
    >
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <NavLink path='/'>
              <ReactSVG
                className={classes.svgContainer}
                src='/images/Zede-logo.svg'
              />
              {/* <img src='/images/Zede-logo.svg' width='60' alt='' /> */}
            </NavLink>
            <Hidden smDown>{navLinks}</Hidden>
            <Hidden mdUp>
              <IconButton
                style={{ backgroundColor: "transparent" }}
                onClick={() => setShowMobNav(!showMobNav)}
              >
                <Fade
                  in={!showMobNav}
                  unmountOnExit
                  timeout={{
                    enter: 600,
                    exit: 100,
                  }}
                >
                  <MenuIcon color='secondary' />
                </Fade>
                <Fade
                  in={showMobNav}
                  unmountOnExit
                  timeout={{
                    enter: 500,
                    exit: 200,
                  }}
                >
                  <CloseIcon color='secondary' />
                </Fade>
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Slide direction='down' in={showMobNav && !trigger} unmountOnExit>
            <Paper variant='outlined' className={classes.mobNavWrapper}>
              <ClickAwayListener onClickAway={() => setShowMobNav(false)}>
                {navLinks}
              </ClickAwayListener>
            </Paper>
          </Slide>
        </Hidden>
      </div>
    </Slide>
  );
};

export default navigation;
