import React, { forwardRef } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOff from "@material-ui/icons/VolumeOff";
import FullScreen from "@material-ui/icons/Fullscreen";
const useStyles = makeStyles({
  controlsWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // background: "rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 1,
  },
  controlIcons: {
    color: "#F37A1F",
    transform: "scale(0.9)",
    "&:hover": {
      color: "#F37A1F",
      transform: "scale(1)",
    },
  },
  bottomIcons: {
    color: "#F37A1F",
    "&:hover": {
      color: "#181C4C",
    },
  },
  volumeSlider: {
    height:"100px !important",
    paddingRight:"20px !important",
    color: "#F37A1F",
    "&:hover": {
      color: "#181C4C",
    },
  },
});
function ValueLabelComponent(props) {
  const { children, open, value } = props;
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}
const PrettoSlider = withStyles({
  root: {
    color: "#F37A1F",
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: "#181C4C",
    border: "2px solid currentColor",
    marginTop: -4,
    marginLeft: -2,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
export default forwardRef(
  (
    {
      onPlayPause,
      playing,
      muted,
      onMute,
      onVolumeChange,
      onVolumeSeekUp,
      volume,
      onToggleFullScreen,
      played,
      onSeekSlider,
      onSeekMouseDown,
      onSeekMouseUp,
      elapsedTime,
      totalDuration,
      onChangeDisplayFormat,
    },
    ref
  ) => {
    const classes = useStyles();
    return (
      
      <div className={classes.controlsWrapper} ref={ref}> 
        {/* Top controls */}
        <Grid container direction="row" justify="flex-end">
          <Grid item>
            <IconButton
              onClick={onToggleFullScreen}
              className={classes.bottomIcons}
            >
              <FullScreen fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={onMute} className={classes.bottomIcons}>
              {muted ? (
                <VolumeOff fontSize="small" />
              ) : (
                <VolumeUpIcon fontSize="small" />
              )}
            </IconButton>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="flex-end" >
          <Grid container justify="flex-end" direction="row">
            <Slider
              min={0}
              max={100}
              value={volume * 100}
              className={classes.volumeSlider}
              onChange={onVolumeChange}
              onChangeCommitted={onVolumeSeekUp}
              orientation="vertical"
              aria-labelledby="vertical-slider"
            />
          </Grid>
        </Grid>

        {/* bottom controls */}
        <Grid container direction="row" alignItems="center" >
          <Grid item xs={1}>
            <IconButton onClick={onPlayPause} className={classes.bottomIcons}>
              {playing ? (
                <PauseIcon fontSize="small" />
              ) : (
                <PlayArrowIcon fontSize="small" />
              )}
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <PrettoSlider
              min={0}
              max={100}
              value={played * 100}
              ValueLabelComponent={(props) => (
                <ValueLabelComponent {...props} value={elapsedTime} />
              )}
              onChange={onSeekSlider}
              onMouseDown={onSeekMouseDown}
              onChangeCommitted={onSeekMouseUp}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={onChangeDisplayFormat}
              variant="text"
            >
              <Typography className="video-duration">
                {elapsedTime} / {totalDuration}
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
);