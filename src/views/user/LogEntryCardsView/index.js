import React, { useEffect } from 'react';
import LogEntryList from './LogEntryList';
import { getlogEntry } from '~/redux/slices/log-entry';
import { PATH_APP } from '~/routes/paths';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Page from '~/components/Page';
import { Container } from '@material-ui/core';
import HeaderDashboard from '~/components/HeaderDashboard';
import DateDisplay from '~/components/Date/date';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

// ----------------------------------------------------------------------

function LogEntryCardsView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const logEntry = useSelector(state => state.logEntry);

  useEffect(() => {
    dispatch(getlogEntry());
  }, [dispatch]);

  return (
    <Page title="Management | User Cards" className={classes.root}>
      <Container>
        <HeaderDashboard
          heading="Log Entries"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Management', href: PATH_APP.management.root },
            { name: 'User', href: PATH_APP.management.user.root },
            { name: 'Log entries' }
          ]}
        />
        <DateDisplay />
        <LogEntryList
          logEntry={logEntry.logEntry !== null ? logEntry.logEntry.data : []}
        />
      </Container>
    </Page>
  );
}

export default LogEntryCardsView;
