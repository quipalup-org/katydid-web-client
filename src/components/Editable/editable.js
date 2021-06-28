import React from 'react';
import {
  Box,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  IconButton
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
  root: {},
  iconButton: {
    marginRight: 0
  }
}));

function Editable({ logEntry }) {
  const classes = useStyles();
  const [editMode, setEditMode] = React.useState(false);
  const [editedLogEntry, setEditedLogEntry] = React.useState(logEntry);

  const handleEditModeClick = () => {
    setEditMode(true);
  };

  const handleEditModeSaveClick = () => {
    setEditMode(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width={1}
    >
      <ListItem sx={{ p: 1 }}>
        <ListItemText>
          {editMode ? (
            <TextField
              fullWidth={true}
              value={editedLogEntry}
              defaultValue={logEntry}
              onChange={e => setEditedLogEntry(e.target.value)}
            >
              {logEntry}
            </TextField>
          ) : (
            <p fullWidth={true} value={editedLogEntry}>
              {editedLogEntry}
            </p>
          )}
        </ListItemText>

        {editMode ? (
          <Button sx={{ ml: 2 }} onClick={handleEditModeSaveClick}>
            Save
          </Button>
        ) : (
          <ListItemIcon className={classes.iconButton} sx={{ m: 0 }}>
            <IconButton onClick={handleEditModeClick}>
              <EditIcon />
            </IconButton>
          </ListItemIcon>
        )}
      </ListItem>
    </Box>
  );
}

export default Editable;
