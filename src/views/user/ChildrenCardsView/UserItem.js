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
  Switch,
  Box
} from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  cardMediaWrap: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    paddingTop: 'calc(100% * 5 / 16)',
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
  }
}));

// ----------------------------------------------------------------------

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
  className: PropTypes.string
};

function UserItem({ user, className, childId }) {
  const classes = useStyles();
  const { name, portraitURL } = user;

  const path = `/app/children/${childId}/log-entries`;
  return (
    <CardActionArea>
      <Link to={path}>
        <Card className={clsx(classes.root, className)}>
          <div className={classes.cardMediaWrap}>
            <Avatar
              alt={name}
              src={portraitURL}
              sx={{
                width: 88,
                height: 88,
                zIndex: 11,
                position: 'absolute',
                transform: 'translateY(-50%)'
              }}
            />
          </div>

          <CardContent className={classes.cardContent}>
            <Typography variant="subtitle1" align="center">
              {name}
            </Typography>
          </CardContent>
          <Box display="flex" justifyContent="flex-end" width={1} padding={2}>
            <Switch checked={user.isPresent} name="isPresent" />
          </Box>
        </Card>
      </Link>
    </CardActionArea>
  );
}

export default UserItem;
