import clsx from 'clsx';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import twitterFill from '@iconify-icons/eva/twitter-fill';
import linkedinFill from '@iconify-icons/eva/linkedin-fill';
import facebookFill from '@iconify-icons/eva/facebook-fill';
import instagramFilled from '@iconify-icons/ant-design/instagram-filled';
import { getImgAvatar } from '~/utils/getImages';
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

const SOCIALS = [
  {
    name: 'Facebook',
    icon: <Icon icon={facebookFill} width={20} height={20} color="#1877F2" />
  },
  {
    name: 'Instagram',
    icon: <Icon icon={instagramFilled} width={20} height={20} color="#D7336D" />
  },
  {
    name: 'Linkedin',
    icon: <Icon icon={linkedinFill} width={20} height={20} color="#006097" />
  },
  {
    name: 'Twitter',
    icon: <Icon icon={twitterFill} width={20} height={20} color="#1C9CEA" />
  }
];

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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function UserItem({ user, className, childId }) {
  const classes = useStyles();
  const { name, portraitURL } = user;

  const [state, setState] = useState({
    checkedA: true
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  let index = getRandomInt(1, 24);
  const path = `/app/children/${childId}/log-entries`;
  return (
    <CardActionArea>
      <Link to={path}>
        <Card className={clsx(classes.root, className)}>
          <div className={classes.cardMediaWrap}>
            <Avatar
              alt={name}
              src={getImgAvatar(index)}
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
            <Switch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
            />
          </Box>
        </Card>
      </Link>
    </CardActionArea>
  );
}

export default UserItem;
