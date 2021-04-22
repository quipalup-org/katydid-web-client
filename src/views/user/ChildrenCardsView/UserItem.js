import clsx from 'clsx';
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Icon} from '@iconify/react';
import twitterFill from '@iconify-icons/eva/twitter-fill';
import linkedinFill from '@iconify-icons/eva/linkedin-fill';
import facebookFill from '@iconify-icons/eva/facebook-fill';
import instagramFilled from '@iconify-icons/ant-design/instagram-filled';
import {getImgAvatar, getImgCover} from '~/utils/getImages';
import {alpha, makeStyles} from '@material-ui/core/styles';
import {Avatar, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core';
import {MIcon} from '~/@material-extend';

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
    paddingTop: 'calc(100% * 9 / 16)',
    '&:before': {
      top: 0,
      zIndex: 9,
      content: "''",
      width: '100%',
      height: '100%',
      position: 'absolute',
      backdropFilter: 'blur(3px)',
      borderTopLeftRadius: theme.shape.borderRadiusMd,
      borderTopRightRadius: theme.shape.borderRadiusMd,
      backgroundColor: alpha(theme.palette.primary.darker, 0.72)
    }
  },
  cardMedia: {
    top: 0,
    zIndex: 8,
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  avatarShape: {
    zIndex: 10,
    bottom: -26,
    position: 'absolute'
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

function UserItem({ user, className }) {
  const classes = useStyles();
  const { name, portraitURL } = user;

  let index = getRandomInt(1, 24);

    return (
      <CardActionArea
        component={Link} to='/'>
        <Card className={clsx(classes.root, className)}>


          <div className={classes.cardMediaWrap}>
            <MIcon
              size={144}
              color="paper"
              src="/static/icons/shape-avatar.svg"
              className={classes.avatarShape}
            />
            <Avatar
              alt={name}
              src={getImgAvatar(index)}
              sx={{
                width: 64,
                height: 64,
                zIndex: 11,
                position: 'absolute',
                transform: 'translateY(-50%)'
              }}
            />
            <CardMedia
              component="img"
              title="cover"
              data-sizes="auto"
              src="/static/images/placeholder.svg"
              data-src={getImgCover(600, index)}
              data-srcset={`${getImgCover(600, index)} 600w, ${getImgCover(
                960,
                index
              )} 960w`}
              className={clsx(classes.cardMedia, 'lazyload blur-up')}
            />
          </div>

          <CardContent className={classes.cardContent}>
            <Typography variant="subtitle1" align="center">
              {name}
            </Typography>
          </CardContent>
      </Card>
      </CardActionArea>
    );
}

export default UserItem;
