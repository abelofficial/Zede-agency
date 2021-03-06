import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import cNames from "classnames";
import Link from "next/link";
import { Typography } from "@material-ui/core";

const Cutomlink = ({ lable, path, children, underLine }) => {
  const useStyle = makeStyles((theme) => ({
    link: {
      textDecoration: "none",
      color: "inherit",
      "& >*": {
        ...theme.typography.link,
        marginLeft: theme.spacing(4),

        // fontSize: "1.2rem",
        [theme.breakpoints.down("sm")]: {
          marginBottom: theme.spacing(1),
          marginLeft: 0,
          // fontWeight: 600,
        },
      },
      "& active": {
        outline: "none",
      },
    },
    selected: {
      color: theme.palette.secondary.dark,

      [theme.breakpoints.down("sm")]: {
        borderBottom: underLine
          ? `2px solid ${theme.palette.secondary.light}`
          : "none",
        // paddingBottom: theme.spacing(1),
      },
      "& active": {
        outline: "none",
      },
    },
  }));
  const classes = useStyle();
  const router = useRouter();

  return (
    <Link href={path}>
      <a
        className={cNames(classes.link, {
          [`${classes.selected}`]:
            router.pathname == path ||
            (router.pathname.startsWith("/portfolios") &&
              path === "/portfolios"),
        })}
      >
        {children}
      </a>
    </Link>
  );
};

export default Cutomlink;
