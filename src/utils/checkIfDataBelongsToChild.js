const checkIfDataBelongsToChild = (logEntry, match) => {
  if (logEntry) {
    if (logEntry.data[0].attributes.childId === match.params.childId) {
      return true;
    } else {
      return false;
    }
  }
};

export default checkIfDataBelongsToChild;
