const checkIfParamsMatches = (logEntry, match) => {
  if (logEntry) {
    if (logEntry.data[0].attributes.childId === match.params.childID) {
      return true;
    } else {
      return false;
    }
  }
};

export default checkIfParamsMatches;
