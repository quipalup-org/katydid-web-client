import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2)
  },
  imageSize: {
    width: '80%'
  }
}));

// ----------------------------------------------------------------------

Section.propTypes = {
  className: PropTypes.string
};

function Section({ className }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <Box component="h3" sx={{ typography: 'h3', px: 5, mt: 5, mb: 15 }}>
        Hi, Welcome Back
      </Box>
      <Box display="flex" justifyContent="center">
        <img
          className={classes.imageSize}
          src="/static/illustrations/illustration_login.svg"
          alt="login"
        />
      </Box>
    </Card>
  );
}

export default Section;
