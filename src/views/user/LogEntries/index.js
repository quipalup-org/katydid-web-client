import React, { useEffect } from 'react';
import LogEntryList from './LogEntryList';
import { getlogEntry } from '~/redux/slices/log-entry';
import { PATH_APP } from '~/routes/paths';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Page from '~/components/Page';
import { Container, Avatar, Box, Typography } from '@material-ui/core';
import HeaderDashboard from '~/components/HeaderDashboard';
import DateDisplay from '~/components/Date/date';
import { getChildLogEntries } from '~/api/requests';
// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

// ----------------------------------------------------------------------

function LogEntryCardsView({ match }) {
  const classes = useStyles();
  const children = useSelector(state => state.children);
  const [logEntry, setLogEntry] = React.useState();

  useEffect(() => {
    getChildLogEntries(match.params.childId).then(data => {
      setLogEntry(data);
    });
  }, []);

  return (
    <Page title="Management | Children" className={classes.root}>
      <Container>
        <HeaderDashboard
          heading="Log Entries"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Child', href: PATH_APP.management.user.children },
            { name: 'Log entries' }
          ]}
        />
        <Box display="flex">
          {children.children.data.map(child =>
            match.params.childId === child.id ? (
              <Avatar
                sx={{ marginRight: 2 }}
                src={child.attributes.portraitURL}
              />
            ) : (
              <></>
            )
          )}
          <DateDisplay />
        </Box>
        {logEntry ? (
          <LogEntryList
            logEntry={logEntry !== null ? logEntry.data : []}
            child={children}
          />
        ) : (
          <Typography variant={'h5'} color={'textSecondary'} align={'center'}>
            No logs to display.
          </Typography>
        )}
      </Container>
    </Page>
  );
}

export default LogEntryCardsView;
