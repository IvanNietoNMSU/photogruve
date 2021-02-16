import React from "react";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";

import Gallery from "../gallery/Gallery";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: "100%",
    minHeight: "100%",

    padding: "0px 20px 0px 0px",
  },
  mainContent: {
    minWidth: "100%",
    minHeight: "100%",
    backgroundColor: theme.palette.grey[100],
    borderRadius: "10px",
  },
  item: {
    padding: "15px",
  },
}));

const MainPage = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <div className={classes.mainContent}>
        <div className={classes.item}>
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default MainPage;