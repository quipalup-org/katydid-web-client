import clsx from 'clsx';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  cardMediaWrap: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    paddingTop: 'calc(100% * 3 / 16)',
    '&:before': {
      top: 0,
      zIndex: 9,
      content: "''",
      width: '100%',
      height: '100%',
      position: 'absolute',
      backdropFilter: 'blur(3px)',
      borderTopLeftRadius: theme.shape.borderRadiusMd,
      borderTopRightRadius: theme.shape.borderRadiusMd
    }
  },
  cardContent: {
    paddingBottom: 0,
    marginTop: theme.spacing(3)
  },
  imageSizing: {
    width: '5%',
    height: '5%',
    padding: '0.25rem'
  }
}));

// ----------------------------------------------------------------------

LogEntry.propTypes = {
  //   log: PropTypes.object.isRequired,
  className: PropTypes.string
};

function LogEntry({ className }) {
  const classes = useStyles();

  const date = new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric'
  });
  return (
    <CardActionArea>
      <Card
        className={clsx(classes.root, className)}
        display="flex"
        justifyContent="between"
      >
        <div className={classes.cardMediaWrap}>
          <Avatar
            variant="square"
            alt={'log-entry'}
            src={'https://image.flaticon.com/icons/png/512/2648/2648958.png'}
            sx={{
              width: 70,
              height: 70,
              zIndex: 11,
              position: 'absolute',
              transform: 'translateY(-50%)'
            }}
          />
        </div>

        <CardContent className={classes.cardContent}>
          <Box display="flex" justifyContent="center" width={1}>
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
          </Box>
          <Typography variant="h6" align="center">
            {date}
          </Typography>
          <Box textAlign="center">
            <KeyboardArrowDownIcon />
          </Box>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}

export default LogEntry;
