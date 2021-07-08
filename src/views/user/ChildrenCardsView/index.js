import UserList from './UserList';
import Page from '~/components/Page';
import React, { useEffect } from 'react';
import { PATH_APP } from '~/routes/paths';
import { getChildren } from '~/redux/slices/children';
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
  const children = useSelector(state => state.children);

  useEffect(() => {
    dispatch(getChildren());
  }, [dispatch]);

  return (
    <Page title="Management | Children" className={classes.root}>
      <Container>
        <HeaderDashboard
          heading="Children"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Children' }
          ]}
        />
        <UserList
          users={children.children !== null ? children.children.data : []}
        />
      </Container>
    </Page>
  );
}

export default ChildrenCardsView;
