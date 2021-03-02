import UserList from './UserList';
import Page from '~/components/Page';
import React, { useEffect } from 'react';
import { PATH_APP } from '~/routes/paths';
import { getChildren } from '~/redux/slices/user';
import { useDispatch, useSelector } from 'react-redux';
import HeaderDashboard from '~/components/HeaderDashboard';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

// ----------------------------------------------------------------------

function ChildrenCardsView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { children } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getChildren());
  }, [dispatch]);

  return (
    <Page title="Management | User Cards" className={classes.root}>
      <Container>
        <HeaderDashboard
          heading="User Cards"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Management', href: PATH_APP.management.root },
            { name: 'User', href: PATH_APP.management.user.root },
            { name: 'Cards' }
          ]}
        />
        <UserList users={children !== null ? children.data : []} />
      </Container>
    </Page>
  );
}

export default ChildrenCardsView;
